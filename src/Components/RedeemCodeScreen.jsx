import React from 'react'
import redeemImg from "../assets/howtoredeem.png"
import { Link } from 'react-router-dom'

function RedeemCodeScreen() {
  return (
    <>
          <div className="flex justify-center flex-col items-center mt-20">
  <h2 className="md:text-2xl font-extrabold text-xl">
    Enter code to redeem your voucher
  </h2>

  <div className="my-10 w-2/3 flex flex-col items-center">
    <input
      type="text"
      name="code"
      maxLength={16}
      id=""
      className={`border border-b 
      w-2/3 md:w-2/3 lg:w-1/4 xl:w-1/3
      h-12 placeholder:text-gray-400 
      placeholder:text-center text-center
      border-gray-400`}
      placeholder="Enter your code"
 
    />

    {/* {formik.touched.code && formik.errors.code ? (
      <div className="text-red-500 mt-2 text-center">{formik.errors.code}</div>
    ) : null} */}
  </div>
</div>

      <div className="flex justify-center  flex-col items-center">
        <Link
          to="/products"
        
          className=" bg-custom text-white font-medium text-xl px-10 py-3 rounded outline-none focus:outline-none"
        >
          Redeem
        </Link>
      </div>

      <div className="flex justify-center mt-20 flex-col items-center">
    
        <div className="py-2">
          <h6 className="font-bold text-center text-2xl">How to redeem?</h6>
        <img src={redeemImg}/>
          <div className=" list-item-line-bottom"></div>
        </div>

    
      </div>
    </>
  )
}

export default RedeemCodeScreen