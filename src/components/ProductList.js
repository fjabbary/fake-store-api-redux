import React, { useEffect } from 'react';
import { fetchProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <Link to={`/products/${product.id}`}>
                        <div className="card-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="card-desc">
                            <h3>{product.title}</h3>
                            <p><b>$ {product.price}</b></p>
                            <p><small>{product.category}</small></p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ProductList