import {useState, useEffect} from "react"

const useCardFatch = (searchTerm) => {

    const [cards,setCards] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)

    useEffect(() => {

        const fetchCards = (searchTerm) => {
            setIsLoading(true)
            fetch(APICALL)
            .then((response) => {
                if(response.ok) return response.json()

                else throw new Error("something went wrong")
                })
            .then((results) => {
                setCards(results.data.slice(0,100))
                setIsLoading(false)
                setIsError(false)
            })
            .catch((e) => {
                setIsError(true)
                setIsLoading(false)
            })
        }

    }, [])


}