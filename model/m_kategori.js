const mysql = require('mysql2')
const db    = require('../config/database').db


module.exports =
{

    get_semua_kategori: function() {
        let sql = mysql.format(
            `SELECT * FROM master_kategori;`
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
        deskripsi       : req.body.form_deskripsi,
        
    }
    let sql = mysql.format(
        `INSERT INTO master_kategori SET ?`,
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