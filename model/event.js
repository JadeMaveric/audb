const db = require('../data/database');

module.exports = class Event{
    constructor(){}
    static title(){
        return db.execute('SELECT name AS t FROM events where date =(SELECT MAX(date) FROM events) ');
    }
    static fetchAll(){
        return db.execute('SELECT * FROM events');
    }
    static fetchById(i){
        return db.execute('SELECT * FROM events WHERE events.id = ?',[i]);
    }
}