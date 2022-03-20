import React from "react";

const FindUser =(props)=>{
    return(
            <div>
                <div >{props.findUser.map(f => {
                    return <div key={f.id}>
                        <div>
                            <div>{f.name}</div>
                            <div> {f.status} </div>
                        </div>

                        <div>
                            {f.folowed ?
                                <button onClick={() => { props.followed(f.id) }}> folowed </button> :
                                <button onClick={() => { props.unFollowed(f.id) }}> unfolowed</button>
                            }
                        </div>
                        <div>f</div>
                        <div>f</div>
                    </div>
                })
                }
                </div>
            </div>
        )

    }



export default FindUser