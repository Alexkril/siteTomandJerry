const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Alex', status: 'bomg', location: { siti: 'don', country: 'pf' } },
        { id: 2, followed: false, fullName: 'Al', status: 'bomg1', location: { siti: 'don', country: 'ua' } },
        { id: 3, followed: true, fullName: 'Ale', status: 'bomg2', location: { siti: 'don', country: 'bl' } },
    ]
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersid) {
                        return { ...u, followed: true }
                    }

                    return u
                })
            }
case UNFOLLOW:
    return{...state,
    users: state.users.map (un => { 
        if (un.id===action.userid) {
            return {...un, followed: false }
        }
        return un} )
    }

        default:
            return state;
    }
}
const followAC = (userid) => ({ type: FOLLOW, userid })
const unfollowAC = (userid) => ({ type: UNFOLLOW, userid })


