const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {


// PIP ROUTING V1


// PIP ELIGIBILITY


  router.post('/nhs/apply-for-pip-v1/eligibility/eligibility-intro', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/eligibility/eligibility-start');
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/eligibility-start', (req, res, next) => {
          const eligChoice = req.session.data['eligibility-choice'];
            if (eligChoice === 'Check I am eligible for PIP') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/over-16');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/postcode-check')
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/over-16', (req, res, next) => {
          const over16 = req.session.data['over-16'];
            if (over16 === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/state-pension');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/dla-children');
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/dla-children', (req, res, next) => {
          const dlaChild = req.session.data['dla-child'];
            if (dlaChild === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/dla-children-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/over-16-end');
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/state-pension', (req, res, next) => {
          const statePension = req.session.data['state-pension-age'];
            if (statePension === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/everyday-tasks');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/state-pension-end');
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/everyday-tasks', (req, res, next) => {
          const everydayTasks = req.session.data['everyday-tasks'];
            if (everydayTasks === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/difficulty-end');
          } else if (everydayTasks === 'No') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/difficulty-length');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v1/eligibility/difficulty-length', (req, res, next) => {
          const difficultyLength = req.session.data['difficulty-length'];
            if (difficultyLength === 'No') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/difficulty-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v1/eligibility/difficulty-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/eligibility/postcode-check');
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/eligibility-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/eligibility/postcode-check');
  });

// DIGITAL CHECK

  router.post('/nhs/apply-for-pip-v1/eligibility/postcode-check', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/eligibility/claimant');
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/claimant', (req, res, next) => {
          const claimant = req.session.data['claimant'];
            if (claimant === 'I am claiming for myself') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/already-receiving');
          } else if (claimant === 'I am claiming for someone else') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/claimant-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/claimant-helping')
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/claimant-helping', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/eligibility/already-receiving');
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/already-receiving', (req, res, next) => {
          const receiving = req.session.data['receiving'];
            if (receiving === 'No') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/required');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/already-receiving-end');
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/required', (req, res, next) => {
          const required = req.session.data['required'];
            if (required === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/apply-online');
          } else {
              res.redirect('/nhs/apply-for-pip-v1/eligibility/required-end');
          }
  });

  router.post('/nhs/apply-for-pip-v1/eligibility/apply-online', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v1/verify/register/register-start');
  });



// PIP REGISTER

router.post('/nhs/apply-for-pip-v1/verify/register/register-start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/start');
});



router.post('/nhs/apply-for-pip-v1/verify/signed-in', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/start');
});


// PIP1 CLAIM-REGISTRATION

router.post('/nhs/apply-for-pip-v1/claim-registration/start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/communicating');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/additional-support/communicating', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/forms-letters');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/help');
        } else {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/help-name');
        } else {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/additional-support/help-name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/additional-support/check-answers-1');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/name');
});


router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/nino');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/nino', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/date-of-birth');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/date-of-birth', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/address');
})

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/address', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
          if (safeAddress === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/contact-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/address-other');
        }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/address-other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/contact-details');
})


router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/contact-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/bank-account');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/bank-account', (req, res, next) => {
        const yourAccount = req.session.data['your-account'];
          if (yourAccount === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/bank-account-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/continue-without-bank-details');
        }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/continue-without-bank-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/bank-account-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats', (req, res, next) => {
        const communicationFormat = req.session.data['communication-format'];
          if (communicationFormat === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/type');
        } else {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
        }
});


router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/type', (req, res, next) => {
    const communicationType = req.session.data['communication-type'];
      if (communicationType === 'Braille') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/braille');
  } else if (communicationType === 'Sign language') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/sign-language');
  } else if (communicationType === 'Audio') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/audio');
  } else {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-other');
  }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/braille', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/sign-language', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/audio', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-other', (req, res, next) => {
    const otherFormat = req.session.data['other-format'];
      if (otherFormat === 'Coloured paper') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-coloured');
  } else if (otherFormat === 'Custom font') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-custom-font');
  } else if (otherFormat === 'Accessible PDF') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other-pdf');
  } else if (otherFormat === 'Email') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other-email');
  } else if (otherFormat === 'Other') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other');
  } else {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
  }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-coloured', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/paper-custom-font', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other-pdf', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other-email', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/alt-formats/other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/personal-details/check-answers-2', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/nationality');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/nationality', (req, res, next) => {
    const whereLive = req.session.data['nationality'];
      if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/nationality-of-eaa-or-switzerland');
  } else if (whereLive === 'Another nationality') {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/nationality-another');
  } else {
      res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-gb');
  }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/nationality-of-eaa-or-switzerland', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-uk');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-uk', (req, res, next) => {
    const livingUk = req.session.data['living-in-uk'];
    if (livingUk === 'No') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/check-answers-3');
    } else {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-gb');
    }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/nationality-another', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-gb');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/living-in-gb', (req, res, next) => {
    const nationality = req.session.data['nationality']
    const gb = req.session.data['gb']

    if (nationality === 'British' ||
        nationality === 'Irish' ||
        nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
    ) {
        if (gb === 'No') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/check-answers-3')
        }
        if (gb === 'Yes' || gb === 'Not sure') {
            res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/eaa')
        }
    } else if (nationality === 'Another nationality') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/check-answers-3')
    } else {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/eaa');
    }
})

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/eaa', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/residency/check-answers-3');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/residency/check-answers-3', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hcps');
});

// router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/condition', (req, res, next) => {
//     res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hcps');
// });

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hcps', (req, res, next) => {
    const healthHcps = req.session.data['health-hcps'];
    if (healthHcps === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hcp');
    } else {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-hcp');
    }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hcp', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/another');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/another', (req, res, next) => {
    const professional2 = req.session.data['professional2'];
    if (professional2 === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hcp-2');
    } else {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-hcp');
    }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hcp-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/another-2');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/another-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-hcp');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-hcp', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-nhs');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/consent-nhs', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/in-hospital');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/in-hospital', (req, res, next) => {
    const inHospital = req.session.data['hospital'];
    if (inHospital === 'Hospital') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hospital-address');
    } else if (inHospital === 'Hospice') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hospice-address');
    } else if (inHospital === 'Care or nursing home') {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/accommodation-address');
    } else if (inHospital === 'Other') {
          res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/accommodation-address');
    } else {
        res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/check-answers-4');
    }
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hospital-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hospital-admission');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hospital-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hospice-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/hospice-admission');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/hospice-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/accommodation-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/accommodation-admission');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/accommodation-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/your-health/check-answers-4', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/motability-scheme');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/motability-scheme', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/ready-to-submit');
});

router.post('/nhs/apply-for-pip-v1/claim-registration/ready-to-submit', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v1/claim-registration/confirmation');
});

// -------------------------------------------------------------------------------------

// PIP ROUTING V2


// PIP ELIGIBILITY


  router.post('/nhs/apply-for-pip-v2/eligibility/eligibility-intro', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/eligibility/eligibility-start');
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/eligibility-start', (req, res, next) => {
          const eligChoice = req.session.data['eligibility-choice'];
            if (eligChoice === 'Check I am eligible for PIP') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/over-16');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/postcode-check')
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/over-16', (req, res, next) => {
          const over16 = req.session.data['over-16'];
            if (over16 === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/state-pension');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/dla-children');
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/dla-children', (req, res, next) => {
          const dlaChild = req.session.data['dla-child'];
            if (dlaChild === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/dla-children-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/over-16-end');
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/state-pension', (req, res, next) => {
          const statePension = req.session.data['state-pension-age'];
            if (statePension === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/everyday-tasks');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/state-pension-end');
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/everyday-tasks', (req, res, next) => {
          const everydayTasks = req.session.data['everyday-tasks'];
            if (everydayTasks === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/difficulty-end');
          } else if (everydayTasks === 'No') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/difficulty-length');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v2/eligibility/difficulty-length', (req, res, next) => {
          const difficultyLength = req.session.data['difficulty-length'];
            if (difficultyLength === 'No') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/difficulty-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v2/eligibility/difficulty-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/eligibility/postcode-check');
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/eligibility-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/eligibility/postcode-check');
  });

// DIGITAL CHECK

  router.post('/nhs/apply-for-pip-v2/eligibility/postcode-check', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/eligibility/claimant');
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/claimant', (req, res, next) => {
          const claimant = req.session.data['claimant'];
            if (claimant === 'I am claiming for myself') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/already-receiving');
          } else if (claimant === 'I am claiming for someone else') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/claimant-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/claimant-helping')
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/claimant-helping', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/eligibility/already-receiving');
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/already-receiving', (req, res, next) => {
          const receiving = req.session.data['receiving'];
            if (receiving === 'No') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/required');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/already-receiving-end');
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/required', (req, res, next) => {
          const required = req.session.data['required'];
            if (required === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/apply-online');
          } else {
              res.redirect('/nhs/apply-for-pip-v2/eligibility/required-end');
          }
  });

  router.post('/nhs/apply-for-pip-v2/eligibility/apply-online', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v2/verify/register/register-start');
  });



// PIP REGISTER

router.post('/nhs/apply-for-pip-v2/verify/register/register-start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/start');
});



router.post('/nhs/apply-for-pip-v2/verify/signed-in', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/start');
});


// PIP1 CLAIM-REGISTRATION

router.post('/nhs/apply-for-pip-v2/claim-registration/start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/communicating');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/additional-support/communicating', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/forms-letters');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/help');
        } else {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/help-name');
        } else {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/additional-support/help-name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/additional-support/check-answers-1');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/name');
});


router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/nino');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/nino', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/date-of-birth');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/date-of-birth', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/address');
})

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/address', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
          if (safeAddress === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/contact-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/address-other');
        }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/address-other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/contact-details');
})


router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/contact-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/bank-account');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/bank-account', (req, res, next) => {
        const yourAccount = req.session.data['your-account'];
          if (yourAccount === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/bank-account-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/continue-without-bank-details');
        }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/continue-without-bank-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/bank-account-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats', (req, res, next) => {
        const communicationFormat = req.session.data['communication-format'];
          if (communicationFormat === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/type');
        } else {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
        }
});


router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/type', (req, res, next) => {
    const communicationType = req.session.data['communication-type'];
      if (communicationType === 'Braille') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/braille');
  } else if (communicationType === 'Sign language') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/sign-language');
  } else if (communicationType === 'Audio') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/audio');
  } else {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-other');
  }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/braille', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/sign-language', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/audio', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-other', (req, res, next) => {
    const otherFormat = req.session.data['other-format'];
      if (otherFormat === 'Coloured paper') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-coloured');
  } else if (otherFormat === 'Custom font') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-custom-font');
  } else if (otherFormat === 'Accessible PDF') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other-pdf');
  } else if (otherFormat === 'Email') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other-email');
  } else if (otherFormat === 'Other') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other');
  } else {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
  }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-coloured', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/paper-custom-font', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other-pdf', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other-email', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/alt-formats/other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/personal-details/check-answers-2', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/nationality');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/nationality', (req, res, next) => {
    const whereLive = req.session.data['nationality'];
      if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/nationality-of-eaa-or-switzerland');
  } else if (whereLive === 'Another nationality') {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/nationality-another');
  } else {
      res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-gb');
  }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/nationality-of-eaa-or-switzerland', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-uk');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-uk', (req, res, next) => {
    const livingUk = req.session.data['living-in-uk'];
    if (livingUk === 'No') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/check-answers-3');
    } else {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-gb');
    }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/nationality-another', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-gb');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/living-in-gb', (req, res, next) => {
    const nationality = req.session.data['nationality']
    const gb = req.session.data['gb']

    if (nationality === 'British' ||
        nationality === 'Irish' ||
        nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
    ) {
        if (gb === 'No') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/check-answers-3')
        }
        if (gb === 'Yes' || gb === 'Not sure') {
            res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/eaa')
        }
    } else if (nationality === 'Another nationality') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/check-answers-3')
    } else {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/eaa');
    }
})

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/eaa', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/residency/check-answers-3');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/residency/check-answers-3', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hcps');
});

// router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/condition', (req, res, next) => {
//     res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hcps');
// });

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hcps', (req, res, next) => {
    const healthHcps = req.session.data['health-hcps'];
    if (healthHcps === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hcp');
    } else {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/consent');
    }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hcp', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/another');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/another', (req, res, next) => {
    const professional2 = req.session.data['professional2'];
    if (professional2 === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hcp-2');
    } else {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/consent');
    }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hcp-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/another-2');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/another-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/consent');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/consent', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/in-hospital');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/in-hospital', (req, res, next) => {
    const inHospital = req.session.data['hospital'];
    if (inHospital === 'Hospital') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hospital-address');
    } else if (inHospital === 'Hospice') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hospice-address');
    } else if (inHospital === 'Care or nursing home') {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/accommodation-address');
    } else if (inHospital === 'Other') {
          res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/accommodation-address');
    } else {
        res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/check-answers-4');
    }
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hospital-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hospital-admission');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hospital-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hospice-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/hospice-admission');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/hospice-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/accommodation-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/accommodation-admission');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/accommodation-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/your-health/check-answers-4', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/motability-scheme');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/motability-scheme', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/ready-to-submit');
});

router.post('/nhs/apply-for-pip-v2/claim-registration/ready-to-submit', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v2/claim-registration/confirmation');
});

// -------------------------------------------------------------------------------------

// PIP ROUTING V3


// PIP ELIGIBILITY


  router.post('/nhs/apply-for-pip-v3/eligibility/eligibility-intro', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/eligibility/eligibility-start');
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/eligibility-start', (req, res, next) => {
          const eligChoice = req.session.data['eligibility-choice'];
            if (eligChoice === 'Check I am eligible for PIP') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/over-16');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/postcode-check')
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/over-16', (req, res, next) => {
          const over16 = req.session.data['over-16'];
            if (over16 === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/state-pension');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/dla-children');
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/dla-children', (req, res, next) => {
          const dlaChild = req.session.data['dla-child'];
            if (dlaChild === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/dla-children-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/over-16-end');
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/state-pension', (req, res, next) => {
          const statePension = req.session.data['state-pension-age'];
            if (statePension === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/everyday-tasks');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/state-pension-end');
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/everyday-tasks', (req, res, next) => {
          const everydayTasks = req.session.data['everyday-tasks'];
            if (everydayTasks === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/difficulty-end');
          } else if (everydayTasks === 'No') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/difficulty-length');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v3/eligibility/difficulty-length', (req, res, next) => {
          const difficultyLength = req.session.data['difficulty-length'];
            if (difficultyLength === 'No') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/difficulty-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/eligibility-end');
          }
  });


  router.post('/nhs/apply-for-pip-v3/eligibility/difficulty-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/eligibility/postcode-check');
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/eligibility-end', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/eligibility/postcode-check');
  });

// DIGITAL CHECK

  router.post('/nhs/apply-for-pip-v3/eligibility/postcode-check', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/eligibility/claimant');
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/claimant', (req, res, next) => {
          const claimant = req.session.data['claimant'];
            if (claimant === 'I am claiming for myself') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/already-receiving');
          } else if (claimant === 'I am claiming for someone else') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/claimant-end');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/claimant-helping')
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/claimant-helping', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/eligibility/already-receiving');
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/already-receiving', (req, res, next) => {
          const receiving = req.session.data['receiving'];
            if (receiving === 'No') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/required');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/already-receiving-end');
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/required', (req, res, next) => {
          const required = req.session.data['required'];
            if (required === 'Yes') {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/apply-online');
          } else {
              res.redirect('/nhs/apply-for-pip-v3/eligibility/required-end');
          }
  });

  router.post('/nhs/apply-for-pip-v3/eligibility/apply-online', (req, res, next) => {
          res.redirect('/nhs/apply-for-pip-v3/verify/register/register-start');
  });



// PIP REGISTER

router.post('/nhs/apply-for-pip-v3/verify/register/register-start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/start');
});



router.post('/nhs/apply-for-pip-v3/verify/signed-in', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/start');
});


// PIP1 CLAIM-REGISTRATION

router.post('/nhs/apply-for-pip-v3/claim-registration/start', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/communicating');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/additional-support/communicating', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/forms-letters');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/additional-support/forms-letters', (req, res, next) => {
        const addSupport = req.session.data['add-support'];
          if (addSupport === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/help');
        } else {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/additional-support/help', (req, res, next) => {
        const addsupportHelp = req.session.data['add-support-help'];
          if (addsupportHelp === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/help-name');
        } else {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/check-answers-1');
        }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/additional-support/help-name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/additional-support/check-answers-1');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/additional-support/check-answers-1', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/name');
});


router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/name', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/nino');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/nino', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/date-of-birth');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/date-of-birth', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/address');
})

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/address', (req, res, next) => {
        const safeAddress = req.session.data['safe-address'];
          if (safeAddress === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/contact-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/address-other');
        }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/address-other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/contact-details');
})


router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/contact-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/bank-account');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/bank-account', (req, res, next) => {
        const yourAccount = req.session.data['your-account'];
          if (yourAccount === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/bank-account-details');
        } else {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/continue-without-bank-details');
        }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/continue-without-bank-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/bank-account-details', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats', (req, res, next) => {
        const communicationFormat = req.session.data['communication-format'];
          if (communicationFormat === 'Yes') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/type');
        } else {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
        }
});


router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/type', (req, res, next) => {
    const communicationType = req.session.data['communication-type'];
      if (communicationType === 'Braille') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/braille');
  } else if (communicationType === 'Sign language') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/sign-language');
  } else if (communicationType === 'Audio') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/audio');
  } else {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-other');
  }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/braille', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/sign-language', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/audio', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-other', (req, res, next) => {
    const otherFormat = req.session.data['other-format'];
      if (otherFormat === 'Coloured paper') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-coloured');
  } else if (otherFormat === 'Custom font') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-custom-font');
  } else if (otherFormat === 'Accessible PDF') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other-pdf');
  } else if (otherFormat === 'Email') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other-email');
  } else if (otherFormat === 'Other') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other');
  } else {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
  }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-coloured', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/paper-custom-font', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other-pdf', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other-email', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/alt-formats/other', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/personal-details/check-answers-2', (req, res, next) => {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/nationality');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/nationality', (req, res, next) => {
    const whereLive = req.session.data['nationality'];
      if (whereLive === 'A nationality of the European Economic Area (EEA) or Switzerland') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/nationality-of-eaa-or-switzerland');
  } else if (whereLive === 'Another nationality') {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/nationality-another');
  } else {
      res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-gb');
  }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/nationality-of-eaa-or-switzerland', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-uk');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-uk', (req, res, next) => {
    const livingUk = req.session.data['living-in-uk'];
    if (livingUk === 'No') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/check-answers-3');
    } else {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-gb');
    }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/nationality-another', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-gb');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/living-in-gb', (req, res, next) => {
    const nationality = req.session.data['nationality']
    const gb = req.session.data['gb']

    if (nationality === 'British' ||
        nationality === 'Irish' ||
        nationality === 'A nationality of the European Economic Area (EEA) or Switzerland'
    ) {
        if (gb === 'No') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/check-answers-3')
        }
        if (gb === 'Yes' || gb === 'Not sure') {
            res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/eaa')
        }
    } else if (nationality === 'Another nationality') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/check-answers-3')
    } else {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/eaa');
    }
})

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/eaa', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/residency/check-answers-3');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/residency/check-answers-3', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hcps');
});

// router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/condition', (req, res, next) => {
//     res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hcps');
// });

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hcps', (req, res, next) => {
    const healthHcps = req.session.data['health-hcps'];
    if (healthHcps === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hcp');
    } else {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/consent');
    }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hcp', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/another');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/another', (req, res, next) => {
    const professional2 = req.session.data['professional2'];
    if (professional2 === 'Yes') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hcp-2');
    } else {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/consent');
    }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hcp-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/another-2');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/another-2', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/consent');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/consent', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/consent-hcp');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/consent-hcp', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/consent-nhs');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/consent-nhs', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/in-hospital');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/in-hospital', (req, res, next) => {
    const inHospital = req.session.data['hospital'];
    if (inHospital === 'Hospital') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hospital-address');
    } else if (inHospital === 'Hospice') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hospice-address');
    } else if (inHospital === 'Care or nursing home') {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/accommodation-address');
    } else if (inHospital === 'Other') {
          res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/accommodation-address');
    } else {
        res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/check-answers-4');
    }
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hospital-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hospital-admission');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hospital-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hospice-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/hospice-admission');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/hospice-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/accommodation-address', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/accommodation-admission');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/accommodation-admission', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/your-health/check-answers-4');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/your-health/check-answers-4', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/motability-scheme');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/motability-scheme', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/ready-to-submit');
});

router.post('/nhs/apply-for-pip-v3/claim-registration/ready-to-submit', (req, res, next) => {
    res.redirect('/nhs/apply-for-pip-v3/claim-registration/confirmation');
});

// -------------------------------------------------------------------------------------


}
