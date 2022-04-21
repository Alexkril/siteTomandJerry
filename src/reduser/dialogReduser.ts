import { PhotosType } from '../type/type'
import { dialogApi } from '../API/api'

const NEV_MASSEGE_DATE = 'NEV_MASSEGE_DATE';
const NEV_TEXT_DIALOG = 'NEV_TEXT_DIALOG';
const SET_USER_DIALOG_PAGE = 'SET_USER_DIALOG_PAGE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

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
  setUserDialog: null as SetUserDialogType | null,
  status: 'statusf' as string,
  updateStatus: '' as string
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
        ...state, setUserDialog: action.setUser
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    case UPDATE_STATUS:
      return {
        ...state,
        updateStatus: action.userid
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
  setUser: SetUserDialogType
}

export const setUserDialogPage = (setUser: SetUserDialogType): SetUserDialogPageActionType =>
  ({ type: SET_USER_DIALOG_PAGE, setUser })

type setStatus = {
  type: typeof SET_STATUS,
  userid: number
}
export const setStatus = (userid: number): setStatus => ({ type: SET_STATUS, userid })

type updateStatus = {
  type: typeof UPDATE_STATUS,
  status: string
}
export const updateStatus = (status: string): updateStatus => ({ type: UPDATE_STATUS, status })

// export const getStatusThuncCreetor = (userid: number) => (dispatch: any) => {
//   return dialogApi.getStatusApi(userid).then((response: any) => {
//     dispatch(setStatus(response.statusText));
//     console.log('getStatusThuncCreetor', getStatusThuncCreetor)
//   }
//   )
// }

// export const updateStatusThuncCreetor = (status: string) => (dispatch: any) => {
//   return dialogApi.updateStatusApi(status).then((response: any) => {
//     if (response.data.resultCode === 0)
//       dispatch(setStatus(Number(status)))
//   }
//   )
// }

export default dialogReduser;