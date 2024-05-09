//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

// STARLING DECIDE DATES

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */

   const months = [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December'
   ]

    var filters = {
      getMonth (month) {
        const monthIndex = parseInt(month, 10) - 1
        return months[monthIndex]
      },
      formatDate (input) {
        const date = input ? new Date(input) : new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        return day + ' ' + months[month] + ' ' + year
      }
  }

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  //filter split..
  filters.split = (string, splitCharacter) => {
    if (!string || typeof string != "string") return
    else return string.split(splitCharacter)
  }


  return filters
}
