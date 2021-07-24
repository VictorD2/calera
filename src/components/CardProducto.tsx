import React from 'react';
import huevo from '../img/image-asset.png';

import { HiOutlineShoppingCart } from 'react-icons/hi'

const CardProducto = () => {

    return (
        <div className="card w-25">
            <div className="card-body">
                <img className="img-fluid" style={{ width: "100%" }} src={huevo} alt="producto" />
                <p className="mb-2 mt-4 d-block text-center fw-bold fs-3">$ 60.80</p>
                <span className="d-block text-center">Titulo producto</span>
            </div>
            <div className="card-footer">
                <div className="d-grid gap-1">
                    <button className="btn boton-primario fw-bold">Agregar<HiOutlineShoppingCart className="fs-5 ms-2" /></button>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;