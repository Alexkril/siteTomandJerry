import { combineReducers, createStore } from "redux";
import testReduser from "./reduser/testMassegeReduser"
import dialogReduser from "./reduser/dialogReduser"
import galeryReduser from "./reduser/galeryReduser"
import test3Reduser from "./reduser/galeryReduser"


let redusers = combineReducers({
    addTest1: testReduser,
    dialogPage: dialogReduser,
    galereya: galeryReduser,
    test3: test3Reduser
})
let store = createStore(redusers);


export default store;
