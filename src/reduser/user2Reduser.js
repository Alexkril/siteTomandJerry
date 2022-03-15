// const LIKE = 'LIKE';
// const DIZLIKE = 'DIZLIKE';
// const SETUSER = 'SETUSER';


// let initialState = {
//     user2: [
//         { id: 1, like: '0', name: 'Stri', age: '25' },
//     ]
// }

// const User2Reduser = (state = initialState, action) => {
//     switch (action.type) {
//         case LIKE: {
//             return {
//                 ...state,
//                 user2: state.user2.map(u => {
//                     if (u.id === action.userid) {
//                         return { ...u, like: +1 }
//                     }
//                     return u
//                 })

//             }
//         }
//         case DIZLIKE: {
//             return {
//                 ...state,
//                 user2: state.user2.map(u => {
//                     if (u.id === action.userid) {
//                         return { ...u, like: -1 }
//                     }
//                     return u
//                 })
//             }
//         }
// case SETUSER: {
//     return { ...state, user2: [...state.user2, action,user]

//     }
// }


//         default: return state
//     }

// }

// export default User2Reduser;

// export const likeAC = (userid) => ({ type: LIKE, userid })
// export const dizLikeAC = (userid) => ({ type: DIZLIKE, userid })
// export const setUserAC = (user) => ({ type: SETUSER, user })