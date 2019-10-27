const express = require('express');
const memberController = require('../controller/member');

const router = express.Router();



router.get('/members',memberController.getAllMembers);
router.get('/members/:id',memberController.getMember)

module.exports =router 