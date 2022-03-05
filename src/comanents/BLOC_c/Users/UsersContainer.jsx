import React from "react";
import { connect } from "react-redux";
import Users from './Users.jsx'

let mapStateToProps=(state)=>{
    
return{

}
};
let mapDispatchToProps =(dispatch)=>{
    return{

    }
};


let UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;