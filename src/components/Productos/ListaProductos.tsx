/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Producto from '../../interfaces/ProductoInterface';
import firebase from '../../services/firebase';
import { FaShoppingCart } from 'react-icons/fa'
const initialState: Producto = {
    url_foto_producto: "",
    nombre_producto: "",
    precio: 0
}

const ListaProductos = () => {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [producto, setProducto] = useState<Producto>(initialState);


    useEffect(() => {
        getProductos();
        return () => {
            setProductos([])
            setProducto(initialState);
        }
    }, [])

    const getProductos = async () => {
        firebase.collection("productos").onSnapshot((querySnapshot) => {
            const docs: Producto[] = [];
            querySnapshot.forEach((doc) => {
                docs.push({ nombre_producto: doc.data().nombre_producto, url_foto_producto: doc.data().url_foto_producto, precio: doc.data().precio, id_producto: doc.id });
            });
            setProductos(docs)
        });
    }

    return (
        <div className="container mb-5">
            <div className="row">
                {productos.map(producto => {
                    return (
                        <>
                            <div className="col-sm-4 mt-4">
                                <div className="card">
                                    <div className="card-header">
                                        {producto.nombre_producto}
                                    </div>
                                    <div className="card-body text-center">
                                        <div>
                                            <img src={producto.url_foto_producto} width={"200px"} height={"100px"} alt={producto.nombre_producto} />
                                        </div>
                                        <p className="text-start mt-3">
                                            Precio: S/. {producto.precio}
                                        </p>
                                    </div>
                                    <div className="card-footer d-flex">
                                        <button className="btn bg-verde bg-gradient ms-auto"><FaShoppingCart className="mb-1" /> Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ListaProductos
