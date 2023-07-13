import React from 'react';
import "./FuncComp.css"
const FuncComp = () => {
    return(
        <>
        {/* <div className="funcboxParent"> */}
            <div className="funcbox">
            <div>This is created using functional component</div>
            <p className="para">This is done using external CSS</p>
            <p style={{color: "blue"}}>This is done using inline CSS</p>
            </div>
        {/* </div> */}
        </>
    )
}
export default FuncComp
