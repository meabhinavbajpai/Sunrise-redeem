import React, { useState } from "react";
import demoImg from "../assets/demopro.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/reducers/singleProductSlice";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let products = useSelector((state) => state?.vouchers?.data?.data);
  let code = useSelector((state) => state?.vouchers?.data?.code);
  const [filterProduct, setFilterProduct] = useState(products?.data);

  const handleSearch = (searchQuery) => {
    const filteredProducts = products?.data?.filter((product) =>
      product?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilterProduct(filteredProducts);
  };

  return (
    <div className="flex justify-center mt-20 my-20 flex-col items-center">
      <h2 className="md:text-2xl font-extrabold text-xl">
        Choose a voucher | Amount - ₹{products?.amount}
      </h2>

      <div className="w-full flex items-baseline justify-evenly">
        <div class="flex items-center w-2/3 mt-5  justify-center  flex-col">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
            <input
              type="text"
              id="search-by-name"
              class="py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by keywords"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* {
        sort=="ASC"?
      <img src={sortIcon} style={{backgroundColor:"black", height:"25px", width:"25px"}} onClick={sortDescending}/>:
      <img src={sortIcon1} style={{backgroundColor:"black", height:"25px", width:"25px"}} onClick={sortAscending}/>

      } */}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        {filterProduct?.length !== 0 ? (
          <>
            {filterProduct?.map((data, index) => {
              return (
                <div
                  class="w-full max-w-sm bg-gray-50 border border-gray-200 rounded  dark:bg-gray-800 dark:border-gray-700
        cursor-pointer   
        hover:shadow-lg
        transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
  
        "
                  onClick={() => {
                    dispatch(
                      setProduct({
                        data: data,
                        amount: products?.amount,
                        code: code,
                      })
                    );
                    navigate("/checkout");
                  }}
                >
                  <img
                    className="rounded h-36"
                    src={"https://cr-code.credencerewards.com"+data?.logo}
                    alt="product"
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <span className="mx-auto">No Data Found!</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
