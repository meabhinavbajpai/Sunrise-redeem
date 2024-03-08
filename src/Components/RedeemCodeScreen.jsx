import React from 'react'
import redeemImg from "../assets/howtoredeem.png"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";

import { useState } from "react";
import { setData } from '../redux/reducers/voucherSlice';
import { getVoucherInfo } from '../services/ApiServices';

function RedeemCodeScreen() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [loading,setIsLoading]=useState(false)
  const validationSchema = Yup.object({
    code: Yup.string()
      .required('Code is required')
      .test('is-16-characters', 'Code must be  16 characters', (value) => {
        return value && value.length === 16;
      }),
  });
  

  const formik = useFormik({
    initialValues: {
      code: "",
     
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  });

  const handleSubmit=async(values)=>{
    setIsLoading(true)
    try {
      let response=await getVoucherInfo(values?.code)
      if(response?.status==200){
        setIsLoading(false)
      navigate("/products")
      dispatch(setData({data:response?.data,
       code:values?.code
      }))

      }else{
setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
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
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.code}
    />

    {formik.touched.code && formik.errors.code ? (
      <div className="text-red-500 mt-2 text-center">{formik.errors.code}</div>
    ) : null}
  </div>
</div>

      <div className="flex justify-center  flex-col items-center">
        <button
            onClick={() => formik.handleSubmit()}
        
          className=" bg-custom text-white font-medium text-xl px-10 py-3 rounded outline-none focus:outline-none"
        >
          Redeem
        </button>
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