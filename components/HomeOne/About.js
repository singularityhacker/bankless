import Link from 'next/link';

const About = () => {
    return (
        <section className="about-area pb-100 mt-50">
        
            <div className="container">
                <div className="row align-items-center">
                    

                    <div className="col-lg-12">
                    <p className="mt-20">BanklessDAO was founded by <a href="https://twitter.com/TrustlessState?s=20">David Hoffman</a> and <a href="https://twitter.com/RyanSAdams?s=20">Ryan Sean Adams</a> on May 4th, 2021, when they airdropped 35,000 BANK tokens to each Bankless premium subscriber. 
Following the true ethos of decentralization, they stepped back and let the DAO take shape. While their media company, Bankless LLC, continues to operate as its own media node, the Bankless brand is propagated through the DAO and its sub-DAOs.
Now, the Bankless ecosystem as a whole creates user-friendly onramps for people to discover decentralized financial technologies through education, media and culture.
</p>
                        <div className="about-content ">
                            <h2>We take a decentralized approach to:</h2>
                            <div className="mt-20">
                                <p>MEDIA </p>
                                <p><i>Producing cutting-edge written, visual, and audio content.</i></p>
                            </div>

                            <div className="mt-20">
                                <p>CONSULTING </p>
                                <p><i>Providing consulting services for other DAOs and Web3-native companies.</i></p>
                            </div>
                            <div className="mt-20">
                                <p>DAO TOOLING  </p>
                                <p><i>Shipping products and services that are changing the future of work.</i></p>
                            </div>
                            <div className="mt-20">
                                <p>COMING HOME  </p>
                                <p><i>Creating a social homebase for artists, thought-leaders, builders, scholars, and innovators in Web3.</i></p>
                            </div>
                        </div>
                    </div>
            <h1 className="mt-20">We're Headed West. Join Us.</h1>

                </div>
            </div>
        </section>
    )
}

export default About