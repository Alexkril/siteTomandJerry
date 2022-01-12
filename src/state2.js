let state2 = {
   

    TestvDate: [
        { id: 1, todo: 'стрижка', time: 'время стрижки', day: 'дата' },
        { id: 2, todo: 'стрижка хвост', time: '2 часа', day: 'понед' }
    ],
}

   


export let addtestDate = (nevTestDate) => {
    let testDate = {
        id: 1,
        todo: nevTestDate,
        time: 'время стрижки',
        day: 'дата'
    }
    state2.TestvDate.push(testDate)
}
export default state2;
// return( <div>{props.todo} {props.time} {props.day}</div> )
// }