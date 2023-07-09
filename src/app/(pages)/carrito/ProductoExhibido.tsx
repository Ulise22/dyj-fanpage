
export default function ProductoExhibido ({producto} : {producto : object}) {
    return(
        <article>
            <h2> {producto.nombre} </h2>
        </article>
    )
}