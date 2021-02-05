import React, {useState, useEffect}  from "react"

import Card from "./Card"

import Header from "./Header"

import Error from "./Error"

import APICALL from "./api"

function App() {


  const [cards,setCards] = useState([])

  useEffect(() => {
    fetch(APICALL)
    .then((response) => response.json())
    .then((results) => {
      setCards(results.data.slice(0,100))
    })
  },[])



  return (
    <div className="App">
      
      <Header setCards={setCards}></Header>

      <div className = "cards-container">
        {cards ?
          cards.map((card) => {
            return (
              <Card key={card.id} {...card}></Card>
            )
          })

          : <Error></Error>
        }
      </div>

    </div>
  );
}

export default App;
