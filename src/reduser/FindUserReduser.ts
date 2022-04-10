import { UserType } from '../type/type'

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERSF = 'SET_USERSF';
let SET_CURRENT_PAGE_F = 'SET_CURRENT_PAGE_F';
let TOOGLEFETCHING = 'TOOGLEFETCHING'




let initialState = {
    users: [
    ] as Array<UserType>,
    totalUserCoundF: 0,
    pageSizeF: 10,
    totalCoundF: 5,
    currentPageF: 1,
    isFetchingF: true

}
type initialStateFindUserType = typeof initialState

let FindeReduser = (state = initialState, action: any): initialStateFindUserType => {

    switch (action.type) {
        case FOLLOW:
           
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userid) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }

        case SET_USERSF:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE_F:

            return (
                { ...state, currentPageF: action.currentPageF }
            )
        case TOOGLEFETCHING: return {
            ...state, isFetchingF: action.isFetchingF
        }


        default:
            return state
    }
}

type ActionFindUsersTypes =  FollowActionType |setUsersFActionType |UnFollowActionType
    | SetCurrentPageFActionType | ToogleFetchingActionType

export type setUsersFActionType = {
    type: typeof SET_USERSF;
    users:  UserType;
}
export const setUsersF = (users: UserType): setUsersFActionType => ({ type: SET_USERSF, users });

export type FollowActionType = {
    type: typeof FOLLOW;
    userid: number;
}
export const follow = (userid: number): FollowActionType => ({ type: FOLLOW,  userid });

export type UnFollowActionType = {
    type: typeof UNFOLLOW;
    userid: number;
}
export const unFollow = (userid: number): UnFollowActionType => ({ type: UNFOLLOW, userid });

export type SetCurrentPageFActionType = {
    type: typeof SET_CURRENT_PAGE_F
    currentPageF: Array<UserType>

}
export const setCurrentPageF = (currentPageF: Array<UserType>): SetCurrentPageFActionType =>
    ({ type: SET_CURRENT_PAGE_F, currentPageF });

export type ToogleFetchingActionType = {
    type: typeof TOOGLEFETCHING
    isFetchingF: boolean
}
export const toogleFetching = (isFetchingF: boolean): ToogleFetchingActionType => ({ type: TOOGLEFETCHING, isFetchingF })

export default FindeReduser