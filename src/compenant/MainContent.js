import React from 'react'
import "./Main.css"

const MainContent = ({NamePage, Desagner}) => {
  return (
    <main>
    {NamePage}
    
    <br />
     designer by {Desagner}
  </main>
  )
}

export default MainContent