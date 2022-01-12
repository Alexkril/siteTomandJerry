import React from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {

    let AddMassegeg = React.createRef();

    let Addtext = () => {
        let Text2 = AddMassegeg.current.value;
        props.addtestmassegeData(Text2);
       
    }
    let onChengeMasse = () => {
        let Text2 = AddMassegeg.current.value;
        props.nevTextTest1(Text2);
       
    }

    return (
        <div className={clases.Test1}>
            <div> <textarea onChange={onChengeMasse} ref={AddMassegeg} value={props.nevTest1}></textarea>
                <div>
                    <button onClick={Addtext} >add</button>
                </div>
            </div>

            {/* <Abonent /> */}
            <AddMasseges testmassegeData={props.testmassegeData}

            />
        </div>
    )
}

export default Test1;