import React from "react";
import c from './test21.module.css'
import Test213 from "./Test213/Test213";

const Test21 = (props) => {




    let GrumEl = props.GrumTebl
        .map((Gr) => < Test213 idClient={Gr.idClient}
            nameClient={Gr.nameClient} nameDog={Gr.nameDog} grumer={Gr.grumer}
            dateGrum={Gr.dateGrum} id={Gr.id} />);

    return (
        <div className={c.test21}>
            {GrumEl}
        </div>
    );
}
export default Test21;