const NEV_TEXT_GALERY = "NEV_TEXT_GALERY"
const NEV_GALERY_MASSEGE_DATE = "NEV_GALERY_MASSEGE_DATE"

let initialState = {
  galeryMassegeDate: [
    {
      id: 1,
      text: "текст галерея"
    }
  ],
  addGaleryMassege: ""
};

const galeryReduser = (state = initialState, action) =>{
switch (action.type) {

  case NEV_GALERY_MASSEGE_DATE:
    let body = state.addGaleryMassege;
    state.galeryMassegeDate.push({ id:5, text:body })
        state.addGaleryMassege = "";
    return state;
    
  case NEV_TEXT_GALERY:
    state.addGaleryMassege = action.text
    return state;
  default:
    return state;
}
}
// const galeryReduser = (state, action) =>{

//     if (action.type === NEV_GALERY_MASSEGE_DATE) {
//         let body=state.addGaleryMassege;
//         state.addGaleryMassege = "";
//         state.galeryMassegeDate.push( {id:5, text: body} )
//       }
//       else if (action.type === NEV_TEXT_GALERY) {
//         state.addGaleryMassege = action.text
//       }
//     return state;
// }
export default galeryReduser;

export const nevGaleryMassegeCreator = () => {
  return {
    type: NEV_GALERY_MASSEGE_DATE
  }
}
export const nevTextGaleryCreaator = (text) => {
  return {
    type: NEV_TEXT_GALERY, text: text
  }
}