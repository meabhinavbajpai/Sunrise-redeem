import React from 'react'
import card from "../assets/demopro.png"
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const  navigate=useNavigate()
  return (
    <div>
    <div className="mt-12">
      <h2 className="text-center text-2xl font-semibold">Congratulation🌟</h2>
      <p className="text-base text-center">
        Please fill in the below information to receive your Rs 100 voucher{" "}
      </p>
    </div>
    <div className="flex justify-center items-start gap-14 mt-20">
      <div>
        <img className="rounded-lg w-96 scale-75" src={card} alt="" />
      </div>
      <form className="w-[29rem]" action="">
        <div className="flex flex-col mb-4 items-start">
          <label className="font-semibold text-base" htmlFor="">
            Name
          </label>
          <input
            type="text"
            className="outline-none border p-1.5 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col mb-4 items-start">
          <label className="font-semibold text-base" htmlFor="">
            Email
          </label>
          <input
            type="text"
            className="outline-none border p-1.5 rounded-md w-full"
          />
        </div>
        <div className="flex flex-col  items-start">
          <label className="font-semibold text-base" htmlFor="">
            Phone Number
          </label>
          <input
            type="text"
            className="outline-none border p-1.5 rounded-md w-full"
          />
        </div>
        <div className="flex justify-start mt-3">
          <input className="p-1.5" type="checkbox" name="" id="" />
          <span className="text-sm px-1.5 font-medium">
            I agree to the term and conditions
          </span>
        </div>
      <div className="bg-[#FEDA43]/15 text-xs p-1 mt-5">Your Information is safe with us. We will not share your data with any third party.</div>
       <div className="flex justify-end mt-5">
          <button type="button" className="bg-[#801423] p-2.5 text-white" onClick={()=>navigate("/congratulation")}>Procced</button>
       </div>
      </form>
    </div>
  </div>
  )
}

export default Checkout