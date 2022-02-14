import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/white-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a className="nav-link" >
                                                About Us <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                        

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Governance</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-2" activeClassName="active">
                                                    <a className="nav-link">Guilds</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index-3" activeClassName="active">
                                                    <a className="nav-link">Projects</a>
                                                </Link>
                                            </li>                                            
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Coordination Stack</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Community Calls</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Portal to Nodes</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index-5" activeClassName="active">
                                                    <a className="nav-link">Request a Media Kit</a>
                                                </Link>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="nav-item">
                                    <Link href="/invest">
                                    <a className="nav-link" >
                                        Invest <i className='bx bx-chevron-down'></i>
                                    </a>
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/read">
                                    <a className="nav-link" >
                                        Read <i className='bx bx-chevron-down'></i>
                                    </a>
                                </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link" onClick={e => e.preventDefault()}>
                                            Work With Us <i className='bx bx-chevron-down'></i>
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">DEGEN Bot</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-2" activeClassName="active">
                                                <a className="nav-link">Bounty Board</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-3" activeClassName="active">
                                                <a className="nav-link">Custom Articles</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/index-4" activeClassName="active">
                                                <a className="nav-link">Custom Designs</a>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">Podcast Sponsorships</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">Newsletter Sponsorships</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">Global Tax Consultancy</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">Bankless Consultancy</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">DAO DASH Analytics Service</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/index-5" activeClassName="active">
                                                <a className="nav-link">Marketing Services</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                    
                                </ul>

                                <div className="others-options">
                                    <Link href="/login">
                                        <a className="default-btn">
                                            Log In <i className="bx bx-log-in-circle"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default Navbar;