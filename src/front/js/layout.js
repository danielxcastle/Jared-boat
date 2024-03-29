import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SecondNavbar } from "./component/secondNavbar";
import { About } from "./pages/about";
import { Faq } from "./pages/faq";
import { RecentCatches } from "./pages/recentCatches";


import { What } from "./pages/what";
import { Location } from "./pages/location";


const Layout = () => {
    
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <SecondNavbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<About />} path="/about" />
                        <Route element={<Faq />} path="/faq" />
                        <Route element={<RecentCatches />} path="/recent-catches" />
                        <Route element={<What />} path="/what" />
                        <Route element={<Location />} path="/location" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
