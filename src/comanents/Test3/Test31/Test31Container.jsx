import React from "react";
import StoreContext from "../../../storeContext";
import { onClicTest3actionCreator, addTextTest3actionCreator } from "../../../reduser/test3Reduser";
import Test31 from "../Test31/Test31"

const Test31Container = (props) => {
    console.log(props)
   // debugger
    return (
        <StoreContext.Consumer>
            {
               (store) => {
                    let state = props.store.getState();
                    let onClicTest3 = () => {
                        store.dispatch(onClicTest3actionCreator())
                    };

                    let test3Text = (textMassage) => {
                        store.dispatch(addTextTest3actionCreator(textMassage))
                    }

                    return (
                        <Test31
                            addtestDate={onClicTest3}
                            addTextTest3={test3Text}
                            test3OnText={props.test3OnText} 
                            testvDate={props.testvDate}/>
                    );
                }
            }

        </StoreContext.Consumer>

    );
};

export default Test31Container;