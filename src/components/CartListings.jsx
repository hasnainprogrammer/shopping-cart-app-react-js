import CartItem from "./CartItem"
import styles from './CartListings.module.css'

function CartListings({ carts, onQtyInc, onQtyDec, onRemoveCartItem }) {
  if (!carts.length) return <h2 className="noItems">No items in the cart yet</h2>

  const cartTotal = carts.reduce((total, cartItem) => total + (cartItem.price * cartItem.qty), 0)

  return (
    <div>
      <h1>Your Carts</h1>
      <div className={styles.CartItemListings}>
        <div className={styles.CartItemListingsTitles}>
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div><hr />
        {carts.map(cart => (
          <CartItem key={cart.id} cart={cart} onQtyInc={onQtyInc} onQtyDec={onQtyDec} onRemoveCartItem={onRemoveCartItem} />
        ))}
        <div className={styles.cartTotalRow}>
          <strong>Total: {cartTotal}</strong>
        </div>
      </div>
    </div>
  )
}

export default CartListings