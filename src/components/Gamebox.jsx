import React from 'react'
import "./Gamebox.css";

const Gamebox = ({value,onClick}) => {
  const style = value === "X" ? "box x" :"box o";
  return (
   <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Gamebox;