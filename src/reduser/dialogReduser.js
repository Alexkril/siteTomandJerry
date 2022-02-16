const NEV_MASSEGE_DATE = 'NEV_MASSEGE_DATE'
const NEV_TEXT_DIALOG = "NEV_TEXT_DIALOG"

let initialState = {
  massedesData: [
    { id: 1, massedes: 'DialogPage' },
    { id: 2, massedes: 'чат' },
  ],
  addPageMassege: "",
  DialogsData:
      [
        { id: 1, name: 'DialogName ' },
      ],
};

const dialogReduser = (state=initialState, action) =>{

  switch (action.type){
  case NEV_MASSEGE_DATE:
    let massege = {
             id: Math.random(),
           massedes:state.addPageMassege,
          }
          state.massedesData.push(massege)
         state.addPageMassege = " ";
         return state;
         case NEV_TEXT_DIALOG:
          state.addPageMassege = action.textdialog
          return state;
          default:
            return state;
       }

    // if (action.type === NEV_MASSEGE_DATE) {

    //     let massege = {
    //       id: Math.random(),
    //       massedes:state.addPageMassege,
    //     }
    //     state.massedesData.push(massege)
    //     state.addPageMassege = " ";
    //   }
  
    //   else if (action.type === NEV_TEXT_DIALOG) {
    //     state.addPageMassege = action.textdialog
    //   }

    // return state;
}

export default dialogReduser;

export const nevMassegeDateActionCreaator = () => {
  return {
    type: NEV_MASSEGE_DATE
  }
}
export const nevTextDialogActionCreator = (text) => {
  return {
    type: NEV_TEXT_DIALOG, textdialog: text
  }
}
