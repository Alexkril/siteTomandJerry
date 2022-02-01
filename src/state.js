const ADD_TEST_MASSEGE_DATA = "ADD-TEST-MASSEGEDATA"
const NEV_TEXT_TEST1 = "NEV-TEXT-TEST1"
const NEV_MASSEGE_DATE = 'NEV_MASSEGE_DATE'
const NEV_TEXT_DIALOG = "NEV_TEXT_DIALOG"
debugger
const store = {


  state: {
    ClientRevievs: [{ id: 1, ClientReviev: 'спасибо? были у вас в прощсе отлично' },],


    dialogPage: {
      massedesData: [
        { id: 1, massedes: 'DialogPage' },
        { id: 2, massedes: 'чат' },
      ],
      addPageMassege: ""
    },

    DialogsData:
      [
        { id: 1, name: 'DialogName ' },

      ],



    // GrumTebl: [
    //   {
    //     id: 1, idClient: 'номер', nameClient: 'имя клиента', nameDog: 'кличка животного',
    //     grumer: 'мастер', dateGrum: 'дата'
    //   },
    //   {
    //     id: 2, idClient: '1', nameClient: 'Sveta', nameDog: 'tobik',
    //     grumer: 'Liza', dateGrum: '12.15'
    //   },

    // ],


    addTest1: {
      testmassegeData: [
        {
          id: Math.random(),
          testmassege: 'строка сообщений тест 1',
        },
      ],
      nevTest1: ''
    }

  },

  getState() {
    return this.state;
  },

  dispatch(action) {
    if (action.type === ADD_TEST_MASSEGE_DATA) {
      let massege = {
        id: Math.random(),
        testmassege: this.state.addTest1.nevTest1,
      }

      this.state.addTest1.testmassegeData.push(massege);
      this.state.addTest1.nevTest1 = "";
      this._collSubscriber(this.state);
    }
    else if (action.type === NEV_TEXT_TEST1) {
      this.state.addTest1.nevTest1 = action.nevText;
      this._collSubscriber(this.state)
    }
    
    else if (action.type === NEV_MASSEGE_DATE) {
      let massege = {
        id: Math.random(),
        massedes: this.state.dialogPage.addPageMassege,
      }
      this.state.dialogPage.massedesData.push(massege)
      this.state.dialogPage.massedesData.addPageMassege = "";
      this._collSubscriber(this.state)
    }
    
    else if (action.type === NEV_TEXT_DIALOG)  {
    this.state.dialogPage.addPageMassege=action.text
      this._collSubscriber(this.state)
  }
},




  // addtestmassegeData(text) {
  //   let massege = {
  //     id: Math.random(),
  //     testmassege: text
  //   }
  //   this.state.addTest1.testmassegeData.push(massege)
  //   this._collSubscriber(this.state)
  // },

  // nevTextTest1(text) {
  //   this.state.addTest1.nevTest1 = text;

  //   this._collSubscriber(this.state)
  // },

  // addGrumTebl  (GrumTebl)  {

  //   let bloc = {

  //     id: 5,
  //     idClient: GrumTebl,
  //     nameClient: GrumTebl,
  //     nameDog: GrumTebl,
  //     grumer: GrumTebl,
  //     dateGrum: GrumTebl,
  //   }
  //   this.state.GrumTebl.push(bloc)
  // },
  // postRev (ClientRevievs)  {

  //   let postT = {
  //     id: 3,
  //     ClientReviev: ClientRevievs,
  //   }
  //   this.state.ClientRevievs.push(postT)
  // },
  // addMessDialog (massage)  {

  //   let massegeDialog = {
  //     id: 3,
  //     massedes: massage,
  //   }
  //   this.state.massedesData.push(massegeDialog)
  // },
  subscribe(observer) {
    this._collSubscriber = observer;
  },
}


export default store;
export const nevTestMassegeDataActionCreaator = () => {
  return {
    type: ADD_TEST_MASSEGE_DATA
  }
}
export const nevTextTest1ActionCreaator = (text) => {
  return {
    type: NEV_TEXT_TEST1, nevText: text
  }
}
export const nevMassegeDateActionCreaator = ()=>{
  return{
    type: NEV_MASSEGE_DATE
  }
}
export const nevTextDialogActionCreaator = ()=>{
  return{
    type : NEV_TEXT_DIALOG
  }
}