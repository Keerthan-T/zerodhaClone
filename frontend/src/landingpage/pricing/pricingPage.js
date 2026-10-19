import React from 'react';
import Hero from './hero';
import Brokerage from './Brokerage';
import OpenAccount from '../openAccount';
function PricingPage() {
    return (
        <>
            <Brokerage />
            <OpenAccount/>
            <Hero />
        </>
    );
}

export default PricingPage;