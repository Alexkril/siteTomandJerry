import { authAPI } from './../API/api';
import { PhotosType } from '../type/type'

let SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as String | null,
    isAuhs: false,


}

export type initialStateType = typeof initialState

let authReduser = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            
            return {
                ...state,
                ...action.payload,
                isAuhs: true
            }
        default: return state
    }
}

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    payload: { id: number, email: string, login: string, isAuhs: boolean }
}
export let setUserData = (id: number, email: string, login: string, isAuhs: boolean): SetUserDataType =>
    ({ type: SET_USER_DATA, payload: { id, email, login, isAuhs } })

export default authReduser

// export const getAuthThunkCreetor = () =>{ 
//     return (dispatch: any) => {
//        return  authAPI.setAuth()
//        //@ts-ignore
//            .then(data => {if (data.resultCode === 0) {
//                //@ts-ignore
//                    let { id, email, login } = data.data  
//                    //@ts-ignore
//                    dispatch(setUserData(id, email, login))
                  
//                }
//            })
// }
// }