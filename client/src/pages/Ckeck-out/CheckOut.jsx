import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import "./Check-out.css"

function CheckOut() {
  const {address} = useSelector((state) => state.address)
  const {products} = useSelector((state) => state.cart)

  function totalPriceProducts() {
    let totalPrice = 0
    products.map((product) => totalPrice += (product.price * product.quantity))
    return totalPrice.toFixed(2)
  }
  return (
    <div className="check-out-container">
      <div className="check-out-wrapper">
        <div className="check-out-left">
          <h3 className="check-out-left-title">Address Data</h3>
          <div className="check-out-address-data">
            {Object.entries(address).map(([property, value]) => (
              <div className="check-out-info">
                <h3>{property}:</h3>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="check-out-right">
          <h3 className="check-out-right-title">Products</h3>
          <div className="check-out-products">
            {products.map((product) => (
              <div className="product_id" key={product.id}>
                <Link to={`/productDetail/${product.id}`}>
                  <img src={`http://localhost:5000/images/${product.img}`} alt="imageproduct" className='check-out-image'/>
                </Link>
                <div className="check-out-price-and-title">
                  <p className="check-out-product-title">{product.title}</p>
                  <span className="check-out-price">
                    {product.quantity} x <span>₱</span> {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span className="check-out-total-price-msg">
            Total Price of Products:
            <div className="check-out-total-price">₱{totalPriceProducts()}</div>
          </span>
        <Link to='/final' className='check-out-order-btn'>Order</Link>
        </div>
      </div>
    </div>
  )
}

export default CheckOut