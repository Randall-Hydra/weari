import React from 'react'
import Banner from './Banner';
import "./home.css"

const MainComp = () => {
  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner/>
        </div>
    </div>
  )
}

export default MainComp;