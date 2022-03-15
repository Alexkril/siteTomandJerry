const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        // {
        //     id: 1, followed: false, foto:
        //         'https://www.google.com/search?q=ava&sxsrf=APq-WBvfsUeKYRzZ9CF0tRO8KWaVdzK1dg:1646563913795&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjI17nJqLH2AhVKEncKHVz4AUgQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1#imgrc=yAILgdEq7KL_CM',
        //     fullName: 'Alex', status: 'bomg', location: { siti: 'don', country: 'pf' }
        // },
        // {
        //     id: 2, followed: true, foto:
        //         'https://www.google.com/search?q=ava&sxsrf=APq-WBvfsUeKYRzZ9CF0tRO8KWaVdzK1dg:1646563913795&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjI17nJqLH2AhVKEncKHVz4AUgQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1#imgrc=yAILgdEq7KL_CM',
        //     fullName: 'Al', status: 'bomg1', location: { siti: 'don', country: 'ua' }
        // },
        // {
        //     id: 3, followed: true, foto:
        //         'https://www.google.com/search?q=ava&sxsrf=APq-WBvfsUeKYRzZ9CF0tRO8KWaVdzK1dg:1646563913795&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjI17nJqLH2AhVKEncKHVz4AUgQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1#imgrc=yAILgdEq7KL_CM',
        //     fullName: 'Ale', status: 'bomg2', location: { siti: 'don', country: 'bl' }
        // },
    ]
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            //  debugger
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersid) {
                        return { ...u, followed: true }
                    }
                    console.log(2)

                    return u.followed
                })
            }

        case UNFOLLOW:
           // debugger
            return {
                ...state,
                users: state.users.map(un => {
                    if (un.id === action.userid) {
                        return { ...un, followed: false }
                    }
                    console.log(1)
                    return un.followed
                })
            }

        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }

        default:
            return state;
    }
}

export default usersReduser;

export const followAC = (userid) => ({ type: FOLLOW, userid })
export const unFollowAC = (userid) => ({ type: UNFOLLOW, userid })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

