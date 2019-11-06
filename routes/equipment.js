const express = require('express');
const EquipmentController = require('../controller/equipment');
const { check, validationResult } = require('express-validator');
const db = require('../data/database');
const router = express.Router();

router.get('/equipments', EquipmentController.getAllEquipment)

// SHOW ADD Equipments FORM
router.get('/equipments/add', (req, res, next) => {
    res.render('equipment-add', {
        title: 'Add New equipment',
        brand: '',
        model_no: '',
        set: '',
        type: '',
        supp_id: '',
        err: null
    })
})

// ADD NEW equipments POST ACTION
router.post('/equipments/add', [
    check('supp_id').isNumeric().withMessage('Invalid Supp_id')
], (req, res, next) => {

    console.log(req['body']);
    const errors = validationResult(req)
    var equipment = {
        brand: req['body'].brand || "China",
        model_no: req['body'].model_no || "None",
        set: req['body'].set || "None",
        type: req['body'].type || "None",
        supp_id: req['body'].supp_id
    }
    if (!errors.isEmpty()) {
        console.log('rror')
        res.render('equipment-add', {
            title: 'Add New equipment',
            brand: '',
            model_no: '',
            set: '',
            type: '',
            supp_id: '',
            err: errors.array()
        })

    } else {
        console.log("Inserting...")
        db.query('INSERT INTO equipment SET ?', equipment).then((err, result) => {
            console.log("Success!")

            res.redirect(`/equipments`);
        })
    }
})

router.post('/equipments/search/by-supp', EquipmentController.getBySupplier)

router.get('/equipments/:eid', EquipmentController.getEquipment)

module.exports = router;