const db = require('../data/database');

module.exports = class Member {
    constructor() {}
    static number() {
        return db.execute('SELECT COUNT(roll_no) AS total FROM members');
    }
    static fetchAll() {
        return db.execute('SELECT * FROM members');
    }
    static fetchById(id) {
        return db.execute('SELECT * FROM members WHERE members.roll_no = ?', [id]);
    }
    static getMusicians() {
        var c = 'null'
        return db.execute('SELECT * FROM members WHERE members.instrument != ?', [c])
    }
};