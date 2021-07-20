import React, {useState} from "react"


function Header ({setSearchTerm}) {

    const [search, setSearch] = useState("")

    const onChangeHandle = (e) => setSearch(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(search)
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