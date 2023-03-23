import React, { useState } from 'react'
export const IntroPage = () => {
 const [next, setNext]=useState(true);
 const changeState=()=>{
  setNext(!next);
 }
  return (
    <div className='flex '>

    ?( <div id="leftPage">
    <div className="flex text-white page1 ">
        <div className="flex flex-col w-full">
            <div className='h-[10vh] pl-8 pt-8 text-xl'>
               <p className='w-10 cursor-pointer '> SKIP </p>
            </div>


            <div className='h-[90vh] flex flex-col justify-center items-center '>
                
            <p className=' text-3xl text-center w-[60%] leading-10' >Choose your favourite fruits and vegetables in just a click</p>
            <div className='flex mt-16'>
                <div className=' bg-[#4D70FF] w-8 h-2.5 rounded-full'></div>
                <div className='bg-white w-2.5 h-2.5 rounded-full ml-1.5'></div>
            </div>
            <button id="leftBtn" className='mt-8 bg-[#4D70FF] w-1/4 rounded-[20px] py-1'> NEXT </button>  
            </div>
          
        </div>


        <div className="">
            <img className=" h-[100vh] w-[55vw] " src="./introPic1b.png" alt="IntroPic" />
        </div>
    </div>
    </div>):(
    <div id="rightPage">
    <div className="flex text-white page2 -scroll-mx-1.5">
        <div className="flex flex-col w-full">
            <div className='h-[10vh] pl-8 pt-8 text-xl'>
               <p className='w-10 cursor-pointer '> SKIP </p>
            </div>


            <div className='h-[90vh] flex flex-col justify-center items-center '>
                
            <p className=' text-3xl text-center w-[60%] leading-10' >Get all the fruits and vegetables in just one click</p>
            <div className='flex mt-16'>
                <div className=' bg-white w-2.5 h-2.5 rounded-full'></div>
                <div className='bg-[#4D70FF] w-8 h-2.5 rounded-full ml-1.5'></div>
            </div>
            <button id="rightBtn" className='mt-8 bg-[#4D70FF] w-1/4 rounded-[20px] py-1'> PREVIOUS </button>  
            </div>
          
        </div>


        <div className="">
            <img className=" h-[100vh] w-[55vw] " src="./introPic2.png" alt="IntroPic" />
        </div>
    </div>
    </div>)
    </div>
  )
};

