const Member = require('../model/member');
const Equipment = require('../model/equipment');
const Event = require('../model/event');


exports.getIndex = (req,res,next) => {
    Promise.all([
        Member.number(),
        Event.number(),
        Equipment.number()
    ]).then( (rows) => {
        res.render('index', {
            memberNo: rows[0][0][0].total || 0,
            eventNo: rows[1][0][0].total || 0,
            equipmentNo: rows[2][0][0].total || 0
        });
    })
};

