import React from 'react';
import CardProducto from '../components/CardProducto';

const Home = () => {
    return (
        <>
            <div className="row justify-content-between">
                <CardProducto />
                <CardProducto />
                <CardProducto />
            </div>
            <div className="mt-3 row justify-content-between">
                <CardProducto />
                <CardProducto />
                <CardProducto />
            </div>
            <div className="mt-3 row justify-content-between">
                <CardProducto />
                <CardProducto />
                <CardProducto />
            </div>
            <div className="mt-3 row justify-content-between">
                <CardProducto />
                <CardProducto />
                <CardProducto />
            </div>
        </>
    );
}

export default Home;