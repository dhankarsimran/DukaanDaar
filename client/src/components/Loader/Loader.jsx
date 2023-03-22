import React from 'react'
import "./Loader.css"
const Loader = () => {
  return (
    <div className='loaderMain text-[#fff]'>
        <img src="./loaderBg.png" className='loaderImage' alt="" />
        <img src="./DukaanDaarLogo.png" alt="DDLogo" className='loaderDDLogo' />
    </div>
  )
}

export default Loader