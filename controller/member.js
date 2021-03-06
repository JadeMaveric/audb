const Member = require('../model/member');

exports.getAllMembers = (req, res, next) => {
    Member.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('member-list', {
                members: rows
            })
        })
}
exports.getMember = (req, res, next) => {
    const id = req.params.id;
    Member.fetchById(id)
        .then(([members]) => {
            res.render('member-details', {
                member: members[0]
            })
        }).catch(err => console.log(err))

}
exports.getMusicians = (req, res) => {
    Member.getMusicians()
        .then(([rows]) => {
            res.render('musicians', {
                members: rows
            })
        })
        .catch(err => console.log(err))
}
exports.getByInstument = (req, res) => {
    Member.getByInstrument(req.body.instrument)
        .then(([rows]) => {
            res.render('musicians', {
                members: rows
            })
        })

}