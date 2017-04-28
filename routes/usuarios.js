var express = require("express");
var router = express.Router();

router.use((req, res, next) => {
    req.collection = req.db.collection("users");
    next();
})


router.get("/:nombre", (req, res, next)=>{
    let nombre = req.params.nombre;
    req.collection.findOne({usuario:nombre}).then(doc=>{
        if(doc){
            res.send(doc);
        }else{
            res.status(404).send({msg:"Usuario no encontrado"});
        }
    }).catch(err=>{

    })
})

router.post("/", (req, res, next) => {
    let usuario = req.body;
    req.collection.insert(user).then(result => {
        res.send({ success: true });
    }).catch(err => {
        res.send({ success: false });
    });

});

module.exports = router;