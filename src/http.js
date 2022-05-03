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
}

export default Http