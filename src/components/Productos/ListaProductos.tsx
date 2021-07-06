/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Producto, Modal } from '../../interfaces/ProductoInterface';
import firebase from '../../services/firebase';
import {
	FaShoppingCart,
	FaPlus,
	FaMinus,
	FaAngleRight,
	FaAngleLeft,
	FaArrowLeft
} from 'react-icons/fa';
import Loader from '../Loader';
const initialState: Producto = {
	url_foto_producto: '',
	nombre_producto: '',
	precio: 0
};

const ListaProductos = () => {
	const [productos, setProductos] = useState<Producto[]>([]);
	const [producto, setProducto] = useState<Producto>(initialState);
	const [isLoading, setLoading] = useState(false);
	const [modal, setModal] = useState<Modal>({
		producto: initialState,
		amount: 0,
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
		setLoading(true);
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
			setLoading(false);
		});
	};

	return (
		<div className='container mb-5 main-container'>
			<div className='row'>
				{isLoading ? <Loader /> : null}
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
											type='button'
											className='btn bg-verde bg-gradient ms-auto'
											data-bs-toggle='modal'
											data-bs-target='#staticBackdrop'
											onClick={() => {
												setModal({ producto, amount: 0, index: index + 1 });
											}}>
											<FaShoppingCart className='mb-1' /> Comprar
										</button>
									</div>
								</div>
							</div>
							<div
								className='modal-product modal fade'
								id='staticBackdrop'
								data-bs-backdrop='static'
								data-bs-keyboard='false'
								tabIndex={-1}
								aria-labelledby='staticBackdropLabel'
								aria-hidden='false'>
								<div className='modal-product-content'>
									<button
										className='btn bg-verde bg-gradient cancel'
										onClick={() => {
											setModal({
												producto: initialState,
												amount: 0,
												index: 0
											});
										}}>
										<FaArrowLeft />
									</button>
									<button
										className='btn bg-verde bg-gradient previous'
										onClick={() => {
											if (modal.index === 1) {
												return;
											}
											setModal({
												producto: productos[modal.index - 2],
												amount: 0,
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
												amount: 0,
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
										<div className='modal-detail-bottom'>
											<div className='buttons'>
												<button
													className='btn bg-verde bg-gradient'
													onClick={() => {
														if (modal.amount === 0) {
															return;
														}
														setModal({ ...modal, amount: modal.amount - 1 });
													}}>
													<FaMinus />
												</button>
												<p className='amount'>{modal.amount}</p>
												<button
													className='btn bg-verde bg-gradient ms-2'
													onClick={() => {
														setModal({ ...modal, amount: modal.amount + 1 });
													}}>
													<FaPlus />
												</button>
												<button className='btn bg-rojo bg-gradient ms-2'>
													Añadir <FaShoppingCart />
												</button>
											</div>
											<p className='price'>S/{modal.producto.precio}</p>
										</div>
									</div>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ListaProductos;
