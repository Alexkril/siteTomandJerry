const ADD_TEST_MASSEGE_DATA = "ADD-TEST-MASSEGEDATA"
const NEV_TEXT_TEST1 = "NEV-TEXT-TEST1"

let initialState = {
  testmassegeData: [
    {
      id: Math.random(),
      testmassege: 'строка сообщений тест 1',
    },
  ],
  nevTest1: ''
};

const testReduser = (state=initialState, action) => {
  switch (action.type) {
    
    case ADD_TEST_MASSEGE_DATA:
      let massege = {
        id: Math.random(),
        testmassege: state.nevTest1,
      }
      state.testmassegeData.push(massege);
      state.nevTest1 = "";
      return state;

    case NEV_TEXT_TEST1:
      state.nevTest1 = action.nevText;
      return state;
    default:
      return state;
  }

}

// if (action.type === ADD_TEST_MASSEGE_DATA) {
//   let massege = {
//     id: Math.random(),
//     testmassege: state.nevTest1,
//   }
//   state.testmassegeData.push(massege);
//   state.nevTest1 = "";
// }
// else if (action.type === NEV_TEXT_TEST1) {
//   state.nevTest1 = action.nevText;
// }

// return state;

// }

export default testReduser;

export const nevTestMassegeDataActionCreaator = () => {
  return {
    type: ADD_TEST_MASSEGE_DATA
  }
}
export const nevTextTest1ActionCreaator = (text) => {
  return {
    type: NEV_TEXT_TEST1, nevText: text
  }
}