import * as axios from "axios";




//@ts-ignore
const instanse = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': ' f7fadd9b-3e43-4308-9c60-85f68b8fa3a4' }

})

export const FindUserApi = {
    setUserFapi(currentPage: number, pageSizeF: number) {

        return instanse.get(`users?page=${currentPage}&count=${pageSizeF}`,
            //@ts-ignore
        ).then(response => response.data)
    }
}

export const UserAri = {
    setUserApi(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage} &count=${pageSize}`)
            //@ts-ignore
            .then(response => response.data)
    }
}
export const dialogApi = {
    setDialogApi() {
        return instanse.get(`profile/2`).
            //@ts-ignore
            then(response => response.data)
    }
}