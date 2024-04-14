import React from 'react';
import Cards from '../../components/card/Cards';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Featured Products</h1>
            <Cards />
        </div>
    );
}

export default Home;
