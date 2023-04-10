import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import {FaShoppingCart} from "react-icons/fa";
import {TbSearch} from "react-icons/tb";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  const [display,setDisplay]=useState(false);
  const onHamClick =()=>{
 setDisplay(!display);
  }
  return (
    <>
    {!auth.user ?(
        <div>
        <nav className=" relative px-8 py-4 flex  justify-between items-center ">
          <a
            className=" flex justify-around "
            href="#"
          >
            
              <img  className="w-1/3" src="logo.png" alt="logo" />
            <div className="flex flex-col ">
            <p className="text-white text-2xl font-bold tracking-wide">
              Dukaan
            </p>
            <p className="text-white text-xl font-semibold tracking-wide">
              Daar
            </p></div>
          </a>
          <div className="md:hidden">
            <button onClick={onHamClick} className="navbar-burger flex items-center text-white p-3">
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex md:items-center md:justify-end grow mr-4">
            <li>
              <NavLink
                className="text-white text-xl font-medium px-4 py-2 mr-8"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-xl font-medium px-4 py-2 mr-8"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-white text-xl font-medium px-4 py-2 mr-8"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
         
        </nav>
        {/* phone */}
    { display &&   <nav className="block md:hidden absolute bg-[#070d23] bg-opacity-90 w-full text-white">
          <ul className="flex flex-col items-center py-4">
          <li className="my-4 w-full text-center hover:text-[grey]" > 
              <NavLink
                className="text-white text-xl font-normal py-2"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="my-4 w-full text-center">
              <NavLink
                className="text-white text-xl font-normal  py-2"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </li>
            <li className="my-4 w-full text-center">
              <NavLink
                className="text-white text-xl font-normal py-2"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>}

      </div>
    ) :(
      <>
      {auth?.user?.name &&
      <div>
      <nav className="relative px-8 py-4 flex justify-between items-center ">
        <a
          className=" flex justify-around "
          href="#"
        >
          
            <img  className="w-1/3" src="logo.png" alt="logo" />
          <div className="flex flex-col ">
          <p className="text-white text-2xl font-bold tracking-wide">
            Dukaan
          </p>
          <p className="text-white text-xl font-semibold tracking-wide">
            Daar
          </p></div>
        </a>
        <div className="md:hidden">
          <button onClick={onHamClick} className="navbar-burger flex items-center text-white p-3">
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex md:items-center md:justify-end grow mr-4">
          <li>
            <NavLink
              className="text-white text-xl font-medium px-4 py-2 mr-8"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white text-xl font-medium px-4 py-2 mr-8"
              to={`/dashboard/${auth?.user?.role === 1 ? 'admin':'user'}`}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
          <NavLink to="/login">
              <button
                onClick={handleLogOut}
                className="text-white text-xl font-medium px-4 py-2 mr-8"
                type="submit"
              >
                Logout
              </button>
            </NavLink>
          </li>
          <li>
          <NavLink to="#">
              <button
                className="text-white text-xl font-medium px-4 py-2 bg-[#4d70ff] hover:bg-[#6581f2] rounded-xl"
                type="submit"
              >
                <div className="flex items-center"><p className="pr-2">Cart</p> 
                <FaShoppingCart/></div>
                
              </button>
            </NavLink>
          </li>
        </ul>
       
      </nav>
             {/* phone */}
    { display &&   <nav className="block md:hidden absolute bg-[#070d23] bg-opacity-90 w-full text-white">
          <ul className="flex flex-col items-center py-4">
          <li className="my-4 w-full text-center hover:text-[grey]" > 
              <NavLink
                className="text-white text-xl font-normal py-2"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="my-4 w-full text-center">
              <NavLink
                className="text-white text-xl font-normal  py-2"
                to={`/dashboard/${auth?.user?.role === 1 ? 'admin':'user'}`}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="my-4 w-full text-center">
              <NavLink
                className="text-white text-xl font-normal py-2"
                to="/login"
              >
                   <button
                onClick={handleLogOut}
                type="submit"
              >
                Logout
              </button>
              </NavLink>
            </li>
            <li>
          <NavLink to="#">
              <button
                className="text-white text-xl font-medium px-4 py-2 bg-[#4d70ff] hover:bg-[#6581f2] rounded-xl"
                type="submit"
              >
                <div className="flex items-center"><p className="pr-2">Cart</p> 
                <FaShoppingCart/></div>
                
              </button>
            </NavLink>
          </li>
          </ul>
        </nav>}
    </div>}
    </>
    ) }

{/* Search */}
      <div className="w-[50%] mt-8 flex items-center justify-center m-auto">
       
          <input
            type="text"
            className=" w-full py-2 pl-4 pr-4 text-md font-semibold placeholder-[#4d70ff]  bg-gray-100 dark:bg-gray-800 rounded-l-xl focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="What are you looking for?" />
            <div className="py-3 px-5 bg-[#4d70ff] rounded-r-xl hover:cursor-pointer hover:bg-[#6581f2]"><TbSearch  style={{color: "white", backgroundColor:"#4d70ff"}}/></div>
        </div>
    </>
  );
};

export default HomePage;
