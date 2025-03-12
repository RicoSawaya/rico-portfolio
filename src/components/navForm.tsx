import "./navForm.css";
import {Link} from "react-router-dom";
import griplines from './photos/griplines_modified.png'; // Import the image

import { useState } from "react";

import NavBar from "./navbar";



function NavForm(){
    const [showComponent, setShowComponent] = useState<boolean>(false);
    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return(
        <>
        {!showComponent && (
            <div className="nav-bar-form">
                <button className="link" id="grip-lines" onClick={toggleComponent}><img src={griplines}></img></button>
                <Link to='/' className="link" onClick={toggleComponent}>Home</Link> 
                <Link to='/projects' className="link" onClick={toggleComponent}>Projects</Link> 
                <Link to='/studies' className="link" onClick={toggleComponent}>Studies</Link> 
                <Link to='/lifting' className="link" onClick={toggleComponent}>Lifting</Link>
            </div>
        )}

        {showComponent && <NavBar/>}
        </>


    )
}

export default NavForm