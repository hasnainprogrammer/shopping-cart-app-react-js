import Navbar from '../components/Navbar'
import ProductCardListing from '../components/ProductCardListing'
import { ToastContainer } from 'react-toastify';

function HomePage({ carts, onAddToCart }) {
  return (
    <>
    <Navbar carts={carts} />
    <ToastContainer />
    <ProductCardListing onAddToCart={onAddToCart} />
    </>
  )
}

export default HomePage