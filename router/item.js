import express from "express"
import ItemController from "../controllers/itemcontrollers.js"
const router = express.Router()



router.route("/").get(ItemController.getitems)
     
router.route("/").post(ItemController.saveitem)

router.route("/").delete(ItemController.deleteitem)
export default router