const m_supplier = require('../model/m_supplier')

module.exports =
{


    index: async function(req,res) {
        let dataview = {
            req         : req,
            konten      : 'master-supplier/index',
            uri_segment : req.path.split('/'),
            supplier      : await m_supplier.get_semua_supplier()
        }
        res.render('template/struktur', dataview)
    },


    form_tambah: async function(req,res) {
        let dataview = {
            konten      : 'master-supplier/form-tambah',
            uri_segment : req.path.split('/'),
            info_error  : null,
            supplier    : await m_supplier.get_semua_supplier()
        }
        res.render('template/struktur', dataview)
    },



    proses_simpan: async function(req,res) {
        try {
            let insert      = await m_supplier.tambah(req)
            let isi_notif   = `berhasil input supplier baru`
            if (insert.affectedRows > 0) {
                res.redirect(`/master-supplier?note=sukses&pesan=${isi_notif}`)
            }
        } catch (error) {
            let dataview = {
                konten      : 'master-supplier/form-tambah',
                req         : req,
                uri_segment : req.path.split('/'),
                info_error  : error,
            }
            res.render('template/struktur', dataview)
        }
    },
}