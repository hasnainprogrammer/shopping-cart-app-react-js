import { ToastContainer } from 'react-toastify'

import Navbar from '../components/Navbar'
import CartListings from '../components/CartListings'

function CartPage({ carts, onQtyInc, onQtyDec, onRemoveCartItem }) {
  return (
    <>
    <Navbar carts={carts} />
    <ToastContainer />
    <CartListings carts={carts} onQtyInc={onQtyInc} onQtyDec={onQtyDec} onRemoveCartItem={onRemoveCartItem} />
    </>
  )
}

export default CartPage