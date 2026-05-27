import Footer from './Footer.jsx';
import Header from './Header.jsx';
import styles from './Layout.module.css'

export function Layout({children}){
    return(
        <div>
            <Header path_logo={"src/assets/img/logo.png"} titulo={"Articulos de Limpieza"} subtitulo={'Soluciones de Higiene y Limpieza'}/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer mensaje={'Mi e-commerce'}/>
        </div>
    );
}
