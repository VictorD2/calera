export interface Producto {
	id_producto?: string;
	nombre_producto: string;
	precio: number;
	url_foto_producto: string;
}
export interface Modal {
	producto: Producto;
	display: boolean;
	index: number;
}
