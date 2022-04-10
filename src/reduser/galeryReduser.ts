const NEV_TEXT_GALERY = "NEV_TEXT_GALERY"
const NEV_GALERY_MASSEGE_DATE = "NEV_GALERY_MASSEGE_DATE"

type GaleryMassegeDate ={
  id: number
  text: string
}

let initialState = {
  galeryMassegeDate: [
    {
      id: 1,
      text: "текст галерея"
    }
  ] as  Array<GaleryMassegeDate>,
  
  addGaleryMassege: "GALERYReduser"
};

export type InitialStateGalery = typeof initialState

const galeryReduser = (state = initialState, action: ActionsNevGaleryType) => {
  switch (action.type) {

    case NEV_GALERY_MASSEGE_DATE: {
      let body = state.addGaleryMassege;
      return {
        ...state,
        addGaleryMassege: "",
        galeryMassegeDate: [...state.galeryMassegeDate, { id: 5, text: body }]
      }

    }
    case NEV_TEXT_GALERY:
      return {
        ...state,
        addGaleryMassege: action.text
      }

    default:
      return state;
  }
}
export default galeryReduser;



type ActionsNevGaleryType = NevGaleryMassegeCreatorActionType | NevTextGaleryCreaatorActionType
export type NevGaleryMassegeCreatorActionType = {
  type: typeof NEV_GALERY_MASSEGE_DATE
}
export const nevGaleryMassegeCreator = (): NevGaleryMassegeCreatorActionType => ({ type: NEV_GALERY_MASSEGE_DATE })

export type NevTextGaleryCreaatorActionType = {
  type: typeof NEV_TEXT_GALERY
  text: string
}
export const nevTextGaleryCreaator = (text: string): NevTextGaleryCreaatorActionType => {
  return {
    type: NEV_TEXT_GALERY, text: text
  }
}

