const NEV_MASSEGE_DATE = 'NEV_MASSEGE_DATE';
const NEV_TEXT_DIALOG = 'NEV_TEXT_DIALOG';
const SET_USER_DIALOG_PAGE = 'SET_USER_DIALOG_PAGE'

let initialState = {
  massedesData: [
    { id: 1, massedes: 'DialogPage' },
    { id: 2, massedes: 'чат' },
  ],
  addPageMassege: " dialog",
  DialogsData:
    [
      { id: 1, name: 'DialogName ' },
    ],
  setUserDialog: null
};

const dialogReduser = (state = initialState, action) => {

  switch (action.type) {
    case NEV_MASSEGE_DATE:
      let massege = {
        id: Math.random(),
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

    default:
      return state;
  }

}

export default dialogReduser;

export const nevMassegeDate = () => ({ type: NEV_MASSEGE_DATE })
export const nevTextDialog = (text) => ({ type: NEV_TEXT_DIALOG, textdialog: text })
export const setUserDialogPage = (setUser) => ({ type: SET_USER_DIALOG_PAGE, setUser })