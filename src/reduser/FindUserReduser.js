let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERSF = 'SET_USERSF';

let initialState = {
    users: [

    ],
    totalUserCoundF: 10,
    pageSizeF: 15,
    totalCoundF: 25
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
            return { ...state, users: [...state.users, ...action.users] }

        default:
            return state
    }
}

export const setUsersF = (users) => ({ type: SET_USERSF, users })
export const follow = (userid) => ({ type: FOLLOW, userid })
export const unFollow = (userid) => ({ type: UNFOLLOW, userid })

export default FindeReduser