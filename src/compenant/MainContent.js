import React from 'react'

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