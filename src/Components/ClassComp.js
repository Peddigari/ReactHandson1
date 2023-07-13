import React from 'react';

class ClassComp extends React.Component {
//   constructor() {
//     super();
//     this.state={
//         fstate:false,
//         cstate:false
//     }
//   }
//   clickHandle=()=>{
//       this.setState({cState:!this.state.fstate})
//       console.log(this.state.fstate);
//   }
  render() {
      return(
        //   <div className="funcboxParent">
    <div className="funcbox">
            <div>This is created using class component</div>
            <p className="para">This is done using external CSS</p>
            <p style={{color: "blue"}}>This is done using inline CSS</p>

        </div>
        // </div>
        )
  }
}
export default ClassComp;