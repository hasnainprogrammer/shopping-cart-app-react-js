import { useState } from 'react'

import styles from './ProductCardListing.module.css'
import ProductCard from './ProductCard'
import productsData from '../data/products';

function ProductCardListing({ onAddToCart }) {
  const [products, setProducts] = useState(productsData || []);

  if (!products.length) return <h2 className={styles.noItems}>No Products</h2>

  return (
    <div>
      <h1>Products</h1>
      <div className={styles.productCardListing}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>

    </div>
  )
}

export default ProductCardListing