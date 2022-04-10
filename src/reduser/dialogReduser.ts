import { PhotosType } from '../type/type'

const NEV_MASSEGE_DATE = 'NEV_MASSEGE_DATE';
const NEV_TEXT_DIALOG = 'NEV_TEXT_DIALOG';
const SET_USER_DIALOG_PAGE = 'SET_USER_DIALOG_PAGE'


type massedesDataType = {
  id: number
  massedes: string
}
type DialogsDataType = {
  id: number
  name: string
}
type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type SetUserDialogType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

let initialState = {
  massedesData: [
    { id: 1, massedes: 'DialogPage' },
    { id: 2, massedes: 'чат' },
  ] as Array<massedesDataType>,
  addPageMassege: " dialog",
  DialogsData: [
    { id: 1, name: 'DialogName ' },
  ] as Array<DialogsDataType>,

  setUserDialog: null as SetUserDialogType | null
};
export type initialStateType = typeof initialState


const dialogReduser = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case NEV_MASSEGE_DATE:
      let massege = {
        id: 5,
        massedes: state.addPageMassege,
      }

      return {
        ...state,
        massedesData: [...state.massedesData, massege],
        addPageMassege: ""
      }

    case NEV_TEXT_DIALOG:
      return {
        ...state,
        addPageMassege: action.textdialog
      }

    case SET_USER_DIALOG_PAGE:

      return {
        ...state, setUserDialog:  action.setUser 
      }

    default:
      return state;
  }

}

type ActionsDialogTypes = InitialStateActionType | NevTextDialogActionType | SetUserDialogPageActionType

export type InitialStateActionType = {
  type: typeof NEV_MASSEGE_DATE
}
export const nevMassegeDate = (): InitialStateActionType => ({ type: NEV_MASSEGE_DATE })

export type NevTextDialogActionType = {
  type: typeof NEV_TEXT_DIALOG
  textdialog: string
}
export const nevTextDialog = (text: string): NevTextDialogActionType => ({ type: NEV_TEXT_DIALOG, textdialog: text })

export type SetUserDialogPageActionType = {
  type: typeof SET_USER_DIALOG_PAGE
  setUser: Array<SetUserDialogType>

}
export const setUserDialogPage = (setUser: Array<SetUserDialogType>): SetUserDialogPageActionType => 
({ type: SET_USER_DIALOG_PAGE, setUser })

export default dialogReduser;