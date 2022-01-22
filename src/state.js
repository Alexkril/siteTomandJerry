const store = {

  state: {
    ClientRevievs: [{ id: 1, ClientReviev: 'спасибо? были у вас в прощсе отлично' },],

    massedesData: [
      { id: 1, massedes: 'Alecscscx' },
      { id: 2, massedes: 'чат' },
    ],

    DialogsData: [
      { id: 1, name: 'Alexdgrg ' },
      { id: 2, name: 'Alegr grt43t4t43tg' },
      { id: 3, name: 'Vasgr egrggrgerg' },
    ],

    GrumTebl: [
      {
        id: 1, idClient: 'номер', nameClient: 'имя клиента', nameDog: 'кличка животного',
        grumer: 'мастер', dateGrum: 'дата'
      },
      {
        id: 2, idClient: '1', nameClient: 'Sveta', nameDog: 'tobik',
        grumer: 'Liza', dateGrum: '12.15'
      },

    ],


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
    
    if (action.type === "ADD-TEST-MASSEGEDATA") {
      let massege = {
        id: Math.random(),
        testmassege: this.state.addTest1.nevTest1,
      }
      this.state.addTest1.testmassegeData.push(massege);
      this.state.addTest1.nevTest1 = "";
      this._collSubscriber(this.state);
    }
    else if (action.type === "NEV-TEXT-TEST1") {
      this.state.addTest1.nevTest1 = action.nevText;
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
