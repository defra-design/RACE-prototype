const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// // Import Beta V1 routes 
// router.use('Beta/V1/_routes.js', (req, res, next) => {
//   //req.session.data["entered-criteria"] = undefined;
//   return require(`./views/Beta/V1/_routes.js`)(req, res, next);
// })

// Run this code when a form is submitted to '/business-or-individual-answer'
router.post('/Beta/V1/defra-id-account/business-or-individual-answer', function (req, res) {

  // Make a variable and give it the value from 'business-or-individual'
  var businessorindividual = req.session.data['business-or-individual']

  // Check whether the variable matches a condition
  if (businessorindividual == "A business or organisation"){
    // Send user to next page
    res.redirect('/Beta/V1/defra-id-account/org-uk-or-not')
  } else {
    // Send user to individual-name
    res.redirect('/Beta/V1/defra-id-account/individual-name')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-uk-or-not-answer'
router.post('/Beta/V1/defra-id-account/org-uk-or-not-answer', function (req, res) {

  // Make a variable and give it the value from 'Where is the organisation registered'
  var whereisorgregistered = req.session.data['Where is the organisation registered']

  // Check whether the variable matches a condition
  if (whereisorgregistered == "UK"){
    // Send user to next page
    res.redirect('/Beta/V1/defra-id-account/org-in-uk')
  } else {
    // Send user to individual-name
    res.redirect('/Beta/V1/defra-id-account/org-not-in-the-uk')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-in-uk'
router.post('/Beta/V1/defra-id-account/org-in-uk-answer', function (req, res) {

  // Make a variable and give it the value from 'Is the organisation registered with companies-house'
  var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

  // Check whether the variable matches a condition
  if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
    // Send user to comp-house-yes
    res.redirect('/Beta/V1/defra-id-account/company-house-yes')
  } else {
    // Send user to comp-house-no
    res.redirect('/Beta/V1/defra-id-account/company-house-no')
  }

})


// Run this code when a form is submitted to '/defra-id-account/company-house-no-answer'
router.post('/Beta/V1/defra-id-account/company-house-no-answer', function (req, res) {

  // Make a variable and give it the value from 'Are you are a sole trader or charity'
  var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

  // Check whether the variable matches a condition
  if (areyouasoletraderorcharity == "Sole trader"){
    // Send user to sole-trader
    res.redirect('/Beta/V1/defra-id-account/sole-trader')
  } else {
    // Send user to charity-region
    res.redirect('/Beta/V1/defra-id-account/charity-region')
  }

})


// Run this code when a form is submitted to '/defra-id-account/verify-identity-answer'
router.post('/Beta/V1/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value from 'Verify identity'
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches a condition
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    // Send user to verify-get-code
    res.redirect('/Beta/V1/defra-id-account/verify-get-code')
  } else {
    // Send user to cverify-confirm-security-word
    res.redirect('/Beta/V1/defra-id-account/verify-confirm-security-word')
  }

})

// Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-reservoir-name-answer'
router.post('/Beta/V1/submit-s12-statement/reservoir-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'changed-name'
  var changedname = req.session.data['changed-name']

  // Check whether the variable matches a condition
  if (changedname == "Yes"){
    // Send user to new-reservoir-name
    res.redirect('/Beta/V1/submit-s12-statement/reservoir-details/new-name')
  } else {
    // Send user to ?????
    res.redirect('/Beta/V1/submit-s12-statement/reservoir-details/confirm')
  }

})

// Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-operator-name-answer'
router.post('/Beta/V1/submit-s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'operator-name'
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches a condition
  if (operatorname == "Yes"){
    // Send user to change-operator-name-yes
    res.redirect('/Beta/V1/submit-s12-statement/operator-details/change-name-yes')
  } else {
    // Send user to confirm-details
    res.redirect('/Beta/V1/submit-s12-statement/operator-details/confirm')
  }

})




// New Beta V2 routes //


// Run this code when a form is submitted to '/business-or-individual-answer'
router.post('/Beta/V2/defra-id-account/business-or-individual-answer', function (req, res) {

  // Make a variable and give it the value from 'business-or-individual'
  var businessorindividual = req.session.data['business-or-individual']

  // Check whether the variable matches a condition
  if (businessorindividual == "A business or organisation"){
    // Send user to next page
    res.redirect('/Beta/V2/defra-id-account/org-uk-or-not')
  } else {
    // Send user to individual-name
    res.redirect('/Beta/V2/defra-id-account/individual-name')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-uk-or-not-answer'
router.post('/Beta/V2/defra-id-account/org-uk-or-not-answer', function (req, res) {

  // Make a variable and give it the value from 'Where is the organisation registered'
  var whereisorgregistered = req.session.data['Where is the organisation registered']

  // Check whether the variable matches a condition
  if (whereisorgregistered == "UK"){
    // Send user to next page
    res.redirect('/Beta/V2/defra-id-account/org-in-uk')
  } else {
    // Send user to individual-name
    res.redirect('/Beta/V2/defra-id-account/org-not-in-the-uk')
  }

})


// Run this code when a form is submitted to '/defra-id-account/org-in-uk'
router.post('/Beta/V2/defra-id-account/org-in-uk-answer', function (req, res) {

  // Make a variable and give it the value from 'Is the organisation registered with companies-house'
  var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

  // Check whether the variable matches a condition
  if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
    // Send user to comp-house-yes
    res.redirect('/Beta/V2/defra-id-account/company-house-yes')
  } else {
    // Send user to comp-house-no
    res.redirect('/Beta/V2/defra-id-account/company-house-no')
  }

})


// Run this code when a form is submitted to '/defra-id-account/company-house-no-answer'
router.post('/Beta/V2/defra-id-account/company-house-no-answer', function (req, res) {

  // Make a variable and give it the value from 'Are you are a sole trader or charity'
  var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

  // Check whether the variable matches a condition
  if (areyouasoletraderorcharity == "Sole trader"){
    // Send user to sole-trader
    res.redirect('/Beta/V2/defra-id-account/sole-trader')
  } else {
    // Send user to charity-region
    res.redirect('/Beta/V2/defra-id-account/charity-region')
  }

})


// Run this code when a form is submitted to '/defra-id-account/verify-identity-answer'
router.post('/Beta/V2/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value from 'Verify identity'
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches a condition
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    // Send user to verify-get-code
    res.redirect('/Beta/V2/defra-id-account/verify-get-code')
  } else {
    // Send user to cverify-confirm-security-word
    res.redirect('/Beta/V2/defra-id-account/verify-confirm-security-word')
  }

})

// Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-reservoir-name-answer'
router.post('/Beta/V2/submit-s12-statement/reservoir-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'changed-name'
  var changedname = req.session.data['changed-name']

  // Check whether the variable matches a condition
  if (changedname == "Yes"){
    // Send user to new-reservoir-name
    res.redirect('/Beta/V2/submit-s12-statement/reservoir-details/new-name')
  } else {
    // Send user to ?????
    res.redirect('/Beta/V2/submit-s12-statement/reservoir-details/confirm')
  }

})

// Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-operator-name-answer'
router.post('/Beta/V2/submit-s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'operator-name'
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches a condition
  if (operatorname == "Yes"){
    // Send user to change-operator-name-yes
    res.redirect('/Beta/V2/submit-s12-statement/operator-details/change-name-yes')
  } else {
    // Send user to confirm-details
    res.redirect('/Beta/V2/submit-s12-statement/operator-details/confirm')
  }

})

// Run this code when a form is submitted to '/defra-id-account/verify-identity-answer'
router.post('/Beta/V2/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value from 'Verify identity'
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches a condition
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    // Send user to verify-get-code
    res.redirect('/Beta/V2/defra-id-account/verify-get-code')
  } else {
    // Send user to cverify-confirm-security-word
    res.redirect('/Beta/V2/defra-id-account/verify-confirm-security-word')
  }

})

// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/operator-details/change-name'

router.post('/Beta/V2/submit-s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'operaotor-name'
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches a condition
  if (operatorname == "Yes"){
    // Send user to ?
    res.redirect('/Beta/V2/submit-s12-statement/operator-details/change-name-yes')
  } else {
    // Send user to ?
    res.redirect('/Beta/V2/submit-s12-statement/operator-details/confirm')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/inspecting-engineer/change-name-answer'

router.post('/Beta/V2/submit-s12-statement/inspecting-engineer/change-name-answer', function (req, res) {

  // Make a variable and give it the value from 'operaotor-name'
  var inspectingengineer = req.session.data['inspecting-engineer']

  // Check whether the variable matches a condition
  if (inspectingengineer == "Yes"){
    // Send user to ?
    res.redirect('/Beta/V2/submit-s12-statement/inspecting-engineer/change-name-yes')
  } else {
    // Send user to ?
    res.redirect('/Beta/V2/submit-s12-statement/inspecting-engineer/confirm')
  }

})

// Run this code when a form is submitted to '/alt-supervising-engineer/super-engineer-answer'

router.post('/Beta/V2/submit-s12-statement/alt-supervising-engineer/super-engineer-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var altsuperengineer = req.session.data['alt-super-engineer']

  // Check whether the variable matches a condition
  if (altsuperengineer == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/alt-supervising-engineer/engineer-details')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/last-inspection-date')
  }

})

// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/recommended-inspection-answer'

router.post('/Beta/V2/submit-s12-statement/questions/recommended-inspection-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var recommendedinspection = req.session.data['recommended-inspection-yes']

  // Check whether the variable matches a condition
  if (recommendedinspection == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/inspection-forward')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/need-inspection')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/need-inspection-answer'

router.post('/Beta/V2/submit-s12-statement/questions/need-inspection-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var operatorspecific = req.session.data['operator-specific-yes']

  // Check whether the variable matches a condition
  if (operatorspecific == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/need-inspection-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/operator-safety-action')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/operator-safety-action-answer'

router.post('/Beta/V2/submit-s12-statement/questions/operator-safety-action-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var safetymeasuresyes = req.session.data['safety-measures-yes']

  // Check whether the variable matches a condition
  if (safetymeasuresyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/operator-safety-action-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/issues-to-watch')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/issues-to-watch-answer'

router.post('/Beta/V2/submit-s12-statement/questions/issues-to-watch-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches a condition
  if (issueswatchyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/issues-to-watch-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/operator-specific-action')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/operator-specific-action-answer'

router.post('/Beta/V2/submit-s12-statement/questions/operator-specific-action-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var operatorspecificaction = req.session.data['operator-specific-action-yes']

  // Check whether the variable matches a condition
  if (operatorspecificaction == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/operator-specific-action-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/owner-records')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/owner-records-answer'

router.post('/Beta/V2/submit-s12-statement/questions/owner-records-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var recordsyes = req.session.data['records-yes']

  // Check whether the variable matches a condition
  if (recordsyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/flood-plan')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/owner-records-no')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/flood-plan-answer'

router.post('/Beta/V2/submit-s12-statement/questions/flood-plan-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var floodplanyes = req.session.data['flood-plan-yes']

  // Check whether the variable matches a condition
  if (floodplanyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/flood-plan-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/flood-plan-tested-answer'

router.post('/Beta/V2/submit-s12-statement/questions/flood-plan-tested-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var plantestedyes = req.session.data['plan-tested-yes']

  // Check whether the variable matches a condition
  if (plantestedyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/flood-plan-tested-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/flood-plan-revise-answer'

router.post('/Beta/V2/submit-s12-statement/questions/flood-plan-revise-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var reviseplanyes = req.session.data['revise-plan-yes']

  // Check whether the variable matches a condition
  if (reviseplanyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/flood-plan-revise')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir')
  }

})


// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir-answer'

router.post('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var neworreuseyes = req.session.data['new-or-re-use-yes']

  // Check whether the variable matches a condition
  if (neworreuseyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir-yes')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/upload-support-docs')
  }

})

// Run this code when a form is submitted to '/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir-yes-answer'

router.post('/Beta/V2/submit-s12-statement/questions/new-or-abandoned-reservoir-yes-answer', function (req, res) {

  // Make a variable and give it the value from 'alt-super-engineer'
  var operatorcertactionsyes = req.session.data['operator-cert-actions-yes']

  // Check whether the variable matches a condition
  if (operatorcertactionsyes == "Yes"){
    // Send user to engineer-details
    res.redirect('/Beta/V2/submit-s12-statement/questions/operator-cert-actions')
  } else {
    // Send user to inspection-date
    res.redirect('/Beta/V2/submit-s12-statement/questions/upload-support-docs')
  }

})


module.exports = router
