import React,{ useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

function PortfolioContainer() {
    const [currentPage, handleCurrentPage] = useState("about")

    const renderPortfolio = () => {
        switch (currentPage) {
            case "about":
                return <About/>;
                break;
            case "project":
                return <Project />;
                break;
            case "contact":
                return <Contact />;
                break;
            case "resume":
                return <Resume />;
                break;
        }
    }
    return(<>
    <Header currentPage={currentPage} handlePageChange={handleCurrentPage}></Header>
    {renderPortfolio(currentPage)}
    </>)
}

export default PortfolioContainer;