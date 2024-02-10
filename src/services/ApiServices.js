import * as api from "../request";

export const getVoucherInfo = async (code) => {
    return await api.GetReq(`/check-credence-code/?credence_code=${code}`);
  };
  export const redeemVoucher = async (body) => {
    return await api.PostReq(`/redeem-voucher`,body);
  };