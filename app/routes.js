const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// Run this code when a form is submitted to '/business-or-individual-answer'
router.post('/defra-id-account/business-or-individual-answer', function (req, res) {

  // Make a variable and give it the value from 'business-or-individual'
  var businessorindividual = req.session.data['business-or-individual']

  // Check whether the variable matches a condition
  if (businessorindividual == "A business or organisation"){
    // Send user to next page
    res.redirect('/defra-id-account/org-uk-or-not')
  } else {
    // Send user to individual-name
    res.redirect('/defra-id-account/individual-name')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-uk-or-not-answer'
router.post('/defra-id-account/org-uk-or-not-answer', function (req, res) {

  // Make a variable and give it the value from 'Where is the organisation registered'
  var whereisorgregistered = req.session.data['Where is the organisation registered']

  // Check whether the variable matches a condition
  if (whereisorgregistered == "UK"){
    // Send user to next page
    res.redirect('/defra-id-account/org-in-uk')
  } else {
    // Send user to individual-name
    res.redirect('/defra-id-account/org-not-in-the-uk')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-in-uk'
router.post('/defra-id-account/org-in-uk-answer', function (req, res) {

  // Make a variable and give it the value from 'Is the organisation registered with companies-house'
  var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

  // Check whether the variable matches a condition
  if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
    // Send user to comp-house-yes
    res.redirect('/defra-id-account/company-house-yes')
  } else {
    // Send user to comp-house-no
    res.redirect('/defra-id-account/company-house-no')
  }

})


// Run this code when a form is submitted to '/defra-id-account/company-house-no-answer'
router.post('/defra-id-account/company-house-no-answer', function (req, res) {

  // Make a variable and give it the value from 'Are you are a sole trader or charity'
  var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

  // Check whether the variable matches a condition
  if (areyouasoletraderorcharity == "Sole trader"){
    // Send user to sole-trader
    res.redirect('/defra-id-account/sole-trader')
  } else {
    // Send user to charity-region
    res.redirect('/defra-id-account/charity-region')
  }

})


// Run this code when a form is submitted to '/defra-id-account/verify-identity-answer'
router.post('/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value from 'Verify identity'
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches a condition
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    // Send user to verify-get-code
    res.redirect('/defra-id-account/verify-get-code')
  } else {
    // Send user to cverify-confirm-security-word
    res.redirect('/defra-id-account/verify-confirm-security-word')
  }

})


module.exports = router



