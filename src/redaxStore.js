import { combineReducers, createStore } from "redux";
import testReduser from "./reduser/testMassegeReduser";
import dialogReduser from "./reduser/dialogReduser";
import galeryReduser from "./reduser/galeryReduser";
import usersReduser from "./reduser/usersReduser";
import findUserReduser from "./reduser/FindUserReduser";


let redusers = combineReducers({
    addTest1: testReduser,
    dialogPage: dialogReduser,
    galereya: galeryReduser,
    usersPage: usersReduser,
    findUser: findUserReduser,
})
let store = createStore(redusers);

window.store = store
export default store;
