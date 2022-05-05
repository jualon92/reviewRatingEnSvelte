import { writable } from "svelte/store"


export const FeedbackStore = writable([]) //set a writable store 


/*
const apiURL = "items";

 
const procesarData = (listaJSON) => {
    let lista = []
    listaJSON.forEach(eleDB => {
        const nuevoEle = {
            "id": eleDB.id,
            "rating": Number(eleDB.rating),
            "text": eleDB.text
        }
         
        lista.push(nuevoEle)
    });
    
    //quiero lista de menor antiguedad a mayor, doy vuelta
    lista.reverse() 
    return lista 
}

async function getData() {

    const response = await fetch(apiURL);
    const rta = await response.json()
    console.log('Response:', rta);
    document.querySelector(".contenedor-preloader").style.display = "none"

    const data = procesarData(rta)
    console.log("Data procesada", data)
    FeedbackStore.set(data)

}

getData(); */ 









