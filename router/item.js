import express from "express"
import ItemController from "../controllers/itemcontrollers.js"
const router = express.Router()


 
router.route("/")
    .get(ItemController.getitems)
    

export default router