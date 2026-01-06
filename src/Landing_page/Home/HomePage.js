import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Homepage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Education />
            <Pricing />
            <Stats />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default Homepage;