const Member = require('../model/member');

exports.getMembers=(req,res,next)=>{
    Member.fetchAll()
    .then(([rows,fieldData])=>{
        res.render('member-list',{
            members:rows
        })
    })
}
exports.getMember =(req,res,next)=>{
    const id = req.params.id;
    Member.fetchById(id)
    .then(([members])=>
        {
            res.render('member-details',{
                member:members[0]
            })
        }).catch(err=>console.log(err))

}