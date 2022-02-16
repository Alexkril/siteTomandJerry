
let rerenderIntareTree = () => {

}


let state2 = {

    testvDate: [
        { id: 1, todo: 'стрижка', },

    ],
    test3OnText: ""
}

export let addtestDate = (text) => {
    let testDate = {
        id: Math.random(),
        todo: text,

    }
    state2.testvDate.push(testDate)
    rerenderIntareTree(state2)

}

export const addTextTest3 = (text) => {
    state2.test3OnText.push = text;

    rerenderIntareTree(state2)
}

export let addMessDialog=(text)=>{
let nevMassedes ={
    id:3,
    massedes:text
} 
    state2.massedesData.push(nevMassedes)

}



export const subscribe2 = (observer2) => {
    rerenderIntareTree = observer2;
}

export default state2;
