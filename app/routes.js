const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']

  // Check whether the variable matches a condition
  if (jugglingBalls == "3"){
    // Send user to next page
    res.redirect('/s12-date')
  } else {
    // Send user to ineligible page
    res.redirect('/compliance-section-11')
  }

})

module.exports = router
