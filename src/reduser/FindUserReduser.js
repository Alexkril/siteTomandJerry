const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'


let initialState = {
   
    findUser: [ ]
    
   
}

let findUserReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                findUser: state.findUser.map(f => {
                    if (f.id === action.userid) {
                        return { ...f, followed: true }
                    }
                    return f
                })
            };
            
        case UNFOLLOW:
            return {
                ...state,
                findUser: state.findUser.map(f => {
                    if (f.id === action.userid) {
                        return { ...f, followed: false }
                    }
                    return f
                })
            }
        case SETUSERS:
            return {
                ...state,
                findUser: [...state.findUser, action.findUser]
            }
        default: return state;

    }
}

export default findUserReduser;

export const followAC = (userid) => ({ type: FOLLOW, userid })
export const anFollowAC = (userid) => ({ type: UNFOLLOW, userid })
export const setUsersAC = (users) => ({ type: SETUSERS, users })