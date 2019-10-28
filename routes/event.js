const express = require('express');
const eventController = require('../controller/event');
const db = require('../data/database');

const router = express.Router();

router.get('/events',eventController.getEvents);

// SHOW ADD EVENT FORM
router.get('/events/add', (req, res, next) => {    
    res.render('event-add', {
        title: 'Add New Event',
        name: '',
        date: '',
        report: ''
    })
})

// ADD NEW EVENT POST ACTION
router.post('/events/add', (req, res, next) => {
    
    console.log(req['body']);

    var event = {
        name: req['body'].name,
        date: req['body'].date,
        report: req['body'].report
    }
        
    console.log("Inserting...")
    db.query('INSERT INTO events SET ?', event).then( (err, result) => {
        console.log("Success!")

        res.redirect(`/events`);
    })
})

router.get('/events/:id',eventController.getEvent)

module.exports =router 