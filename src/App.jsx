import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import { toast } from "react-toastify";

import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"

function App() {
  const [carts, setCarts] = useState([]);

  function handleAddToCart(newProduct) {
    const isProductAlreadyExists = carts.find(product => product.id === newProduct.id)
    if (isProductAlreadyExists) return toast.error("Product already been added to the cart")

    setCarts(prevCarts => [...prevCarts, { ...newProduct, qty: 1 }])
    toast.success("Product added to the cart")
  }

  function handleRemoveCartItem(id) {
    setCarts(prevCarts => prevCarts.filter(cartItem => cartItem.id !== id))
    toast.success("Cart item removed successfully")
  }

  function handleQtyInc(id) {
    setCarts(prevCarts => prevCarts.map(cartItem => (
      cartItem.id === id ? ({ ...cartItem, qty: cartItem.qty + 1 }) : cartItem
    )
    ))
  }

  function handleQtyDec(id) {
    setCarts(prevCarts => prevCarts.map(cartItem => (
      cartItem.id === id && cartItem.qty > 1 ? ({ ...cartItem, qty: cartItem.qty - 1 }) : cartItem
    )
    ))
  }

  function handleSort(sortBy) {
    setCarts(prevCarts => {
      if (sortBy === "ascending") return [...prevCarts].sort((a, b) => a.price - b.price)
      if (sortBy === "descending") return [...prevCarts].sort((a, b) => b.price - a.price)
      return prevCarts
    })
  }

  function handleClearCart() {
    setCarts([])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage carts={carts} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<CartPage carts={carts} onSort={handleSort} onClearCart={handleClearCart} onQtyInc={handleQtyInc} onQtyDec={handleQtyDec} onRemoveCartItem={handleRemoveCartItem} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App