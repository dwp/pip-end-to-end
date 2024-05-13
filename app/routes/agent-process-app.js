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


router.post(`/agent/process-app/application-6-award-review-check`, (req, res) => {
  const agreeAPCheck = req.session.data['application-5-award-review-check']

  if (agreeAPCheck == 'Yes') {
    res.redirect(`/agent/process-app/application-6-award-review-date-prompt`)
  }
   else {
    res.redirect(`/agent/process-app/application-6-award-review-date-manual`)
  }
})


}
