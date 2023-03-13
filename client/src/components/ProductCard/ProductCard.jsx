import React from 'react'
import './ProductCard.css'
import {Link} from 'react-router-dom'

function ProductCard({product}) {
  return (
    <div className="product-container">
        <Link to={`/productDetail/${product._id}`} className="wrapper" >
            <img src={`http://localhost:5000/images/${product.img}` } className='product-image' alt="products" />
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <span className="product-price"><span>P</span>{Number(product.price).toFixed(2)}</span>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard