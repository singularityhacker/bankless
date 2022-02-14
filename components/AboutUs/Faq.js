import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class AboutUsFaq extends Component {
    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="faq-accordion">
                                <Accordion allowZeroExpanded preExpanded={['a']}>
                                    <AccordionItem uuid="a">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Bankless is a movement for Web3 pioneers
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>
                                            We seek new ways to build wealth, solve human coordination problems, create culture, and develop cutting-edge thought-leadership in the crypto space. 
                                            <strong>Going Bankless</strong> means taking control of your financial health by adopting decentralized and permissionless money systems. 
                                            <strong>Bankless</strong> is the movement educating the world on how to do it. 
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="b">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            BanklessDAO is the homebase 
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p>
                                            BanklessDAO is a community of passionate Web3 thought-leaders who aim to educate new users, produce written and audio media, build DAO tooling, provide consulting services, develop Web3 scholarship, and create a social and creative home base for anyone in Web3. We’re so much more than a social DAO—we’re a shipping, building, and innovating DAO.  
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="c">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Our Mission is to onboard 1 billion people to crypto. 
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            The nodes in our growing ecosystem collaborate to create user-friendly onramps for people to discover, use, learn, and enjoy the benefits of Web3. Everyone falls down the rabbithole a different way—we provide all the ways. 
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>

                                    <AccordionItem uuid="d">
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            Our Vision is to make financial independence, decentralized work, and creative freedom accessible to all. 
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            We work to build a world where anyone with an internet connection has access to the tools needed to achieve financial independence. We want everyone to be able to open a computer, find a DAO, start working, and get paid. We want to enable visionaries to unlock their true creative freedom with the power of Web3. 
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="faq-img">
                                <img src="/images/faq-img.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsFaq;