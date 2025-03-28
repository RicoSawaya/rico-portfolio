import "./navbar.css";
import {Link} from "react-router-dom";
import griplines from './photos/griplines_modified.png'; // Import the image
import NavForm from './navForm';
import { useState } from "react";



function NavBar(){
    const [showComponent, setShowComponent] = useState<boolean>(false);
    const toggleComponent = () => {
        setShowComponent(!showComponent);
    };

    return(
        <>
            <div>
                {!showComponent && (
                <div className="nav-bar">
                    <div className="left-nav">
                        <Link to = "/" className="link">Rico Sawaya</Link>
                    </div>
                    <div className="right-nav">
                        <Link to='/' className="link">Home</Link> 
                        <Link to='/projects' className="link">Projects</Link> 
                        <Link to='/studies' className="link">Studies</Link> 
                        <Link to='/lifting' className="link">Lifting</Link>
                    </div>
                    <button className="grip-lines" onClick={toggleComponent}>
                        <img src={griplines}></img>
                    </button>
                </div>
                )}

            </div>

            {showComponent && <NavForm />}

        </>
        
    )
}

export default NavBar