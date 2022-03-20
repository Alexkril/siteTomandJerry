let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SETUSERSF = 'SETUSERSF'


let initialState = {
    user: []
};

const FindUserReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
            user: state.user.map(u=>{
                if (u.id===action.userid){
                    return {...u, folowed: true}
                }
                return u.folowed
            } ) }

        case UNFOLLOW:{
            return{...state,
            user: state.user.map(u=> { 
                if(u.id===action.userid){
                    return {...u, folowed: false}
                }
                return u.folowed})}
        }

        case SETUSERSF:
          
            return {
                ...state,
                user: { ...state.user, ...action.user }
            }

        default: return state;
    }
}
export default FindUserReduser;

export let follow = (userid) => ({ type: FOLLOW, userid });
export let unFollow = (userid) => ({ type: UNFOLLOW, userid })
export let setUsersF = (user) => ({ type: SETUSERSF, user });
