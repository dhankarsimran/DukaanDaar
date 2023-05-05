import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { FaShoppingCart, FaSpinner } from "react-icons/fa"; 
import { Prices } from "../Prices";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import Navbar from "../Navbar/Navbar";
import { useCart } from "../../context/cart";
import { toast } from "react-hot-toast";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //get products
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  const [display, setDisplay] = useState(false);
  const onHamClick = () => {
    setDisplay(!display);
  };
  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
      console.log(products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
      if (page === 1) return;
      loadMore();
    }, [page]);


  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next-line
    }, [checked.length, radio.length]
    );

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
    }, [checked, radio]
    );

  //get filtered product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      
      <Navbar/>

      {/* Search */}
      <SearchInput />

      {/* main data */}

      <div className="text-[#fff] text-center flex flex-col-reverse sm:flex-row sm:flex ">
        <div className="ml-5">
          {/* filter by category */}
          <h1 className="m-3 mt-10 text-xl font-semibold">
            Filter By Category
          </h1>
          <div className="flex flex-col items-center">
            {categories?.map((c) => (
              <Checkbox
                className="w-[65%] my-1 text-white"
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* filter by price */}
          <h1 className="m-3 mt-10 text-xl font-semibold">Filter By Price</h1>
          <div className="flex flex-col items-center">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio className="w-full my-1 text-white" value={p.array}>
                    {p.name}
                  </Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="mt-5">
            <button
              className="p-2 px-3 font-semibold btn-primary rounded-3xl"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="lg:ml-16 p-10 font-semibold sm:w-[65%] text-large">
          <h1 className="pb-8 text-3xl font-semibold ">All Products</h1>
          <div className="flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-4 lg:grid lg:grid-cols-3 lg:gap-10">
            {products?.map((p) => (
              <div className="lg:max-w-[17vw] lg:min-w-[17vw]  lg:max-h-fit lg:min-h-fit sm:max-w-[24vw] sm:min-w-[24vw]  sm:max-h-fit sm:min-h-fit max-w-[60vw] min-w-[60vw]  max-h-fit min-h-fit m-3 text-black  card bg-base-100 border-4 shadow-[0_3px_6px_6px_rgba(16,185,129,0.5)] border-emerald-400">
                <div className="flex justify-center mt-2 ">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    alt="Shoes"
                    className="sm:min-w-[100px] sm:max-w-[100px] sm:min-h-[100px] sm:max-h-[100px] min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px]"
                  />
                </div>
                <div className="card-body">
                  <h2 className="m-0 -mt-1 sm:mt-0 card-title">{p.name}</h2>
                  <p className="">{p.description.substring(0, 10)}...</p>
                  <p className=""> $ {p.price}</p>
                  <button
                    className="p-2 sm:p-1 rounded-3xl btn-primary"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button className="p-2 sm:p-1 btn-secondary rounded-3xl" onClick={()=>{
                    setCart([...cart,p]);
                    localStorage.setItem("cart",JSON.stringify([...cart,p]));
                    toast.success("item added to cart")
                  }}>
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 m-2">
            {products && products.length < total && (
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? <FaSpinner /> : "Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
