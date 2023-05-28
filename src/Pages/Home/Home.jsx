import React from 'react';
import Banner from './Banner/Banner';
import Catagory from './Catagory/Catagory';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurant | Home </title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;