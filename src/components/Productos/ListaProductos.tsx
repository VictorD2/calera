/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Producto, Modal } from '../../interfaces/ProductoInterface';
import firebase from '../../services/firebase';
import {
	FaShoppingCart,
	FaPlus,
	FaMinus,
	FaAngleRight,
	FaAngleLeft
} from 'react-icons/fa';
const initialState: Producto = {
	url_foto_producto: '',
	nombre_producto: '',
	precio: 0
};

const ListaProductos = () => {
	const [productos, setProductos] = useState<Producto[]>([]);
	const [producto, setProducto] = useState<Producto>(initialState);
	const [modal, setModal] = useState<Modal>({
		producto: initialState,
		display: false,
		index: 0
	});
	useEffect(() => {
		getProductos();
		return () => {
			setProductos([]);
			setProducto(initialState);
		};
	}, []);

	const getProductos = async () => {
		firebase.collection('productos').onSnapshot((querySnapshot) => {
			const docs: Producto[] = [];
			querySnapshot.forEach((doc) => {
				docs.push({
					nombre_producto: doc.data().nombre_producto,
					url_foto_producto: doc.data().url_foto_producto,
					precio: doc.data().precio,
					id_producto: doc.id
				});
			});
			setProductos(docs);
		});
	};

	return (
		<div className='container mb-5'>
			<div className='row'>
				{productos.map((producto, index) => {
					return (
						<>
							<div className='col-sm-4 mt-4'>
								<div className='card'>
									<div className='card-header'>{producto.nombre_producto}</div>
									<div className='card-body text-center'>
										<div>
											<img
												src={producto.url_foto_producto}
												width={'200px'}
												height={'100px'}
												alt={producto.nombre_producto}
											/>
										</div>
										<p className='text-start mt-3'>Precio: S/. {producto.precio}</p>
									</div>
									<div className='card-footer d-flex'>
										<button
											className='btn bg-verde bg-gradient ms-auto'
											onClick={() => {
												setModal({ producto, display: true, index: index + 1 });
											}}>
											<FaShoppingCart className='mb-1' /> Comprar
										</button>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
			<div className={modal.display ? 'modal-product' : 'modal-product hidden'}>
				<div className='modal-product-content'>
					<button
						className='btn bg-verde bg-gradient cancel'
						onClick={() => {
							setModal({
								producto: initialState,
								display: false,
								index: 0
							});
						}}>
						<FaAngleLeft />
					</button>
					<button
						className='btn bg-verde bg-gradient previous'
						onClick={() => {
							if (modal.index === 1) {
								return;
							}
							setModal({
								producto: productos[modal.index - 2],
								display: true,
								index: modal.index - 1
							});
						}}>
						<FaAngleLeft />
					</button>
					<button
						className='btn bg-verde bg-gradient next'
						onClick={() => {
							if (modal.index === productos.length) {
								return;
							}
							setModal({
								producto: productos[modal.index],
								display: true,
								index: modal.index + 1
							});
						}}>
						<FaAngleRight />
					</button>
					<div className='image-reference'>
						<div className='gradient'>
							<p>{modal.index}</p>
							<p className='stock'>{`/ ${productos.length}`}</p>
						</div>
						<img
							src='https://www.elindependiente.com/wp-content/uploads/2018/05/6166515520_fa60e2d761_o.jpg'
							alt=''
						/>
					</div>
					<div className='modal-detail'>
						<p className='modal-detail-title'>{modal.producto.nombre_producto}</p>
						<img
							className='modal-detail-image'
							src={modal.producto.url_foto_producto}
							alt={modal.producto.nombre_producto}
						/>
						<div className='modal-detail-footer'>
							<div className='buttons'>
								<button className='btn bg-verde bg-gradient '>
									<FaPlus />
								</button>
								<button className='btn bg-verde bg-gradient ms-2'>
									<FaMinus />
								</button>
							</div>
							<p className='price'>S/{modal.producto.precio}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListaProductos;
