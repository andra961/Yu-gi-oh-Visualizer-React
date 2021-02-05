import React from "react"

function Card ({name, card_images, level, type, atk, def, desc}) {

    const spellIcon = "https://ms.yugipedia.com//thumb/0/09/SPELL.svg/1200px-SPELL.svg.png"
    const trapIcon = "https://ms.yugipedia.com//thumb/2/28/TRAP.svg/1200px-TRAP.svg.png"
    const starIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Starball_Red.svg/1200px-Starball_Red.svg.png"

    let cardTypeImg = starIcon

    if (type === "Spell Card") {cardTypeImg = spellIcon}

    else if (type === "Trap Card") {cardTypeImg = trapIcon}

    return (
        <div className="card">
            <img src={card_images[0].image_url}
                alt={name}>
            </img>
            <div className="cardDesc">
                <div className="cardInfo">

                    <h4>{name}</h4>
                    <div className="icon">
                        <span>{level ?
                            level + "x" : ""
                        }</span>
                        <img id="icon" src={cardTypeImg}
                        alt={name}></img>
                    </div>
                </div>
                {atk ? 
                    <div className="stats">
                        <p>ATK: {atk}</p>
                        <p>DEF: {def}</p>
                    </div>
                    : ""
                }
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card