import React from 'react'
import "./ProfilePage.css"
import {IoIosArrowForward} from "react-icons/io"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"


const ProfilePage = () => {
  return (
    <div className='container1 w-screen'>
    <div className="profileBox flex ">
    <div className="profileLeft">
                <img src="./ProfileAvatar.png" alt="profileImage" className='profileImage w-[50%] sm:w-[40%] m-auto mt-16 ' />
                <div className="profileName text-center mt-4">
                    <p className='text-2xl text-[#ffffff] font-semibold'>Hi !<br/> John Doe</p>
                    </div>
            </div>
        <div className="profileRight">
            <img src="./profileCover.png" className='profileCover' alt="" />
            <div className="profileText text-center text-[#ffffff] font-semibold mt-16">
                <p className='text-4xl'>My Profile</p>
            </div>
            <div className="inputDetails sm:mt-20 text-center">
                 <div className='profileDetails text-[#595959] mt-4 font-semibold flex justify-between h-10 w-10/12 py-2 px-3 m-auto bg-[#c5c5ff] border rounded-xl'>
                        <a>Phone Number</a>
                        <a>9845454565</a>
                    </div>
                    <div className='profileDetails text-[#595959] mt-4 font-semibold flex justify-between h-10 w-10/12 py-2 px-3 m-auto bg-[#c5c5ff] border rounded-xl'>
                        <a>Email</a>
                        <a>abc@gmail.com</a>
                    </div>
                    <div className='profileDetails text-[#595959] mt-4 font-semibold flex justify-between h-10 w-10/12 py-2 px-3 m-auto bg-[#c5c5ff] border rounded-xl'>
                        <a>Address</a>
                        <a>House no:14,Ashok Road Delhi</a>
                    </div>
                    <div className='profileDetailsIcon rIcons text-[#595959] mt-4 font-semibold flex justify-between h-10 w-10/12 py-2 px-3 m-auto bg-[#c5c5ff] border rounded-xl'>
                        <a>Your Order</a>
                        <a><div>
                            <IoIosArrowForward className="arrowIcon"/>
                            </div>
                        </a>
                    </div>
                    <div className='profileDetailsIcon text-[#595959] mt-4 font-semibold flex justify-between h-10 w-10/12 py-2 px-3 m-auto bg-[#c5c5ff] border rounded-xl'>
                        <a>Exit</a>
                        <a href="/"><div>
                            <IoIosArrowForward/>
                            </div>
                        </a>
                    </div>
                        <div className="logoutText w-6/12  mt-4 m-auto text-right">
                        <a className='text-[#ffffff] hover:underline cursor-pointer'>Log Out</a>
                        </div>
                    <div className="DukaanImage">
                        <img src="./DukaanDaarLogo.png" alt="DukaanDaar Logo" className='m-auto mt-10'/>
                    </div>
                 </div> 
                 <div className="belowIcons flex justify-around mt-16">
                    <div className="homeIcon">
                        <a href="/"><AiOutlineHome className='text-[#6d6d6d] text-3xl'/></a>
                    </div>
                    <div className="cartIcon mb-2">
                        <a href="/cart"><AiOutlineShoppingCart className='text-[#6d6d6d] text-3xl border bg-[#ffffff] rounded-full'/></a>
                        </div>
                    <div className="userIcon">
                        <a href="/profile"><AiOutlineUser className='text-[#4d70ff] text-3xl'/></a>
                        </div>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default ProfilePage