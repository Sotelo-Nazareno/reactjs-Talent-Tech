import styles from './TarjetaProducto.module.css'


export function TarjetaProducto({path_producto, descripcion, descuento, precio, text_btn}){

    let mensaje_desc = null;
    if (descuento){
        mensaje_desc = descuento
    }

    return(
        <div className={styles.tarjeta}>
            <img src={path_producto} alt="producto" />
            <p className={styles.descripcion}>{descripcion}</p>
            <p>{mensaje_desc}</p>
            <h2>{precio}</h2>
            <button>{text_btn}</button>
        </div>
    )
}
