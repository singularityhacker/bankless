import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';
import InvestMain from '../components/Invest/Main';

class Invest extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="Invest" 
                    homePageUrl="/invest" 
                    activePageText="BANK" 
                /> 
                <InvestMain />
                <Footer />
            </>
        );
    }
}

export default Invest;