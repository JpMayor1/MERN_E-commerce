import React from "react";
import About from "../../components/About/About";
import FindUs from "../../components/FindUs/FindUs";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Gallery />
            <FindUs />
        </>
    );
}

export default Home;
