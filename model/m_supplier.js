const mysql = require('mysql2')
const db    = require('../config/database').db


module.exports =
{

    get_semua_supplier: function() {
        let sql = mysql.format(
            `SELECT * FROM master_supplier;`
        )

        return new Promise( (resolve,reject)=>{
            db.query(sql, function(errorSql, hasil) {
                if (errorSql) {
                    reject(errorSql)
                } else {
                    resolve(hasil)
                }
            })
        })
    },

tambah : function(req) {
    let data = {
        // nama kolom di sql: req.body.name
        nama            : req.body.form_nama,
        email           : req.body.form_email,
        media_sosial    : req.body.form_media_sosial,
        kontak          : req.body.form_kontak,
        alamat          : req.body.form_alamat,

    }
    let sql = mysql.format(
        `INSERT INTO master_supplier SET ?`,
        [data]
    )

    return new Promise( (resolve,reject)=>{
        db.query(sql, function(errorSql, hasil) {
            if (errorSql) {
                reject(errorSql)
            } else {
                resolve(hasil)
            }
        })
    })
},


}