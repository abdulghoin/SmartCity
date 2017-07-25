// import Packages
import React from 'react'
import {IndexLink} from 'react-router'

const Header =(props)=>{
  return(
    <nav class='navbar fixed-top'>
      <div class='container'>
        <div class='header'>
          <div>
            <IndexLink
              to='/'
              class='brand'
            >
              SmartCity
            </IndexLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
