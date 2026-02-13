import styles from './ProductCard.module.css'

function ProductCard({ product, onAddToCart }) {
  if (!product) return null

  const { image, name, price } = product;
  return (
    <div className={styles.productCard}>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>{price}$</p>
        <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard          