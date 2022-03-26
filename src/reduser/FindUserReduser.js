let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERSF = 'SET_USERSF';
let SET_CURRENT_PAGE_F = 'SET_CURRENT_PAGE_F';
let TOOGLEFETCHING='TOOGLEFETCHING'

let initialState = {
    users: [
    ],

    totalUserCoundF: 0,
    pageSizeF:5,
    totalCoundF: 1,
    currentPageF: 1,
    isFetchingF : true

}

let FindeReduser = (state = initialState, action) => {

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
            return { ...state, users: action.users}

            case SET_CURRENT_PAGE_F:
                
            return(
             { ...state, currentPageF: action.currentPageF}
             )
             case TOOGLEFETCHING: return{
                 ...state, isFetchingF: action.isFetchingF
             }


        default:
            return state
    }
}

export const setUsersF = (users) => ({ type: SET_USERSF, users });
export const follow = (userid) => ({ type: FOLLOW, userid });
export const unFollow = (userid) => ({ type: UNFOLLOW, userid });
export const setCurrentPageF =(currentPageF) =>({type:SET_CURRENT_PAGE_F, currentPageF});
export const toogleFetching=(isFetchingF)=>({type:TOOGLEFETCHING, isFetchingF })

export default FindeReduser