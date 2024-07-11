import React from "react";
import Modals from "./modal.jsx";
const Links=()=>{
    
    return(
        <div className="d-flex flex-column  align-items-center justify-content-center">
            <ul>
                <li><Modals name= 'Teachnook PDF' file='/mlcourse_teachnook.pdf'/></li>
                <li><Modals name='C Language PDF' file='/C_language.pdf' /></li>
                <li><Modals name='C++ Language PDF' file='/C++_language.pdf' /></li>
                <li><Modals name='Java Language PDF' file='/JAVA_NOTES.pdf' /></li>
        
            </ul>
            
            
            
            
        </div>
    );
};
export default Links;