let ON_CLIC_TEST3 = "ON-CLIC-TEST3"
let ADD_TEXT_TEST3 = "ADD-TEXT-TEST3"

let initialState = {
    testvDate: [
        { id: 1, todo: 'стрижка', },

    ],
    test3OnText: ""
};
const test3Reduser = (state = initialState, action) => {
    switch (action.type) {
        case ON_CLIC_TEST3:
            let massegeBody = state.test3OnText;
            state.testvDate.push({ id: 1, todo: massegeBody })
            state.test3OnText = "";
            return state;
            
        case ADD_TEXT_TEST3:
            state.test3OnText = action.textMassage;
            return state;
            default:
                return state;
    }
}
export default test3Reduser;

export let onClicTest3actionCreator = () => {
    return {
        type: ON_CLIC_TEST3
    }
};

export let addTextTest3actionCreator = (text) => {
    return {
        type: ADD_TEXT_TEST3, textMassage: text
    }
};