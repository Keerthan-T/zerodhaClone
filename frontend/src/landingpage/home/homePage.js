import React from 'react';

import Hero from './hero';
import Awards from './awards';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import OpenAccount from '../openAccount';


function HomePage() {
    return (
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
                
        </>
    );
}

export default HomePage;