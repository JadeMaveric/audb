const express = require('express');
const indexController = require('../controller/index');

const router = express.Router();

router.get('/',indexController.getIndex);

module.exports=router;