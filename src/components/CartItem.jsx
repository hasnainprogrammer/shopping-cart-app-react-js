import styles from './CartItem.module.css'

function CartItem({ cart, onQtyInc, onQtyDec, onRemoveCartItem }) {
    const { id, image, name, price, qty } = cart || {};
    const totalPrice = price * qty

    return (
        <div className={styles.cartItem}>
            <div className={styles.product}>
                <img src={image} alt={name} />
                <div className={styles.removeCartItem}>
                    <h5>{name}</h5>
                    <button onClick={() => onRemoveCartItem(id)}>Remove</button>
                </div>
            </div>
            <p>{price}$</p>
            <div className={styles.quantity}>
                <p>{qty}</p>
                <button onClick={() => onQtyDec(id)}>-</button>
                <button onClick={() => onQtyInc(id)}>+</button>
            </div>
            <p>{totalPrice}$</p>
        </div>
    )
}

export default CartItem