import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import React, { useState } from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { siteMeta } from "../data";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <Header title="J-Mobile Service" />
        <nav className={isOpen ? 'isOpen' : ''}>
            <button
                aria-expanded={isOpen}
                aria-controls="main-nav"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                &#8801;
            </button>
            <ul id="main-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">Products</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
                <Outlet />
                <Footer
                    fTitle={siteMeta.footerTitle}
                    iLink={siteMeta.instaLink}
                    tLink={siteMeta.twitterLink}
                    text={siteMeta.followText}
                    linkColor={siteMeta.linkColor}
                />
        </>
    );
};
export default Layout;