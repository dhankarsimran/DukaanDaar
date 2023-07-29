import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../../context/auth";
import Navbar from "../Navbar/Navbar";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;
const AllOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`,
        { status: value }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="text-[#fff] text-center">
        <h1 className="dashBoardTitle font-bold text-2xl mt-10">
          Admin Dashboard
        </h1>
        <div className="dashboardContent flex">
          <div className="dashmenu p-10">
            <AdminMenu />
          </div>
          {/* <div className="usersContent p-10 font-semibold text-large w-full">
            <h1>All Orders</h1>
            <div className="table m-auto w-full">
              <table className="table w-[30%] sm:w-full m-auto ">
                <thead className="">
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Buyer</th>
                    <th>Date</th>
                    <th>Payment</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((o, i) => {
                    return (
                      <>
                        <tr>
                          <td className="bg-white text-black">{i + 1}</td>
                          <td className="bg-white text-black">
                            <Select bordered={false}
                             onChange={(value)=> handleChange(o._id,value)} defaultValue={o?.status}>
                                    {status.map((s,i)=>(
                                        <Option key={i} value={s}>{s}</Option>
                                    ))}
                            </Select>
                          </td>
                          <td className="bg-white text-black">{o?.buyer?.name}</td>
                          <td className="bg-white text-black">{moment(o?.createAt).fromNow()}</td>
                          <td className="bg-white text-black">{o?.payment?.success ? "Success" : "Failed"}</td>
                          <td className="bg-white text-black">{o?.products?.length}</td>
                        </tr>
                        <div className="container w-full">
                          {o?.products?.map((p, i) => (
                            <div className="cartItem bg-[#c5c5ff] p-2 pt-3 mt-3 rounded-2xl ml-4 mr-4 w-[100%]">
                              <div className="cartItemBox flex justify-around">
                                <div className="itemImage w-[50%]  ">
                                  <img
                                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                    alt="Shoes"
                                    className="md:min-w-[100px] md:max-w-[100px] md:min-h-[100px] md:max-h-[100px]
                            min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px]"
                                  />
                                </div>
                                <div className="itemDetails text-[black] w-[50%]">
                                  <h1>{p.name}</h1>
                                  <h3 className="mt-[-10px]"> ₹ {p.price}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div> */}

          <div class="overflow-auto rounded-lg shadow hidden md:block w-full">
            <table class="w-full">
              <thead class=" border-b-2 border-gray-200">
                <tr>
                  <th class="p-3 w-20 text-sm font-semibold tracking-wide  text-center">
                    #
                  </th>
                  <th class="p-3 w-20 text-sm font-semibold tracking-wide  text-center">
                    Status
                  </th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Buyer
                  </th>
                  <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                    Date
                  </th>
                  <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                    Payment
                  </th>
                  <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">

              {orders?.map((o, i) => {
                    return (
                      <>
                <tr class="bg-white">
                  <td class="p-3 text-sm text-gray-700 text-left">
                  {i+1}
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <Select bordered={false}
                             onChange={(value)=> handleChange(o._id,value)} defaultValue={o?.status}>
                                    {status.map((s,i)=>(
                                        <Option key={i} value={s}>{s}</Option>
                                    ))}
                            </Select>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    {o?.buyer?.name}
                    </span>
                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {moment(o?.createAt).fromNow()}                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {o?.payment?.success ? "Success" : "Failed"}                  </td>
                  <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {o?.products?.length}                  </td>
                </tr>
                <div className="container w-full flex">
                          {o?.products?.map((p, i) => (
                            <div className="cartItem bg-[#c5c5ff] p-2 pt-3 mt-3 rounded-2xl ml-4 mr-4 w-[100%]">
                              <div className="cartItemBox flex justify-around">
                                <div className="itemImage w-[50%]  ">
                                  <img
                                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                    alt="Shoes"
                                    className="md:min-w-[100px] md:max-w-[100px] md:min-h-[100px] md:max-h-[100px]
                            min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px]"
                                  />
                                </div>
                                <div className="itemDetails text-[black] w-[50%]">
                                  <h1>{p.name}</h1>
                                  <h3 className="mt-[-10px]"> ₹ {p.price}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>)})}




                


              </tbody>
            </table>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1000
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Delivered
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1001
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                    Shipped
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
            <div class="bg-white space-y-3 p-4 rounded-lg shadow">
              <div class="flex items-center space-x-2 text-sm">
                <div>
                  <a href="#" class="text-blue-500 font-bold hover:underline">
                    #1002
                  </a>
                </div>
                <div class="text-gray-500">10/10/2021</div>
                <div>
                  <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                    Canceled
                  </span>
                </div>
              </div>
              <div class="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div class="text-sm font-medium text-black">$200.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
