import React, {useState, useEffect}  from "react"

import Card from "./Card"

import Header from "./Header"

import Error from "./Error"

import Spinner from "./spinner"

import APICALL from "./api"

function App() {


  const [isLoading,setIsLoading] = useState(false)
  const [cards,setCards] = useState([])
  const [isError,setIsError] = useState(false)

  useEffect(() => {
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
  },[])



  return (
    <div className="App">
      
      <Header 
        setCards={setCards} 
        setIsLoading={setIsLoading} 
        setIsError={setIsError} />

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
