import express from "express"
import itema from "../model/items_mongodb.js" //mongoose schema
 

const router = express.Router()
 
 

const getitems = (req,res) => {
    itema.find() //all
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json("error" + err))
    
}
 
const saveitem = async (req,res) => {
     console.log(req.body)
     const nuevoItem = new itema(req.body)
     nuevoItem.save()
    
}
 
const deleteitem =  async (req,res) => {
    console.log("borrando ", req.body)
    
    const idBuscado = req.body.id
    itema.deleteOne({ id: idBuscado},  function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })
}
 
router.route("/delete/:id").delete()

router.route("/update/:id").put()

export default {getitems,saveitem,deleteitem} 
