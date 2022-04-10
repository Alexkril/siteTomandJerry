const ADD_TEST_MASSEGE_DATA = "ADD-TEST-MASSEGEDATA"
const NEV_TEXT_TEST1 = "NEV-TEXT-TEST1"


export type TestmassegeDataType={
  id:number
  testmassege: string
}

let initialState = {
  testmassegeData: [
    {
      id: Math.random(),
      testmassege: 'строка сообщений тест 1',
    },
  ] as Array<TestmassegeDataType>,
  nevTest1: 'TESTMassege'
};
export type InitialStateTest = typeof initialState

const testReduser = (state = initialState, action: any): InitialStateTest  => {
  switch (action.type) {

    case ADD_TEST_MASSEGE_DATA:
      let massege = {
        id: Math.random(),
        testmassege: state.nevTest1,
      }
      return {
        ...state,
        testmassegeData: [...state.testmassegeData, (massege)],
        nevTest1: ""
      }


    case NEV_TEXT_TEST1:
      return {
        ...state,
        nevTest1: action.nevText
      }

    default:
      return state;
  }

}


export default testReduser;
export type nevTestMassegeDataActionType={
  type: typeof ADD_TEST_MASSEGE_DATA
}

export const nevTestMassegeDataActionCreaator = () => {
  return {
    type: ADD_TEST_MASSEGE_DATA
  }
}
export type NevTextTest1ActionCreaatorActionType={
  type: typeof NEV_TEXT_TEST1
  nevText:string
}
export const nevTextTest1ActionCreaator = (text:string):NevTextTest1ActionCreaatorActionType => {
  return {
    type: NEV_TEXT_TEST1, nevText: text
  }
}