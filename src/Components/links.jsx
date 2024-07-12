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
                <li><Modals name='React PDF' file='https://drive.google.com/file/d/1jk0LoEZDVJuAnpF0M4OQPBse-jpk5pu6/preview' /> </li>
                <li><Modals name='SQL PDF' file='https://drive.google.com/file/d/1jy3qK9qpljtPrAx5TrOuC5IBwtjYdMM-/preview' /> </li>
                <li><Modals name='NODEJS PDF' file='https://drive.google.com/file/d/1k1NOgDNGJ2zSIR_SFfY-TCenRFJDnKvy/preview' /> </li>
                <li><Modals name='C SHORT NOTES PDF' file='https://drive.google.com/file/d/1k2QkRSw-qpw272OC_1egLT4JNzuIeTBI/preview' /> </li>
                <li><Modals name='HTML CSS JS PDF' file='https://drive.google.com/file/d/1k2HHdinQxCvrf5542CwiaQXLvDvdg2sl/preview' /> </li>
                <li><Modals name='JAVA GUI PDF' file='https://drive.google.com/file/d/1jqq1QtSfwTNs4ANPovJDbJurHkPxL5Nv/preview' /> </li>
                <li><Modals name='PY SHORT NOTES PDF' file='https://drive.google.com/file/d/1jnyRargd0JRbun0Bk_nO2tOsam5_klaO/preview' /> </li>
                <li><Modals name='JAVA SHORT NOTES PDF' file='https://drive.google.com/file/d/1jqBbCM7riltg4cC2hA9sV-Nqj8vre6u-/preview' /> </li>
            </ul>
            
            
            
            
        </div>
    );
};
export default Links;