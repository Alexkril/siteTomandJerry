const NEV_TEXT_GALERY = "NEV_TEXT_GALERY"
const NEV_GALERY_MASSEGE_DATE = "NEV_GALERY_MASSEGE_DATE"

let initialState = {
  galeryMassegeDate: [
    {
      id: 1,
      text: "текст галерея"
    }
  ],
  addGaleryMassege: "GALERY"
};

const galeryReduser = (state = initialState, action) => {
  switch (action.type) {

    case NEV_GALERY_MASSEGE_DATE: {
      let body = state.addGaleryMassege;
      return { ...state ,
        addGaleryMassege :"",
        galeryMassegeDate :[...state.galeryMassegeDate, { id: 5, text: body }]
      }
      // stateCopy.galeryMassegeDate = [...stateCopy.galeryMassegeDate]
      // stateCopy.galeryMassegeDate.push({ id: 5, text: body })
      // stateCopy.addGaleryMassege = "";
      // return stateCopy;
    }
    case NEV_TEXT_GALERY:
      return {...state,
        addGaleryMassege : action.text
      }
    
    default:
      return state;
  }
}

export default galeryReduser;

export const nevGaleryMassegeCreator = () => ({type: NEV_GALERY_MASSEGE_DATE})
 

export const nevTextGaleryCreaator = (text) => {
  return {
    type: NEV_TEXT_GALERY, text: text
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