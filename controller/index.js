const Member = require('../model/member');
const Equipment = require('../model/equipment');
const Event = require('../model/event');


exports.getIndex = (req,res,next)=> {
    let members, events, equipment;
    Member.number().then( ([rows]) => { members = rows[0].total } ).catch(err=>console.log(err));
    Event.number().then( ([rows]) => { events = rows[0].total } ).catch(err=>console.log(err));
    Equipment.number().then( ([rows]) => { equipment = rows[0].total } ).catch(err=>console.log(err));
    res.render('index', {
        memberNo: members || 0,
        eventNo: events || 0,
        equipmentNo: equipment || 0
    });
};

