import React from 'react'
import "./SignUpPage.css"
const SignupPage = () => {
  return (
    <div className='container1 w-screen'>
        <div className="signupBox flex sm:flex ">
            <div className="signupLeft ">
                <div className='signupLeftTitle text-center text-[#ffffff] font-semibold mt-4'>
                    <p className='text-4xl signupText'>Signup</p>
                </div>
                <div className="inputDetails sm:mt-20 text-center">
                        <input className="flex h-10 mt-4 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                            type="name"
                            placeholder="Name"></input>
                      {/* <input className="flex h-10 mt-4 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                            type="email"
                            placeholder="Email"></input> */}
                      <input className="flex h-10 mt-10 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50"
                            type="email"
                            placeholder="Email"></input>
                        <input className="flex h-10 mt-10 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50"
                            type="password"
                            placeholder="Password"></input>
                      <input className="flex h-10 mt-10 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50"
                            type="text"
                            placeholder="Address"></input>
                      <input className="flex h-10 mt-10 w-6/12 m-auto border rounded-xl border-[#ffffff] bg-[#ffffff] py-2 px-3 text-md font-medium placeholder:text-[#4d70ff] focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:opacity-50"
                            type="number"
                            placeholder="Phone no."></input>    
                        <button className=" signupBt mt-4 rounded-xl bg-[#4d70ff] px-5 w-4/12 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#6581f2] ">
                            Sign Up
                            </button>
                <div className='SignInGoogle'>
                    <button className="googleBtn inline-flex justify-evenly rounded-xl items-center w-6/12 mt-16 bg-[#ffffff] sm:px-3.5 py-1.5 text-base font-semibold leading-7 text-[#000]">
                        Sign up with Google
                        <img src="./googleLogo.png" alt="google logo" />
                    </button>
                </div>
                <div className="newMember text-center sm:text-left w-[80%]  mt-4 m-auto flex">
                <p class="mt-2 text-base text-gray-600 dark:text-gray-300"> Already a member?</p>
                    <a href="/login"  class="font-medium text-[#5f7fff] transition-all duration-200 hover:underline mt-2 px-2">Login Here
                    </a>
                </div>
            </div> 
              
            </div>
            <div className="signupRight">
                <img src="./loginPic.png" alt="signupImage" className='signupImage w-[50%] sm:w-[70%] m-auto mt-16 ' />
            </div>
        </div>
    </div>
  )
}

export default SignupPage