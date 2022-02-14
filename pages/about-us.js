import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AskQuestionForm from '../components/Faq/AskQuestionForm';
import Footer from '../components/Layouts/Footer';
import AboutUsFaq from '../components/AboutUs/Faq';

class AboutUs extends Component {
    render() {
        return (
            <>
                <Navbar />
                <PageBanner 
                    pageTitle="About Us" 
                    homePageUrl="/about-us" 
                    activePageText="Want alpha? Join BanklessDAO." 
                /> 
                <AboutUsFaq />
                <Footer />
            </>
        );
    }
}

export default AboutUs;