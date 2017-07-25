// import Packages
import React from 'react'

// import Components
import Header from './Header'

const LayOut =({children})=>{
  return(
    <section id='LayOut'>
      <Header />
      <div class='container'>
        {children}
      </div>
    </section>
  )
}

export default LayOut
