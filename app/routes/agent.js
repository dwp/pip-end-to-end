const { compile } = require("nunjucks");
const express = require('express')

module.exports = function (router) {


// —————————————————————————————————

router.post(`/agent/process-app/qppt-dl-3m-check`, (req, res) => {
  const qpptDL3mCheck = req.session.data['qppt-dl-3m-check']

  if (qpptDL3mCheck == 'Yes') {
    res.redirect(`/agent/process-app/qppt-dl-9m-check`)
  }
   else {
     res.redirect(`/agent/process-app/application-6-about-eject`)
  }
})

router.post(`/agent/process-app/qppt-dl-9m-check`, (req, res) => {
  const qpptDL9mCheck = req.session.data['qppt-dl-9m-check']

  if (qpptDL9mCheck == 'Yes') {
    res.redirect(`/agent/process-app/application-6-about`)
  }
   else {
     res.redirect(`/agent/process-app/application-6-about-eject`)
  }
})

router.post(`/agent/process-app/qppt-m-3m-check`, (req, res) => {
  const qpptM3mCheck = req.session.data['qppt-m-3m-check']

  if (qpptM3mCheck == 'Yes') {
    res.redirect(`/agent/process-app/qppt-m-9m-check`)
  }
   else {
     res.redirect(`/agent/process-app/application-6-about-eject`)
  }
})

router.post(`/agent/process-app/qppt-m-9m-check`, (req, res) => {
  const qpptM9mCheck = req.session.data['qppt-m-9m-check']

  if (qpptM9mCheck == 'Yes') {
    res.redirect(`/agent/process-app/application-6-about`)
  }
   else {
     res.redirect(`/agent/process-app/application-6-about-eject`)
  }
})

router.post(`/agent/process-app/application-6-about-a1`, (req, res) => {
  const aboutA1 = req.session.data['application-5-about-a1']

  if (aboutA1 == 'Agree') {
    res.redirect(`/agent/process-app/application-6-about-a1-reason`)
  } else if (aboutA1 == 'Amended') {
    res.redirect(`/agent/process-app/application-6-about-a1-score0`)
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
     res.redirect(`/agent/eject-overview`)
    // res.redirect(`/agent/process-app/award-dates-review-manual`)
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

router.post('/agent/process-app/preparation-overview', (req, res, next) => {
        res.redirect('/agent/process-app/preparation-outcome');
});


router.post(`/agent/process-app/preparation-outcome`, (req, res) => {
  const preparationOutcome = req.session.data['preparation-outcome']

  if (preparationOutcome == 'Decide') {
    res.redirect(`/agent/process-app/application-6-overview`)
  }
  else if (preparationOutcome == 'BAU') {
    res.redirect(`/agent/eject-overview`)
  }
})

router.post(`/agent/prepare-app/assurance-outcome`, (req, res) => {
  const assuranceOutcome = req.session.data['assurance-outcome']

  if (assuranceOutcome == 'AP') {
    res.redirect(`/agent/home/entry`)
    // res.redirect(`/agent/ap-referral-confirmation`)
  }
  else if (assuranceOutcome == 'BAU') {
    res.redirect(`/agent/eject-overview`)
  }
  else if (assuranceOutcome == 'Disallow') {
    res.redirect(`/agent/disallow-overview`)
  }
  else if (assuranceOutcome == 'Withdraw') {
    res.redirect(`/agent/withdraw-overview`)
  }
   else {
    res.redirect(`/agent/prepare-app/assurance-outcome`)
  }
})


router.post(`/agent/withdraw-check`, (req, res) => {
  const withdrawCheck = req.session.data['withdraw-check']

  if (withdrawCheck == 'No') {
    res.redirect(`/agent/withdraw-actions`)
  }
   else {
    res.redirect(`/agent/eject-overview`)
  }
})


router.post(`/agent/case-manager-review/event-history/add-an-event`, (req, res) => {
  const addEvent = req.session.data['add-event']

  if (addEvent == 'case-eject') {
    res.redirect(`/agent/case-manager-review/event-history/eject-reason`)
  }
   else {
    res.redirect(`/agent/case-manager-review/event-history/add-a-note`)
  }
})

// router.post(`/agent/case-manager-review/find/record-found`, (req, res) => {
//   const rightPerson = req.session.data['right-person']
//
//   if (rightPerson == 'Yes') {
//     res.redirect(`/agent/case-manager-review/find/find-someone`)
//   }
//    else {
//     res.redirect(`/agent/case-manager-review/personal-details`)
//   }
// })





}
