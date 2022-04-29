import Mongo_db from "./model/db_Mongo.js"
import routerItem from "./router/item.js"
import config from "./config.js"
import express from 'express'
import cors from "cors"
import path from 'path';
import compression from "compression"

const app = express()
const port = config.PORT;
 
 
app.use(cors());
app.use(compression());
Mongo_db.conectarDB()

app.use(express.static('public'));

 
app.use("/items", routerItem)


app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});