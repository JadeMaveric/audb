const db = require('../data/database');

module.exports = class Event {
    constructor() {}
    static number() {
        return db.execute('SELECT COUNT(id) as total FROM events');
    }
    static title() {
        return db.execute('SELECT name AS t FROM events where date =(SELECT MAX(date) FROM events) ');
    }
    static fetchAll() {
        return db.execute('SELECT * FROM events');
    }
    static fetchById(i) {
        return db.execute('SELECT * FROM events,attendees,members WHERE events.id = ? and attendees.event_id = ? and members.roll_no = attendees.roll_no', [i, i]);
    }
}