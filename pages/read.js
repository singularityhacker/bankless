import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';
import ReadMain from '../components/Read/Main';

class Read extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Read" 
                    homePageUrl="/read" 
                    activePageText="Read" 
                /> 
                <ReadMain />
                <Footer />
            </>
        );
    }
}

export default Read;