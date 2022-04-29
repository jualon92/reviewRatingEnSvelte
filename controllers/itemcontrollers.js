import express from "express"
import itema from "../model/items_mongodb.js" //mongoose schema
 

const router = express.Router()
 

const getitems = (req,res) => {
    itema.find() //all
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(400).json("error" + err))
    
}
 
 

router.route("/delete/:id").delete()

router.route("/update/:id").put()

export default {getitems} 
