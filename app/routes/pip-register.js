const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  // DEV READY

  // Eligibility launched from main UI
  router.post('/pip-register/signposting-eligibility/service-start-page', function(request, response) {
  var newClaim = request.session.data['claiming-self']
  if (newClaim == 'yes'){
      response.redirect('/pip-register/signposting-eligibility/over-16')
  } else if (newClaim == "no") {
      response.redirect('/pip-register/signposting-eligibility/someone-else-bau-kickout')
  }
  })


  // Are you over 16 and under SPA?
  router.post('/pip-register/signposting-eligibility/over-16', function(request, response) {
      var correctAge = request.session.data['age']
      if (correctAge == 'yes'){
          response.redirect('/pip-register/signposting-eligibility/security-check')
      } else if (correctAge == "no-under-16") {
          response.redirect('/pip-register/signposting-eligibility/under-16-ineligible')
      } else if (correctAge == "no-over-spa") {
          response.redirect('/pip-register/signposting-eligibility/stop-getting-pip-last-year')
      }
  })

  // What security questions were answered?
  router.post('/pip-register/signposting-eligibility/security-check', function(request, response) {
      var srel = request.session.data['security-verified']
      if (srel == 'yes'){
          response.redirect('/pip-register/signposting-eligibility/srel')
      } else if (srel == "no") {
          response.redirect('/pip-register/signposting-eligibility/failed-security')
      }
      })

  // Claiming under SREL?
  router.post('/pip-register/signposting-eligibility/srel', function(request, response) {
      var srel = request.session.data['srel']
      if (srel == 'yes'){
          response.redirect('/pip-register/signposting-eligibility/srel-bau-kickout')
      } else if (srel == "no") {
          response.redirect('/pip-register/welcome-screens/welcome-screen-ni')
      }
      })

  //---------------------------------------------------------------------------------------------

  // Welcome screens

  // Welcome screen NI
  router.post('/pip-register/welcome-screens/welcome-screen-ni', function(request, response) {
      response.redirect('/pip-register/welcome-screens/welcome-screen-ni-2')
  })

  // Welcome screen 2
  router.post('/pip-register/welcome-screens/welcome-screen-ni-2', function(request, response) {
      response.redirect('/pip-register/welcome-screens/welcome-screen-ni-3')
  })

  // Welcome screen 3
  router.post('/pip-register/welcome-screens/welcome-screen-ni-3', function(request, response) {
      response.redirect('/pip-register/declaration')
  })

  //---------------------------------------------------------------------------------------------

  // Declaration
  router.post('/pip-register/declaration', function(request, response) {
      response.redirect('/pip-register/task-list')
  })

  // --------------------------------------------------------------------------------------

  //pip-register/Contact-details

  // What is your name
  router.post('/pip-register/contact-details/what-is-your-name', function(request, response) {
      response.redirect('/pip-register/contact-details/what-is-your-dob')
  })

  // What is your DOB
  router.post('/pip-register/contact-details/what-is-your-dob', function(request, response) {
      response.redirect('/pip-register/contact-details/what-is-your-phone-number')
  })

  // What is your phone number page
  router.post('/pip-register/contact-details/what-is-your-phone-number', function(request, response) {
          response.redirect("/pip-register/contact-details/do-you-want-to-receive-text-updates")
  })

  // What is your Textphone number?
  router.post('/pip-register/contact-details/alt-formats/what-is-your-textphone-number', function(request, response) {
      response.redirect('/pip-register/contact-details/do-you-want-to-receive-text-updates')
  })

  // What signing or lipspeaking service do you need?
  router.post('/pip-register/contact-details/alt-formats/signing-lipspeaking', function(request, response) {
      response.redirect('/pip-register/contact-details/do-you-want-to-receive-text-updates')
  })

  // Do you want to receive text updates
  router.post('/pip-register/contact-details/do-you-want-to-receive-text-updates', function(request, response) {
      response.redirect('/pip-register/contact-details/what-is-your-postcode')
  })

  // What is your postcode page
  router.post('/pip-register/contact-details/what-is-your-postcode', function(request, response) {
      response.redirect('/pip-register/contact-details/select-your-address')
  })

  // Select your address page
  router.post('/pip-register/contact-details/select-your-address', function(request, response) {
      response.redirect('/pip-register/contact-details/correspondence-address')
  })

  // Enter address manually page
  router.post('/pip-register/contact-details/enter-address-manually-country', function(request, response) {
      response.redirect('/pip-register/contact-details/correspondence-address')
  })

  // Is this the address we should send letters to page
  router.post('/pip-register/contact-details/correspondence-address', function(request, response) {
      var sendLettersElsewhere = request.session.data['should-we-write-to-you']
      if (sendLettersElsewhere == 'yes'){
          response.redirect('/pip-register/contact-details/alt-formats/written-format')
      } else if (sendLettersElsewhere == 'no') {
          response.redirect('/pip-register/contact-details/correspondence-postcode')
      }
  })

  // Would you like us to send your letters in another way, like larger text, audio or braille?
  router.post('/pip-register/contact-details/alt-formats/written-format', function(request, response) {
      var writtenFormat = request.session.data['written-format']
      if (writtenFormat == 'standard-letter'){
          response.redirect('/pip-register/task-list-cd-done')
      } else if (writtenFormat == 'large-print') {
          response.redirect('/pip-register/contact-details/alt-formats/large-print')
       } else if (writtenFormat == 'audio') {
          response.redirect('/pip-register/contact-details/contact-details-summary')
      } else if (writtenFormat == 'braille') {
          response.redirect('/pip-register/contact-details/contact-details-summary')
      } else if (writtenFormat == 'email') {
          response.redirect('/pip-register/contact-details/alt-formats/email-reason')
      } else if (writtenFormat == 'pdf') {
          response.redirect('/pip-register/contact-details/alt-formats/email-reason')
      }

  })

  // What size print do you need?
  router.post('/pip-register/contact-details/alt-formats/large-print', function(request, response) {
      response.redirect('/pip-register/contact-details/contact-details-summary')
  })

  // Why do you need us to contact you by email instead of printed letters?
  router.post('/pip-register/contact-details/alt-formats/email-reason', function(request, response) {
      response.redirect('/pip-register/contact-details/alt-formats/what-is-your-email')
  })

  // What is your email address?
  router.post('/pip-register/contact-details/alt-formats/what-is-your-email', function(request, response) {
      response.redirect('/pip-register/contact-details/contact-details-summary')
  })

  // What is your correspondence postcode page
  router.post('/pip-register/contact-details/correspondence-postcode', function(request, response) {
      response.redirect('/pip-register/contact-details/confirm-correspondence-address')
  })

  // Confirm correspondence address > correspondence alt formats page
  router.post('/pip-register/contact-details/confirm-correspondence-address', function(request, response) {
      response.redirect('/pip-register/contact-details/alt-formats/written-format')
  })

  // Confirm correspondence address page
  router.post('/pip-register/contact-details/correspondence-enter-address-manually', function(request, response) {
      response.redirect('/pip-register/contact-details/alt-formats/written-format')
  })

  // Contact details summary page
  router.post('/pip-register/contact-details/contact-details-summary', function(request, response) {
      response.redirect('/pip-register/task-list-cd-done')
  })

  // -------------------------------------------------------------------------------------

  //pip-register/ADDITIONAL-SUPPORT

  // -------------------------------------------------------------------------------------

  //pip-register/NATIONALITY

  //MTP APRIL RELEASE - NATIONALITY
  //pip-register/nationality

  //start
  router.post('/pip-register/nationality/start', function(request, response) {
      response.redirect('/pip-register/nationality/what-is-your-nationality')
  })

  //what is your nationality
  router.post('/pip-register/nationality/what-is-your-nationality', function(request, response) {
      var nationality = request.session.data['nationality']
      if (nationality == 'british'){
          response.redirect('/pip-register/nationality/uk-2-of-3-years')
      } else if (nationality == 'irish') {
          response.redirect('/pip-register/nationality/uk-2-of-3-years')
      } else if (nationality == 'other') {
          response.redirect('/pip-register/nationality/another-nationality')
      }
  })

  //Have you been in the UK for at least 2 of the last 3 years?
  router.post('/pip-register/nationality/uk-2-of-3-years', function(request, response) {
      var ukYears = request.session.data['uk-years']
      if (ukYears == 'yes'){
          response.redirect('/pip-register/nationality/insurance-abroad')
      } else if (ukYears == 'no') {
          response.redirect('/pip-register/nationality/insurance-abroad')
      } else if (ukYears == 'unsure') {
          response.redirect('/pip-register/nationality/insurance-abroad')
      }
  })

  //Select other nationality
  router.post('/pip-register/nationality/another-nationality', function(request, response) {
      var anotherNationality = request.session.data['another-nationality']
      if (anotherNationality == 'Norway' || anotherNationality == 'Iceland'){
          response.redirect('/pip-register/nationality/unhappy-path/nationality-types/living-in-uk-before')
      }
      if (anotherNationality == 'Australia' || anotherNationality == 'Brazil' || anotherNationality == 'Bangladesh' ){
          response.redirect('/pip-register/nationality/uk-2-of-3-years')
      }
  })

  //Were you living in the UK on or before 31/12/20?
  router.post('/pip-register/nationality/unhappy-path/nationality-types/living-in-uk-before', function(request, response) {
      response.redirect('/pip-register/nationality/uk-2-of-3-years')
  })

  //Are you working or paying national insurance in another country?

  router.post('/pip-register/nationality/insurance-abroad', function(request, response) {
      var payingInsurance= request.session.data['insurance-abroad']
      if (payingInsurance == 'no'){
        response.redirect('/pip-register/nationality/benefits-abroad')
      } else if (payingInsurance == 'yes') {
          response.redirect('/pip-register/nationality/benefits-abroad')
      }
    })

    // Are you receiving pensions or benefits in another country?
    router.post('/pip-register/nationality/benefits-abroad', function(request, response) {
        var payingBenefits= request.session.data['benefits-abroad']
        if (payingBenefits == 'no'){
          response.redirect('/pip-register/task-list-nat-done')
        } else if (payingBenefits == 'yes') {
            response.redirect('/pip-register/task-list-nat-done')
        }
    })

          //What country are you receiving pensions or benefits in?
          router.post('/pip-register/nationality/exportability/what-country-benefits', function(request, response) {
              response.redirect('/pip-register/task-list-nat-done')
          })

      //Are any of your family members receiving pensions or benefits in another country?
      router.post('/pip-register/nationality/exportability/family-receiving-benefits', function(request, response) {
          var payingBenefits= request.session.data['family-receiving-benefits']
          if (payingBenefits == 'no'){
          response.redirect('/pip-register/task-list-nat-done')
          } else if (payingBenefits == 'yes') {
              response.redirect('/pip-register/nationality/exportability/family-country-benefits')
          }
      })

      //What country are your family members receiving pensions or benefits in?
      router.post('/pip-register/nationality/exportability/family-country-benefits', function(request, response) {
      response.redirect('/pip-register/task-list-nat-done')
      })


  //--------------------------------------------------------------------------------------------------------------
  //nationality start
  router.post('/pip-register/nationality/start', function(request, response) {
      response.redirect('/pip-register/nationality/what-is-your-nationality')
  })

  //what is your nationality
  router.post('/pip-register/nationality/what-is-your-nationality', function(request, response) {
      var nationality = request.session.data['nationality']
      if (nationality == 'british'){
          response.redirect('/pip-register/nationality/what-country-do-you-live-in')
      } else if (nationality == 'irish') {
          response.redirect('/pip-register/nationality/what-country-do-you-live-in')
      } else if (nationality == 'other') {
          response.redirect('/pip-register/nationality/another-nationality')
      }
  })

  // Another nationality
  router.post('/versions/devs/nationality/another-nationality', function(request, response) {
      response.redirect('/versions/devs/nationality/what-country-do-you-live-in')
  })

  //what country do you normally live in page
  router.post('/versions/devs/nationality/what-country-do-you-live-in', function(request, response) {
      var nationality = request.session.data['country']
      if (nationality == 'northern-ireland'){
          response.redirect('/versions/devs/nationality/lived-elsewhere')
      } else if (nationality == 'england') {
          response.redirect('/versions/devs/nationality/lived-elsewhere')
      } else if (nationality == 'wales') {
          response.redirect('/versions/devs/nationality/lived-elsewhere')
      } else if (nationality == 'scotland') {
          response.redirect('/versions/devs/nationality/lived-elsewhere')
      } else if (nationality == 'another-country') {
          response.redirect('/versions/devs/nationality/another-country-lived-in')
      }
  })

  // Another country
  router.post('/versions/devs/another-country-lived-in', function(request, response) {
      response.redirect('/versions/devs/nationality/lived-elsewhere')
  })


  //Have you lived anywhere other than UK in last 3 years page
  router.post('/versions/devs/nationality/lived-elsewhere', function(request, response) {
      var livedElsewhere = request.session.data['lived-elsewhere']
      if (livedElsewhere == 'yes'){
          response.redirect('#')
      } else if (livedElsewhere == 'no') {
          response.redirect('/versions/devs/nationality/abroad-over-four-weeks')
      }
  })

  //Have you been abroad for any periods over 4 weeks, in the last 3 years page
  router.post('/versions/devs/nationality/abroad-over-four-weeks', function(request, response) {
      var livedAbroad = request.session.data['abroad-over-four-weeks']
      if (livedAbroad == 'yes'){
          response.redirect('#')
      } else if (livedAbroad == 'no') {
          response.redirect('/versions/devs/nationality/benefits-abroad')
      }
  })

  //benefits abroad
  router.post('/versions/devs/nationality/benefits-abroad', function(request, response) {
      var benefitsAbroad = request.session.data['benefits-abroad']
      if (benefitsAbroad == 'yes'){
          response.redirect('/versions/devs/nationality/insurance-abroad')
      } else if (benefitsAbroad == 'no') {
          response.redirect('/versions/devs/nationality/insurance-abroad')
      }
  })

  //are you or a family member working or paying insurance from Switzerland or EEA?
  router.post('/versions/devs/nationality/insurance-abroad', function(request, response) {
      var insuranceAbroad = request.session.data['insurance-abroad']
      if (insuranceAbroad == 'yes'){
          response.redirect('/versions/devs/nationality/nationality-summary')
      } else if (insuranceAbroad == 'no') {
          response.redirect('/versions/devs/nationality/nationality-summary')
      }
  })

  //summary to task list
  router.post('/versions/devs/nationality/nationality-summary', function(request, response) {
      response.redirect('/versions/devs/task-list-nat-done')
  })

  // -------------------------------------------------------------------------------------

  //pip-register/HEALTHCARE-PROFESSIONAL

     //start ---> healthcare-prof-type
     router.post('/pip-register/healthcare-professional/start', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/healthcare-prof-type')
  })


  //healthcare-prof-type ---> what is their postcode
  router.post('/pip-register/healthcare-professional/healthcare-prof-type', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/postcode')
  })

  //healthcare-prof-type ---> find address
  router.post('/pip-register/healthcare-professional/healthcare-prof-type', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/postcode')
  })

  //find address ---> select address
  router.post('/pip-register/healthcare-professional/postcode', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/select-your-address')
  })

  //select address ---> addiitonal support needed
  router.post('/pip-register/healthcare-professional/select-your-address', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/additional-support-needed')
  })

  //enter-address-manually ----> second support needed?
  router.post('/pip-register/healthcare-professional/enter-address-manually', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/additional-support-needed')
  })


  //additional-support-needed ---> additional-support-type
  router.post('/pip-register/healthcare-professional/additional-support-needed', function(request, response) {
      var hcpTwoNeeded = request.session.data['support-needed']
      if (hcpTwoNeeded == 'yes'){
          response.redirect('/pip-register/healthcare-professional/additional-support-type')
      } else if (hcpTwoNeeded == 'no') {
          response.redirect('/pip-register/healthcare-professional/consent-NI')
      }
  })

  //additional-support-type ---> find address
  router.post('/pip-register/healthcare-professional/additional-support-type', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/postcode-support')
  })

  //find address ---> select address
  router.post('/pip-register/healthcare-professional/postcode-support', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/select-support-address')
  })

  //enter-address-manually ----> hospital and accom start
  router.post('/pip-register/healthcare-professional/support-address-manually', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/consent-NI')
  })


  //select support address ---> hospital and accom start
  router.post('/pip-register/healthcare-professional/select-support-address', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/consent-NI')
  })

  //consent NI ----> hcp cya 2 person
  router.post('/pip-register/healthcare-professional/consent-NI', function(request, response) {
      response.redirect('/pip-register/healthcare-professional/hcp-cyas/hp-summary-two')
  })

  //---------------------------------------------------------------------------------
  //pip-register/HEALTHCARE-PROFESSIONAL/CYAS

  //remove 2nd hcp
  router.post('/pip-register/healthcare-professional/hcp-cyas/remove-health-professional-2', function(request, response) {
      var removeHcp = request.session.data['remove-second-hcp']
      if (removeHcp == 'yes'){
          response.redirect('/pip-register/healthcare-professional/healthcare-prof-type')
      } else if (removeHcp == 'no'){
      response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-second-hcp')
  }
  })

  //remove main hcp
  router.post('/pip-register/healthcare-professional/hcp-cyas/remove-health-professional', function(request, response) {
      var removeHcp = request.session.data['remove-hcp']
      if (removeHcp == 'yes'){
          response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-main-hcp')
      } else if (removeHcp == 'no'){
      response.redirect('/pip-register/healthcare-professional/hcp-cyas/hp-summary-two')
  }
  })

  //remove final hcp
  router.post('/pip-register/healthcare-professional/hcp-cyas/remove-add-health-professional', function(request, response) {
      var removeHcp = request.session.data['remove-final-hcp']
      if (removeHcp == 'yes'){
          response.redirect('/pip-register/healthcare-professional/hcp-cyas/add-new/healthcare-prof-type')
      } else if (removeHcp == 'no'){
      response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-main-hcp')
  }
  })


  //add new hcp from remocving all contacts---> do you want to add another contact?
  router.post('/pip-register/healthcare-professional/hcp-cyas/add-new/additional-support-needed', function(request, response) {
      var removeHcp = request.session.data['support-needed']
      if (removeHcp == 'yes'){
          response.redirect('/pip-register/healthcare-professional/hcp-cyas/add-new/additional-support-type')
      } else if (removeHcp == 'no'){
      response.redirect('/pip-register/healthcare-professional/hcp-cyas/remove-second-hcp')
  }
  })

  //----------------------------------------------------------------------------------
  //pip-register/ADDITIONAL-SUPPORT

  router.post('/pip-register/additional-support/start-info', function(request, response) {
      response.redirect('/pip-register/additional-support/do-you-have-a-condition')
  })

  // do you have a condition
  router.post('/pip-register/additional-support/do-you-have-a-condition', function(request, response) {
      var anyCondition = request.session.data['any-condition']
      if (anyCondition == 'yes'){
          response.redirect('/pip-register/additional-support/complete-forms')
      } else if (anyCondition == 'no') {
          response.redirect('/pip-register/additional-support/advice-non-as-marker')
      }
  })

  // can you complete forms
  router.post('/pip-register/additional-support/complete-forms', function(request, response) {
      var forms = request.session.data['forms']
      var letters = request.session.data['letters']
      var post = request.session.data['post']
      if (forms == 'yes' && letters == 'yes' && post == 'yes') {
          response.redirect('/pip-register/additional-support/advice-non-as-marker')
        } else if (forms == 'no' || letters == 'no' || post == 'no') {
          response.redirect('/pip-register/additional-support/helpers')
        }
  })

  router.post('/pip-register/additional-support/read-letters', function(request, response) {
      response.redirect('/pip-register/additional-support/post')
  })

  router.post('/pip-register/additional-support/post', function(request, response) {
      response.redirect('/pip-register/additional-support/helpers')
  })

  // Do you have anyone to help you?
  router.post('/pip-register/additional-support/helpers', function(request, response) {
      var anyoneHelp = request.session.data['helpers']
      if (anyoneHelp == 'yes'){
          response.redirect('/pip-register/additional-support/who-helps')
      } else if (anyoneHelp == 'no') {
          response.redirect('/pip-register/additional-support/advice-as-marker')
      }
  })

  router.post('/pip-register/additional-support/who-helps', function(request, response) {
      response.redirect('/pip-register/additional-support/advice-as-marker')
  })

  router.post('/pip-register/additional-support/advice', function(request, response) {
      response.redirect('/pip-register/additional-support/add-support-summary')
  })
  // -------------------------------------------------------------------------------------

  //pip-register/HOSPITAL-DATES

  //hospital and accom start ----> Are you in hospital or hospice as an in-patient today?
  router.post('/pip-register/hospital-dates/5-1-why-we-need-details', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-2-today')
  })
  // Are you in hospital or hospice as an in-patient today?
  router.post('/pip-register/hospital-dates/5-2-today', function(request, response) {
      var hospitalToday = request.session.data['hospital-today']
      if (hospitalToday == 'yes-hospital'){
          response.redirect('/pip-register/hospital-dates/5-4-yesterday')
      } else if (hospitalToday == 'no') {
          response.redirect('/pip-register/hospital-dates/5-3-other-housing-today')
      } else if (hospitalToday == 'yes-hospice') {
          response.redirect('/pip-register/hospital-dates/5-8-hospice-yesterday')
      }
  })

  // Were you in hospital yesterday?
  router.post('/pip-register/hospital-dates/5-4-yesterday', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-5-private-patient')
  })


  // are you a private patient? > What is the name and address of the hospital?
  router.post('/pip-register/hospital-dates/5-5-private-patient', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-6-postcode')
  })

  // postcode > select address
  router.post('/pip-register/hospital-dates/5-6-postcode', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-7-select-hospital-address')
  })

  // postcode > select address
  router.post('/pip-register/hospital-dates/5-7-select-hospital-address', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // hospital manually > start bank
  router.post('/pip-register/hospital-dates/5-17-hospital-address-manually', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // hospice manually > start bank
  router.post('/pip-register/hospital-dates/5-18-hospice-address-manually', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // other manually > start bank
  router.post('/pip-register/hospital-dates/5-19-other-address-manually', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // Were you in hospice yesterday?
  router.post('/pip-register/hospital-dates/5-8-hospice-yesterday', function(request, response) {
      var otherYesterday = request.session.data['hospice-yesterday']
      if (otherYesterday == 'yes'){
          response.redirect('/pip-register/hospital-dates/5-9-hospice-dates')
      } else if (otherYesterday == 'no') {
          response.redirect('/pip-register/hospital-dates/5-10-hospice-postcode')
      }
  })

  // Do you know the date you went into the hospice?
  router.post('/pip-register/hospital-dates/5-9-hospice-dates', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-10-hospice-postcode')
  })

  // select hospice address
  router.post('/pip-register/hospital-dates/5-10-hospice-postcode', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-11-select-hospice-address')
  })

  // select hospice address
  router.post('/pip-register/hospital-dates/5-10-hospice-postcode', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-11-select-hospice-address')
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post('/pip-register/hospital-dates/5-11-select-hospice-address', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // Are you living in a care home or nursing home, sheltered housing, a residential college or a hostel today?
  router.post('/pip-register/hospital-dates/5-3-other-housing-today', function(request, response) {
      var otherToday = request.session.data['other-today']
      if (otherToday == 'yes'){
          response.redirect('/pip-register/hospital-dates/5-12-other-yesterday')
      } else if (otherToday == 'no') {
          response.redirect('/pip-register/task-list-accom-done')
      }
  })

  // Were you living in this place yesterday?
  router.post('/pip-register/hospital-dates/5-12-other-yesterday', function(request, response) {
      var otherYesterday = request.session.data['other-yesterday']
      if (otherYesterday == 'yes'){
          response.redirect('/pip-register/hospital-dates/5-15-other-postcode')
      } else if (otherYesterday == 'no') {
          response.redirect('/pip-register/hospital-dates/5-15-other-postcode')
      }
  })

  //  Can you confirm the first line of the address place you are staying in?
  router.post('/pip-register/hospital-dates/5-15-other-postcode', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-16-select-other-address')
  })

  // Select other address > tasklist
  router.post('/pip-register/hospital-dates/5-16-select-other-address', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-13-third-party-pay')
  })

  // Does a local authority, health authority, Jobcentre Plus, or a charity pay any of the costs for you to live there?
  router.post('/pip-register/hospital-dates/5-13-third-party-pay', function(request, response) {
      var thirdPartyPay = request.session.data['third-party-pay']
      if (thirdPartyPay == 'health-trust'){
          response.redirect('/pip-register/hospital-dates/5-23-name-local')
      } else if (thirdPartyPay == 'no') {
          response.redirect('/pip-register/task-list-accom-done')
      } else if (thirdPartyPay == 'yes') {
          response.redirect('/pip-register/hospital-dates/5-23-name')
      }
  })

  // What is the name of the [organisation type]?
  router.post('/pip-register/hospital-dates/5-23-name', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // local auth ---> What is the name -----> agreement?
  router.post('/pip-register/hospital-dates/5-23-name-local', function(request, response) {
      response.redirect('/pip-register/hospital-dates/5-14-local-agreement')
  })

  // agreement to task list
  router.post('/pip-register/hospital-dates/5-14-local-agreement', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // Do you have an agreement with the local authority to repay any of the costs?
  router.post('/pip-register/hospital-dates/hospital-dates/5-14-local-agreement', function(request, response) {
      response.redirect('/pip-register/task-list-accom-done')
  })

  // -------------------------------------------------------------------------------------

  //pip-register/BANK-DETAILS/MAIN-ACCOUNT-DETAILS

  // Can you give me your account details now?
  router.post('/pip-register/bank-details/6-1-start', function(request, response) {
      var detailsNow = request.session.data['details-now']
      if (detailsNow == 'yes'){
          response.redirect('/pip-register/bank-details/6-3-main-account-details-v2')
      } else if (detailsNow == 'no') {
          response.redirect('/pip-register/bank-details/6-2-no-details-now')
      }
  })

  // You can continue without entering account details
  router.post('/pip-register/bank-details/6-2-no-details-now', function(request, response) {
      response.redirect('/pip-register/task-list-bank-done')
  })

  // Main account details
  router.post('/pip-register/bank-details/6-3-main-account-details-v2', function(request, response) {
      response.redirect('/pip-register/bank-details/bank-details-summary')
  })

  // Bank details CYA to task list
  router.post('/pip-register/bank-details/bank-details-summary', function(request, response) {
      response.redirect('/pip-register/task-list-bank-done')
  })

  //Motability to Motability CYA
  router.post('/pip-register/motability/motability', function(request, response) {
      response.redirect('/pip-register/task-list-motability-done')
  })

  //Motability to Motability CYA
  router.post('/pip-register/task-list-motability-done', function(request, response) {
      response.redirect('/pip-register/what-happens-next/what-happens-next')
  })

  // -------------------------------------------------------------------------------------

  // Save application- i will now submit
  router.post('/pip-register/what-happens-next/save-application', function(request, response) {
      response.redirect('/pip-register/what-happens-next/what-happens-next')
  })
  //design-updates/sprint-20/what-happens-next/what-happens-next
  router.post('/pip-register/what-happens-next/what-happens-next', function(request, response) {
      var previousOnline = request.session.data['previous-online-claim']
      if (previousOnline  == 'yes'){
          response.redirect('/pip-register/what-happens-next/paper-whn-1')
      } else if (previousOnline  == 'no') {
          response.redirect('/pip-register/what-happens-next/online-form-option')
      }
  })

  router.post('/pip-register/what-happens-next/online-form-option', function(request, response) {
      var previousOnline = request.session.data['form-online']
      if (previousOnline  == 'online'){
          response.redirect('/pip-register/what-happens-next/online-form-contact')
      } else if (previousOnline  == 'paper') {
          response.redirect('/pip-register/what-happens-next/paper-whn-1')
      }
  })

  // Online whn1 (form contact details)
  router.post('/pip-register/what-happens-next/online-form-contact', function(request, response) {
      response.redirect('/pip-register/what-happens-next/online-whn-1')
  })

  // Online whn 1- whn 2
  router.post('/pip-register/what-happens-next/online-whn-1', function(request, response) {
      response.redirect('/pip-register/what-happens-next/online-whn-2')
  })

  // Online whn 2- paper-after-sent
  router.post('/pip-register/what-happens-next/online-whn-2', function(request, response) {
      response.redirect('/pip-register/what-happens-next/after-form-sent')
  })

  router.post('/pip-register/what-happens-next/previously-claimed-online', function(request, response) {
          response.redirect('/pip-register/what-happens-next/paper-whn-1')
  })

  // Paper whn 1- whn 2
  router.post('/pip-register/what-happens-next/paper-whn-1', function(request, response) {
      response.redirect('/pip-register/what-happens-next/paper-whn-2')
  })

  // Paper whn 2- paper-after-sent
  router.post('/pip-register/what-happens-next/paper-whn-2', function(request, response) {
      response.redirect('/pip-register/what-happens-next/after-form-sent')
  })

  // After-form-sent > end claim and clear session
  router.post('/pip-register/what-happens-next/after-form-sent', function(request, response) {
      response.redirect('/pip-register/what-happens-next/application-submitted')
  })

  // -------------------------------------------------------------------------------------

}
