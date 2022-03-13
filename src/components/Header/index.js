import React from 'react';

function Header(props) {
    
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img"></span> Shelby 
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2" >
                        <a href="#about" onClick={()=>{props.handlePageChange("about")}}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2" >
                        <a href="#project" onClick={()=>{props.handlePageChange("project")}}>
                            Project
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick={()=>{props.handlePageChange("contact")}}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume" onClick={()=>{props.handlePageChange("resume")}}>
                            Resume
                        </a>
                    </li>
                    
    
                </ul>
            </nav>
        </header>
    );
}

export default Header;