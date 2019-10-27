const express = require('express');
const eventController = require('../controller/event');

const router = express.Router();



router.get('/events',eventController.getEvents);
router.get('/events/:id',eventController.getEvent)

module.exports =router 