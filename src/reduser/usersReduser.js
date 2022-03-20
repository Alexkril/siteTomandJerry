const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 20,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false

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
                    return u;
                })
            };

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUserCount: action.count }

case TOOGLE_IS_FETCHING:
    return{...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export default usersReduser;

export const follow = (userid) => ({ type: FOLLOW, userid })
export const unFollow = (userid) => ({ type: UNFOLLOW, userid })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })
export const toogleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING, isFetching:isFetching})
