import React, { useState, useEffect } from "react";
import "./Productos.css";
function Productos({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [favoritos, setFavoritos] = useState({});
    useEffect(() => {
    fetch("/data/productos.json")
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar la información de los productos");
            }
        return respuesta.json();
        })
        .then((datos) => {
            setProductos(datos);
        })
        .catch((error) => {
            setError(error.message);
        })

        .finally(() => {
            setCargando(false);
        });
    }, []);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    const manejarCompra = (producto) => {
        alert(`¡Agregaste ${producto.nombre} al carrito! Precio: $${producto.precio}`);
    };

    const manejarFavorito = (productoId) => {
        setFavoritos((prevFavoritos) => ({
            ...prevFavoritos,
            [productoId]: !prevFavoritos[productoId],
        }));
    };

    return (
        <div className="productos-container">
        <h1>{Mensaje}</h1>
        <ul>
            {productos.map((producto) => (
            <li key={producto.id}>
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={producto.nombre} width="150" />
                <p>Precio: ${producto.precio}</p>
                <div className="botones-container">
                    <button className="btn-comprar" onClick={() => manejarCompra(producto)}>Comprar</button>
                    <button 
                        className="btn-favorito" 
                        onClick={() => manejarFavorito(producto.id)}
                        title={favoritos[producto.id] ? "Quitar de favoritos" : "Agregar a favoritos"}
                    >
                        {favoritos[producto.id] ? "⭐" : "☆"}
                    </button>
                </div>
            </li>
        ))}
        </ul>
    </div>
    );
}
export default Productos;
