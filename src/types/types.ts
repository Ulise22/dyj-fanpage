export type Product = {
    id: number,
    nombre: string
    imagen: string,
    año: string,
    precio: number,
    cantidad: number,
    precioTotal: number
}

export type Cart = {
    productos: number,
    sumaPrecios: number,
    listaProductos: Product[]
}