import React, { useState } from 'react'
import "./SingleCard.css"

export const SingleCard = ({card,handleChoise,fliped}) => {


  const handleClick = (e)=>{
    handleChoise(card);
  } 

  return (
    <div className="card">
    <div>
        {fliped? 
        <img className='front' src={card.src}></img> :
        <img className='back' src='img/cover.png' onClick={handleClick}></img>
    }

    </div>
  </div>
  )
}
