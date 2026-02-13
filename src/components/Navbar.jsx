import { NavLink } from 'react-router-dom'
import styles  from './Navbar.module.css'

function Navbar({ carts }) {
    const numCarts = carts.length || 0;

    return (
        <nav className={styles.nav}>
            <h2 className={styles.logo}>Logo</h2>
            <div className={styles.links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart" className={styles.cartLink}>
                <div className={styles.numCart}>{numCarts}</div>
                Cart</NavLink>
            </div>
        </nav>
    )
}

export default Navbar