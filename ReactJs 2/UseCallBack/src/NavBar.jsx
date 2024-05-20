import { memo } from "react";
function NavBar({adjective,getAdjective}){
    console.log("Nav Bar is rerendered");
    return(
        <>
        <div>I am a {adjective} adjective</div>
        <button onClick={()=>getAdjective()}>{getAdjective()}</button>
        </>
    )
}
export default memo(NavBar);