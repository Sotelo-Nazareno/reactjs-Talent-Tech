import { Item } from "../Item/Item.jsx";
import styles from './ItemList.module.css'

export function ItemList({productos}){
    return(
        <div className={styles.producto}>
            {productos.map(prod => (
                <Item key= {prod.id} {...prod}/>
            ))}
        </div>
    )
}
