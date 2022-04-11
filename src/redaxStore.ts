import { combineReducers, createStore, applyMiddleware } from "redux";
import testReduser from "./reduser/testMassegeReduser";
import dialogReduser from "./reduser/dialogReduser";
import galeryReduser from "./reduser/galeryReduser";
import usersReduser from "./reduser/usersReduser";
import findUserReduser from "./reduser/FindUserReduser";
import authReduser from "./reduser/authReduser";
import thunkMiddleware from 'redux-thunk'

let rootRedusers = combineReducers({
    addTest1: testReduser,
    dialogPage: dialogReduser,
    galereya: galeryReduser,
    usersPage: usersReduser,
    findUser: findUserReduser,
    auth: authReduser
})

type RootRedusersType = typeof rootRedusers
export type AppStateType = ReturnType<RootRedusersType>


let store = createStore(rootRedusers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store

export default store;
