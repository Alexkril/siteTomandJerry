import { UserType } from '../type/type'
import { UserAri } from '../API/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const FOLLOWiNG_IS_FETCHING = 'FOLLOWiNG_IS_FETCHING'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 30,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    follofingProgres: []

};
export type initialStateUser = typeof initialState

const usersReduser = (state = initialState, action: any): initialStateUser => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersid) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:

            return { ...state, totalUserCount: action.count }

        case TOOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case FOLLOWiNG_IS_FETCHING:
            return {
                ...state,
                //@ts-ignore
                follofingProgres: action.following ? [...state.follofingProgres, action.userid] :
                    [state.follofingProgres.filter(id => id !== action.userid)]



            }
        default:
            return state;
    }
}

export default usersReduser;

export const followSuccsess = (userid: number) => ({ type: FOLLOW, userid })
export const unFollowSuccsess = (userid: number) => ({ type: UNFOLLOW, userid })
export const setUsers = (users: UserType) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount: number) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })
export const toogleIsFetching = (isFetching: boolean) => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching })
type toogleIsFetchingType = {
    type: typeof FOLLOWiNG_IS_FETCHING,
    following: boolean
    userid: number
}
export const followingIsFetching = (following: boolean, userid: number): toogleIsFetchingType =>
    ({ type: FOLLOWiNG_IS_FETCHING, following, userid })

export const getUserThunkCreetor = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {
        console.log('data', 1)
        dispatch(toogleIsFetching(true))
        //@ts-ignore
        UserAri.setUserApi(currentPage, pageSize).then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });

    }
}

export const getUserPostChangetThunkCreetor = (pageNomber: number, pageSize: number) => (dispatch: any) => {
    dispatch(setCurrentPage(pageNomber))
    dispatch(toogleIsFetching(true))
    UserAri.setUserApi(pageNomber, pageSize)
        .then((data: any) => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}

export const follow = (userid: number) => (dispatch: any) => {
    dispatch(followingIsFetching(true, userid))
    UserAri.followUsreApi(userid)
        .then((response: any) => {
            if (response.data.resultCode === 0) { dispatch(unFollowSuccsess(userid)) }
            dispatch(followingIsFetching(false, userid))
        })
}
export const unFollow = (userid: number) => (dispatch: any) => {
    dispatch(followingIsFetching(true, userid))
    UserAri.unFollowUsreApi(userid)

        .then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccsess(userid))
            }
            dispatch(followingIsFetching(false, userid))
        })
}