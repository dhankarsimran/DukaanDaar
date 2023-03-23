import React,{useState} from 'react'
import LoginPage from '../LoginPage/LoginPage';

const HomePage = () => {
  const[userIn,setUserIn]=useState(false);
  return (
    <>
    {userIn ?(    
    <div className='text-[#fff]'>HomePage</div>
      ):(
      <LoginPage/>
      )}
    </>
  )
}

export default HomePage