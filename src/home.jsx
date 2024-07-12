import React from "react";
import Header from "./Components/header";
import Main from "./Components/main";
import Links from "./Components/links";
import ValidateModal from "./Components/validate_modal";
function Home(){
    
    return(
        <div>
            <Header />
            <Main>
                <ValidateModal />
                <div class='d-flex flex-row align-items-center justify-content-center gap-3' style={{width:"100%"}}>
                    <div><h1 style={{ color:"white", fontFamily:"cursive" , fontStyle:"italic"}}>NOTES <span style={{color:"yellow"}}>VAULT</span></h1>
                    </div>
                    <div>
                        <img src="/HARSHIT_LOGO[1].png" alt="" style={{ width:"100px", height:"100px", borderRadius:"100px"}}/>
                    </div>
                </div>
                
                
                
                <div>
                    <Links />
                </div>
            </Main>
        </div>
    );
}
export default Home;
// className="d-flex flex-column gap-3 align-items-center justify-content-center"