import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Shopping cart state
  const [cart, setCart] = useState([])

  // Category filtering state
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Add product to cart
  const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product])
}

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
      </button>

      {/* Category filter */}
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product list */}
      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      {/* Shopping cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App