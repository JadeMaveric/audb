const db = require('../data/database');

module.exports = class Equipment{
    constructor(){}
    static number(){
        var x;
         db.execute('SELECT COUNT(id) AS id FROM equipment')
        .then(([rows])=>{setVal(rows[0].id)}).catch(err=>console.log(err));
        function setVal(val){
            x=val;
            //console.log(x)
        }
        return x;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM equipment')
    }
    static fetchById(id){
        //return db.execute('SELECT * FROM euipment,supplier WHERE equipment.id= ? AND equipment.id=supplier.eqid',[id]);
        return db.execute('SELECT * FROM equipment');
    }
};

