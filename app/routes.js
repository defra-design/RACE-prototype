const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Import Beta V2 routes 
router.use('Beta/V2/_routes', (req, res, next) => {
  //req.session.data["entered-criteria"] = undefined;
  return require(`./views/Beta/V2/_routes`)(req, res, next);
})

// Import Beta V1 routes 
router.use('Beta/V1/_routes', (req, res, next) => {
  //req.session.data["entered-criteria"] = undefined;
  return require(`./views/Beta/V1/_routes`)(req, res, next);
})


// // Run this code when a form is submitted to '/business-or-individual-answer'
// router.post('/defra-id-account/business-or-individual-answer', function (req, res) {

//   // Make a variable and give it the value from 'business-or-individual'
//   var businessorindividual = req.session.data['business-or-individual']

//   // Check whether the variable matches a condition
//   if (businessorindividual == "A business or organisation"){
//     // Send user to next page
//     res.redirect('/defra-id-account/org-uk-or-not')
//   } else {
//     // Send user to individual-name
//     res.redirect('/defra-id-account/individual-name')
//   }

// })


// // Run this code when a form is submitted to '/defra-id-account/org-uk-or-not-answer'
// router.post('/defra-id-account/org-uk-or-not-answer', function (req, res) {

//   // Make a variable and give it the value from 'Where is the organisation registered'
//   var whereisorgregistered = req.session.data['Where is the organisation registered']

//   // Check whether the variable matches a condition
//   if (whereisorgregistered == "UK"){
//     // Send user to next page
//     res.redirect('/defra-id-account/org-in-uk')
//   } else {
//     // Send user to individual-name
//     res.redirect('/defra-id-account/org-not-in-the-uk')
//   }

// })


// // Run this code when a form is submitted to '/defra-id-account/org-in-uk'
// router.post('/defra-id-account/org-in-uk-answer', function (req, res) {

//   // Make a variable and give it the value from 'Is the organisation registered with companies-house'
//   var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

//   // Check whether the variable matches a condition
//   if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
//     // Send user to comp-house-yes
//     res.redirect('/defra-id-account/company-house-yes')
//   } else {
//     // Send user to comp-house-no
//     res.redirect('/defra-id-account/company-house-no')
//   }

// })


// // Run this code when a form is submitted to '/defra-id-account/company-house-no-answer'
// router.post('/defra-id-account/company-house-no-answer', function (req, res) {

//   // Make a variable and give it the value from 'Are you are a sole trader or charity'
//   var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

//   // Check whether the variable matches a condition
//   if (areyouasoletraderorcharity == "Sole trader"){
//     // Send user to sole-trader
//     res.redirect('/defra-id-account/sole-trader')
//   } else {
//     // Send user to charity-region
//     res.redirect('/defra-id-account/charity-region')
//   }

// })


// // Run this code when a form is submitted to '/defra-id-account/verify-identity-answer'
// router.post('/defra-id-account/verify-identity-answer', function (req, res) {

//   // Make a variable and give it the value from 'Verify identity'
//   var verifyidentity = req.session.data['Verify identity']

//   // Check whether the variable matches a condition
//   if (verifyidentity == "Send a code to xxxxxxxx478"){
//     // Send user to verify-get-code
//     res.redirect('/defra-id-account/verify-get-code')
//   } else {
//     // Send user to cverify-confirm-security-word
//     res.redirect('/defra-id-account/verify-confirm-security-word')
//   }

// })

// // Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-reservoir-name-answer'
// router.post('/submit-s12-statement/reservoir-details/change-reservoir-name-answer', function (req, res) {

//   // Make a variable and give it the value from 'changed-name'
//   var changedname = req.session.data['changed-name']

//   // Check whether the variable matches a condition
//   if (changedname == "Yes"){
//     // Send user to new-reservoir-name
//     res.redirect('/submit-s12-statement/reservoir-details/new-name')
//   } else {
//     // Send user to ?????
//     res.redirect('/submit-s12-statement/reservoir-details/confirm')
//   }

// })

// // Run this code when a form is submitted to '/submit-s12-statement/reservoir-details/change-operator-name-answer'
// router.post('/submit-s12-statement/reservoir-details/change-operator-name-answer', function (req, res) {

//   // Make a variable and give it the value from 'operator-name'
//   var operatorname = req.session.data['operator-name']

//   // Check whether the variable matches a condition
//   if (operatorname == "Yes"){
//     // Send user to change-operator-name-yes
//     res.redirect('/submit-s12-statement/operator-details/change-name-yes')
//   } else {
//     // Send user to confirm-details
//     res.redirect('/submit-s12-statement/operator-details/confirm')
//   }

// })


module.exports = router
