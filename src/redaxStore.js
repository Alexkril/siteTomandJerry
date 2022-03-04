import { combineReducers, createStore } from "redux";
import testReduser from "./reduser/testMassegeReduser"
import dialogReduser from "./reduser/dialogReduser"
import galeryReduser from "./reduser/galeryReduser"

let redusers = combineReducers({
    addTest1: testReduser,
    dialogPage: dialogReduser,
    galereya: galeryReduser
})
let store = createStore(redusers);

window.store=store
export default store;
