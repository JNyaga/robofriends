import React from "react";

/* anything in the scroll tage are its children */

const Scroll = (props)=>{
return(
 <div style={{overflow:"scroll",border:"1px solid black",height:"500px"}}>
 {props.children}
 </div>)
   
}

export default Scroll;