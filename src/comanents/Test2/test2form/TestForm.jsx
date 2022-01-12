import React from "react";
import c from './testForm.module.css'

const TestForm = (props) => {

    let name = React.createRef();
    let Name = () => {
        let addT = name.current.value
        props.addGrumTebl(addT);
    }
    let name1 = React.createRef();
    let Name1 = () => {
        let addT = name1.current.value
        props.addGrumTebl(addT);
    }
    let name2 = React.createRef();
    let Name2 = () => {
        let addT = name2.current.value
        props.addGrumTebl(addT);
    }
    
    let name3 = React.createRef();
    let Name3 = () => {
        let addT = name3.current.value
        props.addGrumTebl(addT);
    }

    return (
        <div >
            <div className={c.TestForm}>
                <textarea ref={name} >имя клиента</textarea>
                <div>  <button onClick={Name}>OK</button></div>
            </div>
            <div className={c.TestForm}>
                <textarea ref={name1} >кличка животного</textarea>
                <div>  <button onClick={Name1}>OK</button></div>
            </div>
            <div className={c.TestForm}>
                <textarea ref={name2} >дата</textarea>

                <div>  <button onClick={Name2}>OK</button></div>
            </div>
            <div className={c.TestForm}>
                <textarea ref={name3} >мастер</textarea>
                <div> <button onClick={Name3}>OK</button></div>
            </div>
        </div>
    );
}
export default TestForm;