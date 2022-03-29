let NEW_TEXT_NEWDIALOG = 'NEW_TEXT_NEWDIALOG'
let ADD_TEXT_NEW_DIALOG = 'ADD_TEXT_NEW_DIALOG'

let initialState = {
  massedge: [
    { id: 1, textMassage: 'text new dialog' }
  ],
  addTextNewDialog: ''
}

const newDialogReduser = (state=initialState, action) => {
  switch (action.type) {

    case NEW_TEXT_NEWDIALOG:
      let textBody = state.addTextNewDialog
      return {
        ...state,
        addTextNewDialog: '',
        massedge: [...state.massedge, { id: 5, massedge: textBody }]
      }
      case ADD_TEXT_NEW_DIALOG:
        return{ ...state, addTextNewDialog: action.text}

  }
}

export let newTextNewDialog = () => ({ type: NEW_TEXT_NEWDIALOG })
export let addTextNewDialog =(text)=>({type:ADD_TEXT_NEW_DIALOG, text})

export default newDialogReduser