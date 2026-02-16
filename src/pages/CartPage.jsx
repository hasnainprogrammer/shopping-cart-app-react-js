import { ToastContainer } from 'react-toastify'

import Navbar from '../components/Navbar'
import CartListings from '../components/CartListings'

function CartPage({ carts, onSort, onClearCart, onQtyInc, onQtyDec, onRemoveCartItem }) {
  return (
    <>
    <Navbar carts={carts} />
    <ToastContainer position="top-center" autoClose={2000} />
    <CartListings carts={carts} onSort={onSort} onClearCart={onClearCart} onQtyInc={onQtyInc} onQtyDec={onQtyDec} onRemoveCartItem={onRemoveCartItem} />
    </>
  )
}

export default CartPage