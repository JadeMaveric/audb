const express = require('express');
const memberController = require('../controller/member');
const { check, validationResult } = require('express-validator');
const db = require('../data/database')

const router = express.Router();

router.get('/members', memberController.getAllMembers);

// SHOW ADD MEMBER FORM
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
    db.query('INSERT INTO members SET ?', member).then((err, result) => {
        console.log("Success!")
        console.log(err)
        res.redirect(`/members/${member.roll_no}`);
    })
})

// SHOW EDIT USER FORM
router.get('members/edit/(:id)', function (req, res, next) {
    console.log("Requsting used id ", req.params.id)
    connection.query('SELECT * FROM members WHERE id = ?', req.params.id).then( (err, rows, fields) => {
        if (err) throw err

        // if user not found
        if (rows.length <= 0) {
            res.redirect('/members')
        }
        else { // if user found
            res.render('members-edit', {
                title: 'Edit Customer',
                first_name: rows[0].first_name,
                last_name: rows[0].last_name,
                roll_no: rows[0].roll_no,
                instrument: rows[0].instrument
            })
        }
    })

})

// EDIT USER POST ACTION
router.post('members/update/:id', function (req, res, next) {
    console.log(req['body']);

    var member = {
        first_name: req['body'].first_name,
        last_name: req['body'].last_name,
        roll_no: req['body'].roll_no,
        instrument: req['body'].instrument || "None"
    }

    connection.query('UPDATE members SET ? WHERE id = ' + req.params.id, user).then( (err, result) => {
        res.redirect('/customers');
    })
})

router.get('/members/:id', memberController.getMember);

module.exports = router;