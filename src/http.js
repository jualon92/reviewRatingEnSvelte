class Http {
 
    static deleteItemByID = async (itemID) => {
        await fetch("items", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: itemID }),
        });
        const content = await rawResponse.json();

        console.log(content);
    }


    static postItem = async (nuevoFeedback) => {
        const rawResponse = await fetch("items", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoFeedback),
        });
        const content = await rawResponse.json();

        console.log(content);
    }

    
    static async getItems() {

        const response = await fetch("items");
        const rta = await response.json()
        console.log('Response:', rta);
        return rta
     //   document.querySelector(".contenedor-preloader").style.display = "none"
    
     //   const data = procesarData(rta)
     //   console.log("Data procesada", data)
     //   FeedbackStore.set(data)
    
    }



}

 

export default Http