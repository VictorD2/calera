import React from 'react'


//Partials
import Header from '../partials/Header';
import Footer from '../partials/Footer';

//Componentes
import ListaProductos from '../components/Productos/ListaProductos';

const Tienda = () => {
    return (
        <>
            <Header />
            <main>
                <ListaProductos />
            </main>
            <Footer />
        </>
    )
}

export default Tienda
