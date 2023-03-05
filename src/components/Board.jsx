import React from 'react'
import Gamebox from './Gamebox'
import "./Board.css";

const Board = ({board,onClick}) => {
  return (
    <div className='board'>
        {
            board.map((value,ind)=>{
                return  <Gamebox value={value} onClick={()=> value === null && onClick(ind)} /> 
            })
        }
       
    </div>
  )
}

export default Board
