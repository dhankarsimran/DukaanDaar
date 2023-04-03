import React, { useState } from 'react'
import {Link } from "react-router-dom";
export const IntroPage = () => {
 const [next, setNext]=useState(true);
 const changeState=()=>{
  setNext(!next);
 }
  return (
    <div>

   { next ? (
    <div className="flex flex-col text-white sm:flex-row page1">

        <div> 
            <img className="block w-full sm:hidden" src="./PhIntroPic1.png" alt="IntroPic" />
        </div>

        <div className="flex flex-col w-full ">
            <div className='h-[10vh] pl-8 pt-8 text-xl hidden sm:block '>
              <Link to="/"><p className='w-10 cursor-pointer '> SKIP </p></Link> 
            </div>


            <div className='sm:h-[90vh] flex flex-col justify-center items-center '>
                
            <p className=' mt-14 text-3xl text-center w-[60%] leading-10' >Choose your favourite fruits and vegetables in just a click</p>
            <div className='flex mt-10 sm:mt-16'>
                <div className=' bg-[#4D70FF] w-8 h-2.5 rounded-full'></div>
                <div className='bg-white w-2.5 h-2.5 rounded-full ml-1.5'></div>
            </div>
            <button onClick={changeState} id="leftBtn" className=' mt-14 sm:mt-8 bg-[#4D70FF] w-1/2 sm:w-1/4 rounded-[20px] py-2 sm:py-1'> NEXT </button> 
            <Link to="/"><p className='block w-10 text-xl cursor-pointer pt-7 mb-7 sm:hidden'> SKIP </p></Link> 
            </div>
          
          
        </div>


        <div>
            <img className=" h-[100vh] w-[55vw] hidden sm:block  " src="./introPic1b.png" alt="IntroPic" />
        </div>
    </div>
    ):(
      <div className="flex flex-col text-white sm:flex-row sm:justify-between page2">

      <div> 
          <img className="block w-full sm:hidden" src="./PhIntroPic2.png" alt="IntroPic" />
      </div>

      <div className="flex flex-col w-full ">
          <div className='h-[10vh] pl-8 pt-8 text-xl hidden sm:block '>
            <Link to="/"><p className='w-10 cursor-pointer '> SKIP </p></Link> 
          </div>


          <div className='sm:h-[90vh] flex flex-col justify-center items-center '>
              
          <p className=' mt-14 text-3xl text-center w-[60%] leading-10' >Get all the fruits and vegetables in just one click</p>
          <div className='flex mt-10 sm:mt-16'>
              <div className=' bg-white w-2.5 h-2.5 rounded-full'></div>
              <div className='bg-[#4D70FF] w-8 h-2.5 rounded-full ml-1.5'></div>
          </div>
          <button onClick={changeState} id="leftBtn" className=' mt-14 sm:mt-8 bg-[#4D70FF] w-1/2 sm:w-1/4 rounded-[20px] py-2 sm:py-1'> PREVIOUS </button> 
          <Link to="/"><p className='block w-10 text-xl cursor-pointer pt-7 mb-7 sm:hidden'> SKIP </p></Link> 
          </div>
        
        
      </div>


      <div>
          <img className="  h-[100vh] w-[55vw] hidden sm:block  " src="./introPic2.png" alt="IntroPic" />
      </div>
  </div>
  )}
    </div>
  )
};

