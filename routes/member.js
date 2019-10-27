const express = require('express');
const memberController = require('../controller/member');
const { check, validationResult } = require('express-validator');
const db = require('../data/database')

const router = express.Router();

router.get('/members',memberController.getAllMembers);

// SHOW ADD USER FORM
router.get('/members/add', (req, res, next) => {    
    res.render('members-add', {
        title: 'Add New Member',
        first_name: '',
        last_name: '',
        roll_no: '',
        instrument: ''
    })
})

// ADD NEW MEMBER POST ACTION
router.post('/members/add', (req, res, next) => {
    
    console.log(req['body']);

    var member = {
        first_name: req['body'].first_name,
        last_name: req['body'].last_name,
        roll_no: req['body'].roll_no,
        instrument: req['body'].instrument || "None"
    }
        
    console.log("Inserting...")
    db.query('INSERT INTO members SET ?', member).then( (err, result) => {
        console.log("Sucess!")
        res.redirect(`/members/${member.roll_no}`);
    })
    // res.redirect(`/members`);
})

router.get('/members/:id',memberController.getMember);

module.exports = router;