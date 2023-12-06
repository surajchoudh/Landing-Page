import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: [
      { id: 1, title: 'Product 1', price: 25.99, quantity: 0 },
      { id: 2, title: 'Product 2', price: 19.99, quantity: 0 },
      { id: 3, title: 'Product 3', price: 34.99, quantity: 0 },
    ],
    cart: [],
  };

  handleAddToCart = (product) => {
    const updatedProducts = this.state.products.map((p) => {
      if (p.id === product.id) {
        p.quantity += 1;
      }
      return p;
    });

    this.setState({
      products: updatedProducts,
      cart: [...this.state.cart, product],
    });
  };

  handleRemoveFromCart = (product) => {
    if (product.quantity > 0) {
      const updatedProducts = this.state.products.map((p) => {
        if (p.id === product.id) {
          p.quantity -= 1;
        }
        return p;
      });

      const updatedCart = this.state.cart.filter((p) => p.id !== product.id);

      this.setState({
        products: updatedProducts,
        cart: updatedCart,
      });
    }
  };

  render() {
    const { products, cart } = this.state;

    return (
      <div className="container">
        <h1><u>Shopping Cart</u></h1>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <button onClick={() => this.handleAddToCart(product)}>
                Add to Cart
              </button>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => this.handleRemoveFromCart(product)}>
                Remove from Cart
              </button>
            </div>
          ))}
          <p>Total Quantity: {cart.reduce((total, product) => total + product.quantity, 0)}</p>
          <p>
            Total Amount: ${cart.reduce((total, product) => total + product.quantity * product.price, 0)}
          </p>
        </div>
      </div>
    );
  }
}

export default App;