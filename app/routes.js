const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// New Beta V1 routes //



router.post('/Beta/submit-s12-statement/V1/defra-id-account/business-or-individual-answer', function (req, res) {

  // Make a variable and give it the value
  var businessorindividual = req.session.data['business-or-individual']

  // Check whether the variable matches
  if (businessorindividual == "A business or organisation"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/org-uk-or-not')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/individual-name')
  }

})



router.post('/Beta/submit-s12-statement/V1/defra-id-account/org-uk-or-not-answer', function (req, res) {

  // Make a variable and give it the value
  var whereisorgregistered = req.session.data['Where is the organisation registered']

  // Check whether the variable matches
  if (whereisorgregistered == "UK"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/org-in-uk')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/org-not-in-the-uk')
  }

})



router.post('/Beta/submit-s12-statement/V1/defra-id-account/org-in-uk-answer', function (req, res) {

  // Make a variable and give it the value
  var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

  // Check whether the variable matches
  if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/company-house-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/company-house-no')
  }

})


 
router.post('/Beta/submit-s12-statement/V1/defra-id-account/company-house-no-answer', function (req, res) {

  // Make a variable and give it the value
  var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

  // Check whether the variable matches
  if (areyouasoletraderorcharity == "Sole trader"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/sole-trader')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/charity-region')
  }

})



router.post('/Beta/submit-s12-statement/V1/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/verify-get-code')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/defra-id-account/verify-confirm-security-word')
  }

})


router.post('/Beta/submit-s12-statement/V1/s12-statement/reservoir-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var changedname = req.session.data['changed-name']

  // Check whether the variable matches
  if (changedname == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/s12-statement/reservoir-details/new-name')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/s12-statement/reservoir-details/confirm')
  }

})


router.post('/Beta/submit-s12-statement/V1/s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches
  if (operatorname == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V1/s12-statement/operator-details/change-name-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V1/s12-statement/operator-details/confirm')
  }

})




// New Beta V2 routes //

// Run this code when a form is submitted to 
router.post('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var changedname = req.session.data['changed-name']

  // Check whether the variable matches
  if (changedname == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/new-name')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/confirm')
  }

})




router.post('/Beta/submit-s12-statement/V2/defra-id-account/business-or-individual-answer', function (req, res) {

  // Make a variable and give it the value
  var businessorindividual = req.session.data['business-or-individual']

  // Check whether the variable matches
  if (businessorindividual == "A business or organisation"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/org-uk-or-not')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/individual-name')
  }

})



router.post('/Beta/submit-s12-statement/V2/defra-id-account/org-uk-or-not-answer', function (req, res) {

  // Make a variable and give it the value
  var whereisorgregistered = req.session.data['Where is the organisation registered']

  // Check whether the variable matches
  if (whereisorgregistered == "UK"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/org-in-uk')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/org-not-in-the-uk')
  }

})



router.post('/Beta/submit-s12-statement/V2/defra-id-account/org-in-uk-answer', function (req, res) {

  // Make a variable and give it the value
  var registeredwithcompanieshouse = req.session.data['registered-with-companies-house']

  // Check whether the variable matches
  if (registeredwithcompanieshouse == "Yes, the organisation is registered at Companies House"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/company-house-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/company-house-no')
  }

})



router.post('/Beta/submit-s12-statement/V2/defra-id-account/company-house-no-answer', function (req, res) {

  // Make a variable and give it the value
  var areyouasoletraderorcharity = req.session.data['are-you-a-sole-trader-or-charity']

  // Check whether the variable matches
  if (areyouasoletraderorcharity == "Sole trader"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/sole-trader')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/charity-region')
  }

})


 
router.post('/Beta/submit-s12-statement/V2/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches
  if (verifyidentity == "Send a code to xxxxxxxx478"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/verify-get-code')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/verify-confirm-security-word')
  }

})


router.post('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var changedname = req.session.data['changed-name']

  // Check whether the variable matches
  if (changedname == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/new-name')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/reservoir-details/confirm')
  }

})


router.post('/Beta/submit-s12-statement/V2/s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches
  if (operatorname == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/operator-details/change-name-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/operator-details/confirm')
  }

})


router.post('/Beta/submit-s12-statement/V2/defra-id-account/verify-identity-answer', function (req, res) {

  // Make a variable and give it the value
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches
  if (verifyidentity == "Send a code to xxxxxxxx478"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/verify-get-code')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/defra-id-account/verify-confirm-security-word')
  }

})



router.post('/Beta/submit-s12-statement/V2/s12-statement/operator-details/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorname = req.session.data['operator-name']

  // Check whether the variable matches
  if (operatorname == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/operator-details/change-name-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/operator-details/confirm')
  }

})


 

router.post('/Beta/submit-s12-statement/V2/s12-statement/inspecting-engineer/change-name-answer', function (req, res) {

  // Make a variable and give it the value
  var inspectingengineer = req.session.data['inspecting-engineer']

  // Check whether the variable matches
  if (inspectingengineer == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/inspecting-engineer/change-name-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/inspecting-engineer/confirm')
  }

})



router.post('/Beta/submit-s12-statement/V2/s12-statement/alt-supervising-engineer/super-engineer-answer', function (req, res) {

  // Make a variable and give it the value
  var altsuperengineer = req.session.data['alt-super-engineer']

  // Check whether the variable matches
  if (altsuperengineer == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/alt-supervising-engineer/engineer-details')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/last-inspection-date')
  }

})

 

router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/recommended-inspection-answer', function (req, res) {

  // Make a variable and give it the value
  var recommendedinspection = req.session.data['recommended-inspection-yes']

  // Check whether the variable matches
  if (recommendedinspection == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/inspection-forward')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/need-inspection')
  }

})


 

router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/need-inspection-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorspecific = req.session.data['operator-specific-yes']

  // Check whether the variable matches
  if (operatorspecific == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/need-inspection-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-safety-action')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-safety-action-answer', function (req, res) {

  // Make a variable and give it the value
  var safetymeasuresyes = req.session.data['safety-measures-yes']

  // Check whether the variable matches
  if (safetymeasuresyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-safety-action-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/issues-to-watch')
  }

})


 

router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/issues-to-watch-answer', function (req, res) {

  // Make a variable and give it the value
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches
  if (issueswatchyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/issues-to-watch-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-specific-action')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-specific-action-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorspecificaction = req.session.data['operator-specific-action-yes']

  // Check whether the variable matches
  if (operatorspecificaction == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-specific-action-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/owner-records')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/owner-records-answer', function (req, res) {

  // Make a variable and give it the value
  var recordsyes = req.session.data['records-yes']

  // Check whether the variable matches
  if (recordsyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/owner-records-no')
  }

})


 

router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-answer', function (req, res) {

  // Make a variable and give it the value
  var floodplanyes = req.session.data['flood-plan-yes']

  // Check whether the variable matches
  if (floodplanyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-tested-answer', function (req, res) {

  // Make a variable and give it the value
  var plantestedyes = req.session.data['plan-tested-yes']

  // Check whether the variable matches
  if (plantestedyes == "Yes"){

  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-tested-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-revise-answer', function (req, res) {

  // Make a variable and give it the value
  var reviseplanyes = req.session.data['revise-plan-yes']

  // Check whether the variable matches
  if (reviseplanyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/flood-plan-revise')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir')
  }

})




router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir-answer', function (req, res) {

  // Make a variable and give it the value
  var neworreuseyes = req.session.data['new-or-re-use-yes']

  // Check whether the variable matches
  if (neworreuseyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/upload-support-docs')
  }

})



router.post('/Beta/submit-s12-statement/V2/s12-statement/questions/new-or-abandoned-reservoir-yes-answer', function (req, res) {

  // Make a variable and give it the value
  var operatorcertactionsyes = req.session.data['operator-cert-actions-yes']

  // Check whether the variable matches
  if (operatorcertactionsyes == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/operator-cert-actions')
  } else {
    res.redirect('/Beta/submit-s12-statement/V2/s12-statement/questions/upload-support-docs')
  }

})



// New Beta V3 routes //


// Run this code when a form is submitted to
router.post('/Beta/submit-s12-statement/V3/defra-id-account/verify-identity-answer', function (req, res) {
  
  // Make a variable and give it the value
  var verifyidentity = req.session.data['Verify identity']

  // Check whether the variable matches
  if (verifyidentity == "Send a code to xxxxxxxx478"){
   
  // Send user to 
    res.redirect('/Beta/submit-s12-statement/V3/defra-id-account/verify-get-code')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/defra-id-account/verify-confirm-security-word')
  }

})





router.post('/Beta/submit-s12-statement/V3/s12-statement/operator-details/confrim-operator-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addoperator = req.session.data['add-operator']

  // Check whether the variable matches
  if (addoperator == "Yes"){

  // Send user to  
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/operator-details/add-operator')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/alt-supervising-engineer/super-engineer')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/operator-details/operator-details-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addoperator2 = req.session.data['add-operator-2']

  // Check whether the variable matches
  if (addoperator2 == "Yes"){

  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/alt-supervising-engineer/super-engineer')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/alt-supervising-engineer/super-engineer-answer', function (req, res) {

  // Make a variable and give it the value
  var altsuperengineer = req.session.data['alt-super-engineer']

  // Check whether the variable matches
  if (altsuperengineer == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/alt-supervising-engineer/engineer-details')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/last-inspection-date')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/last-inspection-date-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchreportcert = req.session.data['match-report-cert']

  // Check whether the variable matches
  if (matchreportcert == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/next-inspection-date')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/no-record-match-last-report-cert')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/next-inspection-date-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchnextinspection = req.session.data['match-next-inspection']
 
  // Check whether the variable matches
  if (matchnextinspection == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/need-inspection')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/no-record-match-next-inspection')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/need-inspection-answer', function (req, res) {

  // Make a variable and give it the value
  var needinspection = req.session.data['need-inspection']

  // Check whether the variable matches
  if (needinspection == "Yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-reason-for-inspection-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-visual-inspection')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-list-of-reasons-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addanotherreason = req.session.data['add-another-reason']

  // Check whether the variable matches
  if (addanotherreason == "Yes"){

  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-reason-for-inspection-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-visual-inspection')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-list-of-reasons-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason2 = req.session.data['another-reason-2']

  // Check whether the variable matches
  if (anotherreason2 == "yes"){
    
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else { 
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-visual-inspection')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-visual-inspection-answer', function (req, res) {
  
  // Make a variable and give it the value
  var operatorspecificyes2 = req.session.data['operator-specific-2']

  // Check whether the variable matches
  if (operatorspecificyes2 == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-measure-to-take-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-safety-measures')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-list-of-measures-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason = req.session.data['another-reason']

  // Check whether the variable matches
  if (anotherreason == "Yes"){
   
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-measure-to-take-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-safety-measures')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-list-of-measures-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason2 = req.session.data['another-reason-2']

  // Check whether the variable matches
  if (anotherreason2 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-safety-measures')
  }

})


 

router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-safety-measures-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchsafetymeasure = req.session.data['match-safety-measure']

  // Check whether the variable matches
  if (matchsafetymeasure == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/issues-to-watch')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/no-record-match-safety-measures')
  }

})


 

router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/issues-to-watch-answer', function (req, res) {
  
  // Make a variable and give it the value
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches
  if (issueswatchyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-issue-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-list-of-issues-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherissue = req.session.data['another-issue']

  // Check whether the variable matches
  if (anotherissue == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-issue-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/engineer-list-of-issues-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherissue2 = req.session.data['another-issue-2']

  // Check whether the variable matches
  if (anotherissue2 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action')
  }

})

 

router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action-answer', function (req, res) {

  // Make a variable and give it the value
  var operatormaintenanceaction = req.session.data['operator-maintenance-action']

  // Check whether the variable matches
  if (operatormaintenanceaction == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-records')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-list-of-maintenance-actions-1-answer', function (req, res) {

  // Make a variable and give it the value
  var anotheraction = req.session.data['another-action']

  // Check whether the variable matches
  if (anotheraction == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-maintenance-action-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-records')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-list-of-maintenance-actions-2-answer', function (req, res) {
 
  // Make a variable and give it the value
  var anotheraction2 = req.session.data['another-action-2']

  // Check whether the variable matches
  if (anotheraction2 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-records')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-records-answer', function (req, res) {
 
  // Make a variable and give it the value
  var updaterecords = req.session.data['update-records']

  // Check whether the variable matches
  if (updaterecords == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-add-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-monitoring')
  }

})





router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-action-list-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherrecord1 = req.session.data['another-record']

  // Check whether the variable matches
  if (anotherrecord1 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-add-action-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-monitoring')
  }

})





router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-action-list-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherrecord1 = req.session.data['another-record-2']

  // Check whether the variable matches
  if (anotherrecord1 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-monitoring')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-monitoring-answer', function (req, res) {
  
  // Make a variable and give it the value
  var updatemonitoring = req.session.data['update-monitoring']

  // Check whether the variable matches
  if (updatemonitoring == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-add-action-3')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-action-list-3-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothermonitoring = req.session.data['another-monitoring']

  // Check whether the variable matches
  if (anothermonitoring == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-add-action-4')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/operator-action-list-4-answer', function (req, res) {
 
  // Make a variable and give it the value
  var anothermonitoring2 = req.session.data['another-monitoring-2']

  // Check whether the variable matches
  if (anothermonitoring2 == "Yes"){

  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan')
  }

})



router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-answer', function (req, res) {
  
  // Make a variable and give it the value
  var floodplanyes = req.session.data['flood-plan-yes']

  // Check whether the variable matches
  if (floodplanyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/upload-support-docs')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-tested-answer', function (req, res) {
  
  // Make a variable and give it the value
  var plantestedyes3 = req.session.data['plan-tested-yes-3']

  // Check whether the variable matches
  if (plantestedyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-tested-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/upload-support-docs')
  }

})




router.post('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-tested-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var reviseplanyes3 = req.session.data['revise-plan-yes-3']

  // Check whether the variable matches
  if (reviseplanyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/flood-plan-revise')
  } else {
    res.redirect('/Beta/submit-s12-statement/V3/s12-statement/questions/upload-support-docs')
  }

})



// New Beta V4 Concept routes //


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/operator-details/confrim-operator-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addoperator = req.session.data['add-operator']

  // Check whether the variable matches
  if (addoperator == "Yes"){

  // Send user to  
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/operator-details/add-operator')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/alt-supervising-engineer/super-engineer')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/next-inspection-date-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchnextinspection = req.session.data['match-next-inspection']
 
  // Check whether the variable matches
  if (matchnextinspection == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/engineer-reason-for-inspection-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/no-record-match-next-inspection')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/engineer-list-of-reasons-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addanotherreason = req.session.data['add-another-reason']

  // Check whether the variable matches
  if (addanotherreason == "Yes"){

  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/engineer-reason-for-inspection-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-visual-inspection')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-visual-inspection-answer', function (req, res) {
  
  // Make a variable and give it the value
  var operatorspecificyes2 = req.session.data['operator-specific-2']

  // Check whether the variable matches
  if (operatorspecificyes2 == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-measure-to-take-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-safety-measures')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-list-of-measures-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason = req.session.data['another-reason']

  // Check whether the variable matches
  if (anotherreason == "Yes"){
   
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-safety-measures')
  }

})



router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/issues-to-watch-answer', function (req, res) {
  
  // Make a variable and give it the value
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches
  if (issueswatchyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/engineer-issue-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-maintenance-action')
  }

})
 

router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/engineer-list-of-issues-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherissue = req.session.data['another-issue']

  // Check whether the variable matches
  if (anotherissue == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-maintenance-action')
  }

})



router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-maintenance-action-answer', function (req, res) {

  // Make a variable and give it the value
  var operatormaintenanceaction = req.session.data['operator-maintenance-action']

  // Check whether the variable matches
  if (operatormaintenanceaction == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-maintenance-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-records')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-list-of-maintenance-actions-1-answer', function (req, res) {

  // Make a variable and give it the value
  var anotheraction = req.session.data['another-action']

  // Check whether the variable matches
  if (anotheraction == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-records')
  }

})



router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-records-answer', function (req, res) {
 
  // Make a variable and give it the value
  var updaterecords = req.session.data['update-records']

  // Check whether the variable matches
  if (updaterecords == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-records-add-action')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-monitoring')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-records-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherrecord1 = req.session.data['another-record']

  // Check whether the variable matches
  if (anotherrecord1 == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-monitoring')
  }

})



router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-monitoring-answer', function (req, res) {
  
  // Make a variable and give it the value
  var updatemonitoring = req.session.data['update-monitoring']

  // Check whether the variable matches
  if (updatemonitoring == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-monitoring-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/operator-monitoring-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothermonitoring = req.session.data['another-monitoring']

  // Check whether the variable matches
  if (anothermonitoring == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-answer', function (req, res) {
  
  // Make a variable and give it the value
  var floodplanyes = req.session.data['flood-plan-yes']

  // Check whether the variable matches
  if (floodplanyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/upload-support-docs')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-tested-answer', function (req, res) {
  
  // Make a variable and give it the value
  var plantestedyes3 = req.session.data['plan-tested-yes-3']

  // Check whether the variable matches
  if (plantestedyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-tested-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/upload-support-docs')
  }

})


router.post('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-tested-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var reviseplanyes3 = req.session.data['revise-plan-yes-3']

  // Check whether the variable matches
  if (reviseplanyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/flood-plan-revise')
  } else {
    res.redirect('/Beta/submit-s12-statement/V4-concept/s12-statement/questions/upload-support-docs')
  }

})



// New Beta V5 routes //

router.post('/Beta/submit-s12-statement/V5/s12-statement/operator-details/confrim-operator-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addoperator = req.session.data['add-operator']

  // Check whether the variable matches
  if (addoperator == "Yes"){

  // Send user to  
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/operator-details/add-operator')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/alt-supervising-engineer/super-engineer')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/alt-supervising-engineer/super-engineer-answer', function (req, res) {

  // Make a variable and give it the value
  var altsuperengineer = req.session.data['alt-super-engineer']

  // Check whether the variable matches
  if (altsuperengineer == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/alt-supervising-engineer/engineer-details')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-maintenance-action.html')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-maintenance-action-answer', function (req, res) {

  // Make a variable and give it the value
  var operatormaintenanceaction = req.session.data['operator-maintenance-action']

  // Check whether the variable matches
  if (operatormaintenanceaction == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-records')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-maintenance-action-1')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-list-of-maintenance-actions-1-answer', function (req, res) {

  // Make a variable and give it the value
  var anotheraction = req.session.data['another-action']

  // Check whether the variable matches
  if (anotheraction == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-records')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-records-answer', function (req, res) {
 
  // Make a variable and give it the value
  var updaterecords = req.session.data['update-records']

  // Check whether the variable matches
  if (updaterecords == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-records-add-action')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-records-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherrecord1 = req.session.data['another-record']

  // Check whether the variable matches
  if (anotherrecord1 == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-answer', function (req, res) {
  
  // Make a variable and give it the value
  var floodplan = req.session.data['flood-plan']

  // Check whether the variable matches
  if (floodplan == "Yes") {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-need-revising')
  } else if (floodplan == "No") {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-no')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-no-directions')
  }
  
})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-what-to-test-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addanothertest = req.session.data['add-another-test']

  // Check whether the variable matches
  if (addanothertest == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-need-revising')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-tested-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var reviseplanyes3 = req.session.data['revise-plan-yes-3']

  // Check whether the variable matches
  if (reviseplanyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/flood-plan-revise')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-safety-measures')
  }

})

router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-monitoring-answer', function (req, res) {
  
  // Make a variable and give it the value
  var updatemonitoring = req.session.data['update-monitoring']

  // Check whether the variable matches
  if (updatemonitoring == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-monitoring-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/next-inspection-date')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-monitoring-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothermonitoring = req.session.data['another-monitoring']

  // Check whether the variable matches
  if (anothermonitoring == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/next-inspection-date')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/next-inspection-date-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchnextinspection = req.session.data['match-next-inspection']
 
  // Check whether the variable matches
  if (matchnextinspection == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/engineer-reason-for-inspection-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/no-record-match-next-inspection')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/engineer-list-of-reasons-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addanotherreason = req.session.data['add-another-reason']

  // Check whether the variable matches
  if (addanotherreason == "Yes"){

  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/engineer-reason-for-inspection-2')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-visual-inspection')
  }

})

router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-visual-inspection-answer', function (req, res) {
  
  // Make a variable and give it the value
  var operatorspecificyes2 = req.session.data['operator-specific-2']

  // Check whether the variable matches
  if (operatorspecificyes2 == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-measure-to-take-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/issues-to-watch')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/operator-list-of-measures-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason = req.session.data['another-reason']

  // Check whether the variable matches
  if (anotherreason == "Yes"){
   
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/issues-to-watch')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/issues-to-watch-answer', function (req, res) {
  
  // Make a variable and give it the value
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches
  if (issueswatchyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/engineer-issue-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/upload-support-docs')
  }

})
 

router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/engineer-list-of-issues-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherissue = req.session.data['another-issue']

  // Check whether the variable matches
  if (anotherissue == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/questions/upload-support-docs')
  }

})


router.post('/Beta/submit-s12-statement/V5/s12-statement/questions/draft-or-submit-answer', function (req, res) {
  
  // Make a variable and give it the value
  var draftorsubmit = req.session.data['draft-or-submit']

  // Check whether the variable matches
  if (draftorsubmit == "Send a draft"){
  
  // Send user to
  res.redirect('/Beta/submit-s12-statement/V5/s12-statement/send-draft')

  } else {
    res.redirect('/Beta/submit-s12-statement/V5/s12-statement/confirmation')
  }

})



// New Beta V6 routes //

router.post('/Beta/submit-s12-statement/V6/s12-statement/operator-details/confrim-operator-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addoperator = req.session.data['add-operator']

  // Check whether the variable matches
  if (addoperator == "Yes"){

  // Send user to  
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/operator-details/add-operator')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/alt-supervising-engineer/super-engineer')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/alt-supervising-engineer/super-engineer-answer', function (req, res) {

  // Make a variable and give it the value
  var altsuperengineer = req.session.data['alt-super-engineer']

  // Check whether the variable matches
  if (altsuperengineer == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/alt-supervising-engineer/engineer-details')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-maintenance-actions.html')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-maintenance-action-answer', function (req, res) {

  // Make a variable and give it the value
  var operatormaintenanceaction = req.session.data['operator-maintenance-action']

  // Check whether the variable matches
  if (operatormaintenanceaction == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/issues-to-watch')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-maintenance-action-1')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-list-of-maintenance-actions-1-answer', function (req, res) {

  // Make a variable and give it the value
  var anotheraction = req.session.data['another-action']

  // Check whether the variable matches
  if (anotheraction == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/issues-to-watch')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/issues-to-watch-answer', function (req, res) {
  
  // Make a variable and give it the value
  var issueswatchyes = req.session.data['issues-to-watch-yes']

  // Check whether the variable matches
  if (issueswatchyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/engineer-issue-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-records')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/engineer-list-of-issues-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherissue = req.session.data['another-issue']

  // Check whether the variable matches
  if (anotherissue == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-records')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-records-answer', function (req, res) {
 
  // Make a variable and give it the value
  var updaterecords = req.session.data['update-records']

  // Check whether the variable matches
  if (updaterecords == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-records-add-action')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-monitoring-actions-v2')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-records-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherrecord1 = req.session.data['another-record']

  // Check whether the variable matches
  if (anotherrecord1 == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-monitoring-actions-v2')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-monitoring-answer', function (req, res) {
  
  // Make a variable and give it the value
  var updatemonitoring = req.session.data['update-monitoring']

  // Check whether the variable matches
  if (updatemonitoring == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-monitoring-action-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-safety-measures')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-monitoring-actions-list-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothermonitoring = req.session.data['another-monitoring']

  // Check whether the variable matches
  if (anothermonitoring == "Yes"){
  
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-safety-measures')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/next-inspection-date-answer', function (req, res) {
  
  // Make a variable and give it the value
  var matchnextinspection = req.session.data['match-next-inspection']
 
  // Check whether the variable matches
  if (matchnextinspection == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/engineer-reason-for-inspection-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-visual-inspection')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/engineer-list-of-reasons-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var addanotherreason = req.session.data['add-another-reason']

  // Check whether the variable matches
  if (addanotherreason == "Yes"){

  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-visual-inspection')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-visual-inspection-answer', function (req, res) {
  
  // Make a variable and give it the value
  var operatorspecificyes2 = req.session.data['operator-specific-2']

  // Check whether the variable matches
  if (operatorspecificyes2 == "Yes"){
 
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-measure-to-take-1')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/operator-list-of-measures-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anotherreason = req.session.data['another-reason']

  // Check whether the variable matches
  if (anotherreason == "Yes"){
   
  // Send user to
    res.redirect('#')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-answer', function (req, res) {
  
  // Make a variable and give it the value
  var floodplanyes = req.session.data['flood-plan-yes']

  // Check whether the variable matches
  if (floodplanyes == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/upload-support-docs')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-tested-answer', function (req, res) {
  
  // Make a variable and give it the value
  var plantestedyes3 = req.session.data['plan-tested-yes-3']

  // Check whether the variable matches
  if (plantestedyes3 == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-tested-yes')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/upload-support-docs')
  }

})


router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-tested-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var floodplan = req.session.data['flood-plan']

  // Check whether the variable matches
  if (floodplan == "Yes"){
  
  // Send user to
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/flood-plan-revise')
  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/questions/upload-support-docs')
  }

})



router.post('/Beta/submit-s12-statement/V6/s12-statement/questions/draft-or-submit-answer', function (req, res) {
  
  // Make a variable and give it the value
  var draftorsubmit = req.session.data['draft-or-submit']

  // Check whether the variable matches
  if (draftorsubmit == "Send a draft"){
  
  // Send user to
  res.redirect('/Beta/submit-s12-statement/V6/s12-statement/send-draft')

  } else {
    res.redirect('/Beta/submit-s12-statement/V6/s12-statement/confirmation')
  }

})



// Private Beta //


// V9 //

router.post('/Beta/Private/submit-s12/V9/download-reservoir-template-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothertemplate1 = req.session.data['another-template-1']

  // Check whether the variable matches
  if (anothertemplate1 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9/choose-a-reservoir-3')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9/download-confirmation')
  }

})


router.post('/Beta/Private/submit-s12/V9/download-reservoir-template-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothertemplate2 = req.session.data['another-template-2']

  // Check whether the variable matches
  if (anothertemplate2 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9/choose-a-reservoir')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9/download-confirmation-2')
  }

})


router.post('/Beta/Private/submit-s12/V9/download-reservoir-template-3-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothertemplate3 = req.session.data['another-template-3']

  // Check whether the variable matches
  if (anothertemplate3 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9/choose-a-reservoir')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9/download-confirmation-3')
  }

})


router.post('/Beta/Private/submit-s12/V9/send-your-statement-answer', function (req, res) {
  
  // Make a variable and give it the value
  var send2undertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (send2undertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9/upload-confirmation')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9/upload-confirmation')
  }

})


router.post('/Beta/Private/submit-s12/V9/send-your-statement-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var send2undertaker2 = req.session.data['send-to-undertaker-2']

  // Check whether the variable matches
  if (send2undertaker2 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9/upload-confirmation-2')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9/upload-confirmation-2')
  }

})



// V9-1 //


router.post('/Beta/Private/submit-s12/V9-1/download-reservoir-template-answer', function (req, res) {
  
  // Make a variable and give it the value
  var anothertemplate1 = req.session.data['another-template-1']

  // Check whether the variable matches
  if (anothertemplate1 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9-1/your-statements-1-in-prog')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9-1/download-confirmation')
  }

})


router.post('/Beta/Private/submit-s12/V9-1/send-your-statement-answer', function (req, res) {
  
  // Make a variable and give it the value
  var send2undertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (send2undertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9-1/upload-confirmation')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9-1/upload-confirmation')
  }

})


router.post('/Beta/Private/submit-s12/V9-1/send-your-statement-2-answer', function (req, res) {
  
  // Make a variable and give it the value
  var send2undertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (send2undertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V9-1/upload-confirmation-2')
  } else {
    res.redirect('/Beta/Private/submit-s12/V9-1/upload-confirmation-2')
  }

})


// Cookies V1 //


router.post('/Beta/Private/Cookies/V1/Customise/cookies-page-answer', function (req, res) {
  
  // Make a variable and give it the value
  var analyticscookies = req.session.data['analytics-cookies']

  // Check whether the variable matches
  if (analyticscookies == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/Cookies/V1/Accept/service-start-cookies-accept')
  } else {
    res.redirect('/Beta/Private/Cookies/V1/Reject/service-start-cookies-reject')
  }

})


// Submit S12 V14 //

router.post('/Beta/Private/submit-s12/V14/which-idea-answer', function (req, res) {
  
  // Make a variable and give it the value
  var whichidea = req.session.data['which-idea']

  // Check whether the variable matches
  if (whichidea == "Idea A"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V14/Idea-A/service-start')
  } else {
    res.redirect('/Beta/Private/submit-s12/V14/Idea-B/service-start')
  }

})


router.post('/Beta/Private/submit-s12/V14/Idea-B/send-or-resend-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendorresend = req.session.data['send-or-resend']

  // Check whether the variable matches
  if (sendorresend == "Send statement"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V14/Idea-B/send-your-statement')
  } else {
    res.redirect('/Beta/Private/submit-s12/V14/Idea-B/resubmit-statement')
  }

})


// Submit S12 V14 //

router.post('/Beta/Private/submit-s12/V15/which-idea-answer', function (req, res) {
  
  // Make a variable and give it the value
  var whichidea = req.session.data['which-idea']

  // Check whether the variable matches
  if (whichidea == "Idea A"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/your-statements')
  } else {
    res.redirect('/Beta/Private/submit-s12/V15/Idea-B/your-statements')
  }

})


router.post('/Beta/Private/submit-s12/V15/Idea-A/send-your-statement-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoundertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (sendtoundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/send-to-another-undertaker-yes')
  } else {
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/send-to-another-undertaker-no')
  }

})


router.post('/Beta/Private/submit-s12/V15/Idea-A/send-to-another-undertaker-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoanotherundertaker = req.session.data['send-to-another-undertaker']

  // Check whether the variable matches
  if (sendtoanotherundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/upload-your-template')
  }

})


router.post('/Beta/Private/submit-s12/V15/Idea-A/send-to-another-undertaker-no-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtonewundertaker = req.session.data['send-to-new-undertaker']

  // Check whether the variable matches
  if (sendtonewundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V15/Idea-A/upload-your-template')
  }

})


// Submit S12 V16 //

router.post('/Beta/Private/submit-s12/V15/yas-options-answer', function (req, res) {
  
  // Make a variable and give it the value
  var yasoptions = req.session.data['yas-options']

  // Check whether the variable matches
  if (yasoptions == "Search option"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V16/your-statements-search')
  } else {
    res.redirect('/Beta/Private/submit-s12/V16/your-statements-no-search')
  }

})

router.post('/Beta/Private/submit-s12/V16/send-or-resend-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendorresend = req.session.data['send-or-resend']

  // Check whether the variable matches
  if (sendorresend == "Send statement"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V16/send-your-statement')
  } else {
    res.redirect('/Beta/Private/submit-s12/V16/resubmit-statement')
  }

})



// Submit S12 V17 //

router.post('/Beta/Private/submit-s12/V17/send-or-resend-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendorresend = req.session.data['send-or-resend']

  // Check whether the variable matches
  if (sendorresend == "Send statement"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V17/send-your-statement')
  } else {
    res.redirect('/Beta/Private/submit-s12/V17/resubmit-statement')
  }

})


router.post('/Beta/Private/submit-s12/V17/send-your-statement-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoundertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (sendtoundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V17/send-to-another-undertaker-yes')
  } else {
    res.redirect('/Beta/Private/submit-s12/V17/send-to-another-undertaker-no')
  }

})


router.post('/Beta/Private/submit-s12/V17/send-to-another-undertaker-yes-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoanotherundertaker = req.session.data['send-to-another-undertaker']

  // Check whether the variable matches
  if (sendtoanotherundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V17/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V17/upload-your-template')
  }

})


router.post('/Beta/Private/submit-s12/V17/send-to-another-undertaker-no-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtonewundertaker = req.session.data['send-to-new-undertaker']

  // Check whether the variable matches
  if (sendtonewundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V17/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V17/upload-your-template')
  }

})



// Submit S12 V19 – Send to undertaker //


router.post('/Beta/Private/submit-s12/V19/send-or-resend-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendorresend = req.session.data['send-or-resend']

  // Check whether the variable matches
  if (sendorresend == "Send statement"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/send-your-statement')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/resubmit-statement')
  }

})


router.post('/Beta/Private/submit-s12/V19/send-your-statement-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoundertaker = req.session.data['send-to-undertaker']

  // Check whether the variable matches
  if (sendtoundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/send-to-someone-else')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/send-to-someone-else-instead')
  }

})


router.post('/Beta/Private/submit-s12/V19/send-to-someone-else-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtoanotherundertaker = req.session.data['send-to-another-undertaker']

  // Check whether the variable matches
  if (sendtoanotherundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/upload-your-template')
  }

})


router.post('/Beta/Private/submit-s12/V19/send-to-someone-else-instead-answer', function (req, res) {
  
  // Make a variable and give it the value
  var sendtonewundertaker = req.session.data['send-to-new-undertaker']

  // Check whether the variable matches
  if (sendtonewundertaker == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/enter-emails')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/upload-your-template')
  }

})


router.post('/Beta/Private/submit-s12/V19/delete-email-answer', function (req, res) {
  
  // Make a variable and give it the value
  var deleteemail = req.session.data['delete-email']

  // Check whether the variable matches
  if (deleteemail == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/check-emails-1')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/check-emails')
  }

})

router.post('/Beta/Private/submit-s12/V19/delete-email-1-answer', function (req, res) {
  
  // Make a variable and give it the value
  var deleteemail1 = req.session.data['delete-email-1']

  // Check whether the variable matches
  if (deleteemail1 == "Yes"){
   
  // Send user to
    res.redirect('/Beta/Private/submit-s12/V19/check-optional-emails-1')
  } else {
    res.redirect('/Beta/Private/submit-s12/V19/check-optional-emails-1')
  }

})

module.exports = router