const { compile } = require("nunjucks");
const express = require('express')

module.exports = function (router) {


// —————————————————————————————————



router.post(`/agent/process-app/application-6-about-a1`, (req, res) => {
  const aboutA1 = req.session.data['application-5-about-a1']

  if (aboutA1 == 'Agree') {
    res.redirect(`/agent/process-app/application-6-about-a1-reason`)
  } else if (aboutA1 == 'Amended') {
    res.redirect(`/agent/process-app/application-6-about-a1-score`)
  } else {
   res.redirect(`/agent/process-app/application-6-about`)
 }
})

router.post('/agent/process-app/award-dates-data-input', (req, res, next) => {
        res.redirect('/agent/process-app/award-dates-AP-rec-check');
});

router.post(`/agent/process-app/award-dates-AP-rec-check`, (req, res) => {
  const agreeAPCheck = req.session.data['award-dates-AP-rec-check']

  if (agreeAPCheck == 'Yes') {
    res.redirect(`/agent/process-app/award-dates-playback`)
  }
   else {
    res.redirect(`/agent/process-app/award-dates-review-manual`)
  }
})



router.post(`/agent/process-app/application-6-award-review-check`, (req, res) => {
  const agreeAPCheck = req.session.data['application-5-award-review-check']

  if (agreeAPCheck == 'Yes') {
    res.redirect(`/agent/process-app/application-6-award-review-date-prompt`)
  }
   else {
    res.redirect(`/agent/process-app/application-6-award-review-date-manual`)
  }
})





// PREPARE APP

router.post(`/agent/process-app/preparation-outcome`, (req, res) => {
  const preparationOutcome = req.session.data['preparation-outcome']

  if (preparationOutcome == 'Decide') {
    res.redirect(`/agent/process-app/application-6-overview`)
  }
  else if (preparationOutcome == 'BAU') {
    res.redirect(`/agent/case-manager-review/event-history/add-a-note`)
  }
  else if (preparationOutcome == 'Withdraw') {
    res.redirect(`/agent/prepare-app/assurance-withdraw-check`)
  }
})

router.post(`/agent/prepare-app/assurance-outcome`, (req, res) => {
  const assuranceOutcome = req.session.data['assurance-outcome']

  if (assuranceOutcome == 'AP') {
    res.redirect(`/agent/prepare-app/claim-referred-confirmation`)
  }
  else if (assuranceOutcome == 'BAU') {
    res.redirect(`/agent/case-manager-review/event-history/add-a-note`)
  }
  else if (assuranceOutcome == 'Withdraw') {
    res.redirect(`/agent/prepare-app/assurance-withdraw-check`)
  }
   else {
    res.redirect(`/agent/prepare-app/assurance-outcome`)
  }
})


router.post(`/agent/prepare-app/assurance-withdraw-check`, (req, res) => {
  const assuranceWithdrawCheck = req.session.data['assurance-withdraw-check']

  if (assuranceWithdrawCheck == 'No') {
    res.redirect(`/agent/prepare-app/assurance-withdraw-actions`)
  }
   else {
    res.redirect(`/agent/case-manager-review/event-history/add-a-note`)
  }
})

router.post('/agent/prepare-app/assurance-withdraw-actions', (req, res, next) => {
        res.redirect('/agent/prepare-app/claim-withdrawn-confirmation');
});












}
