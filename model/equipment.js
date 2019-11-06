const db = require('../data/database');

module.exports = class Equipment {
    constructor() {}
    static number() {
        return db.execute('SELECT COUNT(id) AS total FROM equipment');
    }
    static fetchAll() {
        let result = db.execute('SELECT * FROM equipment');
        console.log(result);
        return result;
    }
    static fetchById(id) {
        //return db.execute('SELECT * FROM euipment,supplier WHERE equipment.id= ? AND equipment.id=supplier.eqid',[id]);
        return db.execute('SELECT * FROM equipment WHERE equipment.id = ?', [id]);
    }
    static fetchBySupplier(name) {
        return db.execute('SElECT * FROM equipment WHERE supp_id in (SELECT id FROM supplier WHERE name like ?)', [name]);
    }
};