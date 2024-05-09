const { compile } = require("nunjucks");
const express = require('express')

module.exports = function (router) {


// —————————————————————————————————

router.post('/agent-day-0-1-2/award-dates-data-input', (req, res, next) => {
        res.redirect('/agent-day-0-1-2/award-dates-AP-rec-check');
});

router.post(`/agent-day-0-1-2/award-dates-AP-rec-check`, (req, res) => {
  const agreeAPCheck = req.session.data['award-dates-AP-rec-check']

  if (agreeAPCheck == 'Yes') {
    res.redirect(`/agent-day-0-1-2/award-dates-playback`)
  }
   else {
    res.redirect(`/agent-day-0-1-2/award-dates-review-manual`)
  }
})

router.post(`/agent-day-0-1-2/award-dates-review-manual`, (req, res) => {
  const reviewDatesManual = req.session.data['award-dates-review-manual']

  if (reviewDatesManual == 'None') {
    res.redirect(`/agent-day-0-1-2/award-dates-payment-date`)
  }
   else {
    res.redirect(`/agent-day-0-1-2/award-dates-playback`)
  }
})



router.post(`/award-dates-payment-check-router`, (req, res) => {
  const paymentEndDate = req.session.data['award-dates-payment-check']

  if (paymentEndDate == 'Yes') {
    res.redirect(`award-dates-payment-date`)
  }
   else {
    res.redirect(`award-dates-playback`)
  }
})


}
