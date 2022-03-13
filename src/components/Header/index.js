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
                        <a href="#about" 
                          className={props.currentPage === "about" ? 'headerlink active': "headerlink"}
                          onClick={()=>{props.handlePageChange("about")}}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2" >
                        <a href="#project"
                         className={props.currentPage === "project" ? 'headerlink active': "headerlink"}
                          onClick={()=>{props.handlePageChange("project")}}>
                            Project
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact"
                         className={props.currentPage === "contact" ? 'headerlink active': "headerlink"}
                          onClick={()=>{props.handlePageChange("contact")}}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#resume"
                         className={props.currentPage === "resume" ? 'headerlink active': "headerlink"}
                          onClick={()=>{props.handlePageChange("resume")}}>
                            Resume
                        </a>
                    </li>
                    
    
                </ul>
            </nav>
        </header>
    );
}

export default Header;