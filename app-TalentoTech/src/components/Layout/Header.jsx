import styles from './Header.module.css'
import carrito from '../assets/img/carrito.png';

const Header = ({path_logo, titulo, subtitulo}) => {
    return(
        <header className={styles.header}>
            <div className={styles.fila}>
                <img className={styles.img} src={path_logo} alt="logo del e-commerce"/>
                <h1>{titulo}</h1>
            </div>
            <p className={styles.p}>{subtitulo}</p>
            <nav className={styles.nav}>
                <a href="#inicio">Inicio</a>
                <a href="#productos">Productos</a>
                <a href="#contacto">Contacto</a>
                <a href="#carrito"><img src={carrito} alt="carrito" /></a>
            </nav>
        </header>
    )
}

export default Header;
