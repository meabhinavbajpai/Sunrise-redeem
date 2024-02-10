export const getToken=()=>{
    return localStorage.getItem('token');

}

export const clearSession=()=>{
    localStorage.removeItem('token');
}

export const setSession=async(accesstoken)=>{
    await localStorage.setItem('token',accesstoken)
}