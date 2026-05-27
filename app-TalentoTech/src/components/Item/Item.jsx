import { useState } from 'react';
import styles from './Item.module.css'

export function Item({nombre, precio, stock}){

    const [esFavorito, setEsFavorito] = useState(false); 
    const CompraClick = () => { alert(`¡Agregaste ${nombre} al chango!`); };

    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito);
    }
    return(
        <div className={styles.tarjeta}>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock disponible: {stock}</p>
            <button onClick={CompraClick}>Comprar</button>
            <span onClick={marcarComoFavorito}
                style={{ fontSize: '24px'}}
                > {esFavorito ? '⭐' : '☆'}
            </span>
        </div>
    );
}
