import React, {useState} from "react"

import APICALL from "./api"

function Header ({setCards, setIsLoading, setIsError}) {

    const [search, setSearch] = useState("")

    const onChangeHandle = (e) => setSearch(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if(search){
            setIsLoading(true)
            fetch(APICALL + "fname=" + search)
            .then((response) => {
                if(response.ok) return response.json()

                else throw new Error("something went wrong")
            })
            .then((results) => {

                setCards(results.data)
                setIsLoading(false)  
                setIsError(false)

            })
            .catch((e) => {
                setIsError(true)
                setIsLoading(false)
            })
        }

        else{
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
    }

    return (
        <header>
            <h1>CARD VISUALIZER</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="Text" 
                    value={search}
                    id="search" 
                    onChange={onChangeHandle}
                    placeholder="Search...">
                </input>
            </form>        
        </header>
    )
}

export default Header