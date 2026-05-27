import style from './Footer.module.css'

const Footer = ({mensaje}) =>{
    return(
        <p className={style.footer}>&copy; 2025 - {mensaje}</p>
    )
}

export default Footer;
