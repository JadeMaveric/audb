const express = require('express');
const EquipmentController = require('../controller/equipment');

const router = express.Router();

router.get('/equipments/:eid',EquipmentController.getEquipment)
router.get('/equipments',EquipmentController.getAllEquipment)


module.exports=router;