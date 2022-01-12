
//import {rerenderIntareTree} from './index';
let rerenderIntareTree =()=>{
  
} 

let state = {


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
    {
      id: 3, idClient: '2', nameClient: 'Svetka', nameDog: '4mobik',
      grumer: 'Liza', dateGrum: '13.15'
    },
  ],

  addTest1: {
    testmassegeData: [
      { id: 1, testmassege: 'сообщеиние тест1', },
      { id: 1, testmassege: 'сообщеиние тест1', },

    ],
    nevTest1: 'тест1'
  }
}

export let addtestmassegeData = () => {
  let massege = {
    id: 3,
    testmassege: state.addTest1.testmassegeData
  }
  state.addTest1.testmassegeData.push(massege)

  state.addTest1.testmassegeData='';
  rerenderIntareTree (state)
}


// export let addtestmassegeData = (testmassege) => {
//   let massege = {
//     id: 3,
//     testmassege: testmassege
//   }
//   state.addTest1.testmassegeData.push(massege)


export let nevTextTest1 = (testTest1) => {
  state.addTest1.testmassegeData = testTest1;
  rerenderIntareTree (state)
}








export const addGrumTebl = (GrumTebl) => {

  let bloc = {

    id: 5,
    idClient: GrumTebl,
    nameClient: GrumTebl,
    nameDog: GrumTebl,
    grumer: GrumTebl,
    dateGrum: GrumTebl,
  }
  state.GrumTebl.push(bloc)
};

export const postRev = (ClientRevievs) => {

  let postT = {
    id: 3,
    ClientReviev: ClientRevievs,
  }
  state.ClientRevievs.push(postT)
};

export const addMessDialog = (massage) => {

  let massegeDialog = {
    id: 3,
    massedes: massage,
  }
  state.massedesData.push(massegeDialog)
};

export  const subscribe = (observer)=>{
  rerenderIntareTree = observer;
}


export default state;
