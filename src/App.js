import React, {useState, useEffect}  from "react"

import Card from "./Card"

import Header from "./Header"

import Error from "./Error"

import Spinner from "./spinner"

import API from "./api"

function App() {

  const [searchTerm,setSearchTerm] = useState("")
  const [cards,setCards] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)

  useEffect(() => {

    const loadCards = async () => {
      setIsLoading(true)
      setIsError(false)
      try{

        const result = await API.loadCards(searchTerm)
        setCards(result)
      }
      catch (error){
        setIsError(true)
      }

      setIsLoading(false)
    }  

    loadCards()

  },[searchTerm])



  return (
    <div className="App">
      
      <Header setSearchTerm = {setSearchTerm} />

      {!isLoading && !isError &&
       (<div className="container"> 
          <div className = "cards-container">
            {cards.map((card) => {
                return (
                  <Card key={card.id} {...card}></Card>
                )
              })
            }
          </div>
        </div>)

        
      }

      {isError && <Error />}

      {isLoading && <Spinner/>}
    </div>
  )
}

export default App;
