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
                <center><h1 style={{ color:"white"}}>NOTE VAULT</h1></center>
                <div>
                    <Links />
                </div>
            </Main>
        </div>
    );
}
export default Home;
// className="d-flex flex-column gap-3 align-items-center justify-content-center"