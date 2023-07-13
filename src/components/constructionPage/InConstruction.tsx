import Link from "next/link"

export default function InConstruction () {
    return(
        <main style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "80px"}}>
            <h1 style={{color: "#fff"}}>Lo sentimos, todavía estamos trabajando en esta página</h1>
            <Link style={{color: "#09f"}} href="/">Volver al Inicio</Link>
        </main>
    )
}