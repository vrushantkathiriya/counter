import React ,{forwardRef} from "react";
function Chaild(props,ref)
 {
    return ( 
        <div>
           <input type= "text" ref={ref}/>
        </div>
     );
}

export default forwardRef(Chaild);