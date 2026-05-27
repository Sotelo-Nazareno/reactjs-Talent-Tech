import Productos from "../Productos/Productos";
import styles from "./ItemListContainer.module.css";
export function ItemListContainer ({mensaje, subtitulo}){
    return(
        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
            <h2 className={styles.subtitulo}>{mensaje}</h2>
            <div className={styles.productos}>
                <Productos Mensaje={subtitulo} />
            </div>
        </div>
    )
}
