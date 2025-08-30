import { Link } from "react-router-dom"
import { PiShoppingCartSimpleBold } from "react-icons/pi"

import { useCart } from "../context/CartContext"
import styles from './Layout.module.css'

function Layout({children}) {
    const [state] = useCart()
  return (
    <>
    <header className={styles.header}>
        <Link to="/products">Papiloo Shop</Link>
        <Link to="/checkout">
        <div>
            <PiShoppingCartSimpleBold />
            {!! state.itemsCounter && <span>{state.itemsCounter}</span>}
        </div>
        </Link>
    </header>
    {children}
    <footer className={styles.footer}>Develop By Amir From <Link to="https://papiloo.ir">Papiloo</Link></footer>
    </>
  )
}

export default Layout
