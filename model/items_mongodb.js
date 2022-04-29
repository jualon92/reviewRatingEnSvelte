import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({ //declaro schema de docu
    rating: Number,
    text: String,
    id:Number,
})

//modelo de docu almacenado en coleccion
const itemsmodel = mongoose.model("comentarios", itemSchema)


export default itemsmodel 
