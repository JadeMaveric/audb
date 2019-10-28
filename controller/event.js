const Event = require('../model/event');

exports.getEvents = (req, res, next) => {
    Event.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            res.render('event-list', {
                events: rows
            })
        }).catch(err => console.log(err))
}
exports.getEvent = (req, res, next) => {
    const id = req.params.id;
    Event.fetchById(id)
        .then(([rows]) => {
            res.render('event-details', {
                event: rows[0]
            })
        }).catch(err => console.log(err))
}