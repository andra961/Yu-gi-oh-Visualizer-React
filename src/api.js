const APIBASE = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"

const API = {

    loadCards: async (searchTerm = "") => {

        const endPoint = !searchTerm ? APIBASE 
                        : APIBASE + "fname=" + searchTerm

        const response = await fetch(endPoint)

        if(response.ok) return (await response.json()).data.slice(0,100)
        else throw new Error("Something went wrong...")
    }

}

export default API