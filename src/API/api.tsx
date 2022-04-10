import * as axios from "axios";

 
export const setUserFapi =(currentPage:number, pageSizeF:number)=>{ 
    //@ts-ignore
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
    ${currentPage}&count=${pageSizeF}`,
        {
            withCredentials: true
        }
        //@ts-ignore
        ).then(response => response.data)
           
          
    }
    
    