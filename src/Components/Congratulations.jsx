import React from 'react'
import card from "../assets/demopro.png"
import { useSelector } from 'react-redux'


function Congratulations() {
  const details=useSelector((state)=>state?.finalDetail?.data?.data)
  const image=useSelector((state)=>state?.finalDetail?.image)
  return (
    <div>
    <div className="mt-12">
      <h2 className="text-center text-2xl font-bold">Congratulation🌟</h2>
      <p className="text-lg text-gray-500 text-center ">
        Your voucher Details
      </p>
      <div className="flex justify-center mt-5">
        <img className="w-72 rounded-md"  src={"https://cr-code.credencerewards.com"+image} alt="" />
      </div>
      <div className="mt-5 flex flex-col items-center">
        <h2 className="text-base ">Order Details</h2>
        <table className="mt-6 w-full sm:w-auto">
  <thead>
    <tr>
      <th className="p-1.5 px-2 sm:px-16 bg-slate-100 border font-semibold">
        Code
      </th>
      <th className="p-1.5 px-2 sm:px-16 bg-slate-100 border font-semibold">
        Pin
      </th>
      <th className="p-1.5 px-2 sm:px-16 bg-slate-100 border font-semibold">
        Expiry
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-1.5 px-2 sm:px-6 border">{details?.voucher?.code}</td>
      <td className="p-1.5 px-2 sm:px-6 border">{details?.voucher?.pin}</td>
      <td className="p-1.5 px-2 sm:px-6 border">{details?.voucher?.expiry}</td>
    </tr>
  </tbody>
</table>

        <div className="mt-5 text-center">Voucher Sent on Email and SMS</div>
        <div className="font-medium text-center text-base text-slate-400">Need help email us at <span className='text-custom'>support@credancerewards.com</span> </div>
      </div>
    </div>
   
  </div>
  )
}

export default Congratulations