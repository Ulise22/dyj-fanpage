import Image from "next/image"


export default function Producto ({producto}: {producto: object} ) {
    return(
        <section>
            <Image src={producto.imagen} alt={producto.nombre} width={100} height={100} />
            <h2> {producto.nombre} </h2>
        </section>
    )
}