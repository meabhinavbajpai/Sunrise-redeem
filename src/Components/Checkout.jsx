import React from "react";
import card from "../assets/demopro.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { redeemVoucher } from "../services/ApiServices";
import { setData } from "../redux/reducers/congratulationSlice";
import showNotification from "../services/NotificationService";
import { restrictAlpha } from "../constant";
import { resetData } from "../redux/reducers/voucherSlice";
import { resetProductData } from "../redux/reducers/singleProductSlice";

function Checkout() {
  const productDetail = useSelector((state) => state?.productDetail?.data);
  const amount = useSelector((state) => state?.productDetail?.amount);
  const code = useSelector((state) => state?.productDetail?.code);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile is required"),

    accept: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      accept: false,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = async (values) => {
    let body = {
      credence_code: code,
      provider_id: productDetail?.id,
      name: values?.name,
      email: values?.email,
      mobile_no: values?.mobile,
    };
    try {
      let response = await redeemVoucher(body);
      if (response?.status == 200) {
        navigate("/congratulation");
        dispatch(
          setData({
            data: response?.data,
            image: productDetail?.image,
          })
        );
        dispatch(resetData())
        dispatch(resetProductData())
        showNotification("success", response?.data?.message);
      } else {
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="mt-12">
        <h2 className="text-center text-2xl font-semibold">Congratulation🌟</h2>
        <p className="text-base text-center">
          Please fill in the below information to receive your Rs {amount}{" "}
          voucher{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-14 mt-20">
        <div>
          <img
            className="rounded-lg w-96 scale-75"
            src={"https://cr-code.credencerewards.com"+productDetail?.image}
            alt=""
          />
        </div>
        <form className="w-72 sm:w-[29rem]" action="">
          <div className="flex flex-col mb-4 items-start">
            <label className="font-semibold text-base" htmlFor="">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="outline-none border p-1.5 rounded-md w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="flex flex-col mb-4 items-start">
            <label className="font-semibold text-base" htmlFor="">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="outline-none border p-1.5 rounded-md w-full"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mb-2">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col  items-start">
            <label className="font-semibold text-base" htmlFor="">
              Phone Number
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyPress={restrictAlpha}
              value={formik.values.mobile}
              name="mobile"
              className="outline-none border p-1.5 rounded-md w-full"
              
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <div className="text-red-500 mb-2">{formik.errors.mobile}</div>
            ) : null}
          </div>
          <div className="flex justify-start mt-3">
            <input
              className="p-1.5"
              type="checkbox"
              name="accept"
              id=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.accept}
            />
            <span className="text-sm px-1.5 font-medium">
              I agree to the term and conditions
            </span>
          </div>
          {formik.touched.accept && formik.errors.accept ? (
          <div className="text-red-500">{formik.errors.accept}</div>
        ) : null}
          <div className="bg-[#FEDA43]/15 text-xs p-1 mt-5">
            Your Information is safe with us. We will not share your data with
            any third party.
          </div>
          <div className="flex justify-end mt-5">
            <button
              type="button"
              className="bg-[#801423] p-2.5 text-white"
              onClick={formik.handleSubmit}
            >
              Procced
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
