//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const util = require('util')
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// ROUTES REDIRECT START

const applyforpip = require('./routes/apply-for-pip')
const pipregister = require('./routes/pip-register')
const agent = require('./routes/agent')

// ROUTES REDIRECT END

// ROUTER LIST START

applyforpip(router);
pipregister(router);
agent(router);

// ROUTER LIST END
