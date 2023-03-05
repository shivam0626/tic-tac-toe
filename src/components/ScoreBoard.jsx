import React from 'react'
import "./ScoreBoard.css"

const ScoreBoard = ({scores,xPlayer}) => {
    const {xScore,oScore} = scores;

  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlayer && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlayer && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}

export default ScoreBoard