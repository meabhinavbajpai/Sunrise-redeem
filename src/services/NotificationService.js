import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const showNotification=(type,message)=>{

    switch(type){
        case "success":
            toast.success(message,{
                position:"top-right",
            });
            break;
        
        case "danger":
            toast.error(message,{
                position:"top-right",
                
            });
            break;
           
        case "default":
            toast(message,{
                position:"top-right",
                
            });
            break;

        default:
            break;    
    }

}


export default showNotification;
 