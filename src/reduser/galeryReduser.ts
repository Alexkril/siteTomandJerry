const NEV_GALERY_MASSEGE_DATE = "NEV_GALERY_MASSEGE_DATE"

type GaleryMassegeDate = {
  id: number
  email: string
}

let initialState = {
  galeryMassegeDate: [
    {
      id: 1,
      email: "текст галерея"
    }
    
  ] as Array<GaleryMassegeDate>,

};

export type InitialStateGalery = typeof initialState

const galeryReduser = (state = initialState, action: ActionsNevGaleryType) => {
   console.log('state', state)
  switch (action.type) {

    case NEV_GALERY_MASSEGE_DATE: {
      let massege = {
        id: 5,
        email: action.email,
      }
      return {
        ...state,
        galeryMassegeDate: [...state.galeryMassegeDate, massege]
      }
    }

    default:
      return state;
  }

}
export default galeryReduser;



type ActionsNevGaleryType = NevGaleryMassegeCreatorActionType
export type NevGaleryMassegeCreatorActionType = {
  type: typeof NEV_GALERY_MASSEGE_DATE,
  email: string
}
export const nevGaleryMassegeCreator = (email: string): NevGaleryMassegeCreatorActionType => { 
  console.log('addPost', email)
   return ({ type: NEV_GALERY_MASSEGE_DATE, email })
}


