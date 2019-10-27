const Member = require('../model/member');
//const Equipment = require('../model/equipment');
//const Event = require('../model/event');
//const Supplier = require('../model/supplier');


exports.getIndex = (req,res,next)=> {
        Member.number().then(([rows])=>{
        //var en=Equipment.number();
        // console.log(en);
        //Event.title().then(([rows])=>console.log(rows[0].t)).catch(err=>console.log(err));
        //Equipment.number().then(([rows])=>en=rows[0].id).catch(err=>console.log(err));
        res.render('index',{
            memberNo:rows[0].r,
            eventTitle:'abc',
            classTitle:'xyz',
            equipmentNo:'1'
        });
    })
    .catch(err=>console.log(err))
};

