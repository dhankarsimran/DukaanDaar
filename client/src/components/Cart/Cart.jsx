import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useCart } from '../../context/cart'
import { useAuth } from '../../context/auth'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const removeCartItem = (pid) => {
        try {
          let myCart = [...cart];
          let index = myCart.findIndex((p) => p._id === pid);  
          myCart.splice(index,1);
          setCart(myCart);
          localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <Navbar/>
        <div className="cartContainer text-[#fff] text-lg">
            <h1>
            {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4>
                {cart.length > 1 
                ? `You have ${cart.length} items in your cart 
                ${auth?.token ? "": "Please login to continue"}`
                : `You have ${cart.length} item in your cart`}
            </h4>
            
            <div className="cartItems">
                {cart?.map((p) =>(
                    <div className="cartItem flex">
                        <div className="itemImage ">
                        <img
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                            alt="Shoes"
                            className="sm:min-w-[100px] sm:max-w-[100px] sm:min-h-[100px] sm:max-h-[100px] min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px]"
                        />
                        </div>
                        <div className="itemDetails flex justify-between">
                        <h1>{p.name}</h1>
                        <p className="">{p.description.substring(0, 30)}...</p>
                        <p className=""> $ {p.price}</p>
                        <button className='btn bg-red-500 text-[#fff]'
                         onClick={()=>removeCartItem(p._id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="cartTotal">
                <h1>Total</h1>
                <h1>$ {cart.reduce((acc,curr)=> acc + curr.price,0)}</h1>
                <button className="btn bg-green-500 text-[#fff]"
                onClick={()=>navigate('/checkout')}>Checkout</button>
                
            </div>

        </div>
    </>
  )
}

export default Cart