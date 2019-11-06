const Eq = require('../model/equipment');

exports.getAllEquipment = (req, res, next) => {
    Eq.fetchAll()
        .then(([rows]) => {
            res.render('equipment-list', {
                equipments: rows
            })
        })
        .catch(err => console.log(err));
}
exports.getEquipment = (req, res, next) => {
    const id = req.params.eid;
    console.log(id)
    Eq.fetchById(id)
        .then(([rows]) => {
            console.log(rows[0]);
            res.render('equipment-details', {
                equipment: rows[0]
            })
        }).catch(err => console.log(err))
}

exports.getBySupplier = (req, res, next) => {
    const name = req.body.name;
    console.log(req);
    Eq.fetchBySupplier(name)
        .then(([rows]) => {
            console.log(rows);
            res.render('equipment-list', {
                equipments: rows
            })
        }).catch(err => console.log(err))
}