import React, {useState} from "react"

import APICALL from "./api"

function Header ({setCards}) {

    const [search, setSearch] = useState("")

    const onChangeHandle = (e) => setSearch(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if(search){
            fetch(APICALL + "fname=" + search)
            .then((response) => response.json())
            .then((results) => {
                setCards(results.data)  
            })
        }

        else{
            fetch(APICALL)
            .then((response) => response.json())
            .then((results) => {
                setCards(results.data.slice(0,100))   
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