import React from 'react';
import ProductCart from '~/components/elements/products/ProductCart';
import { Labels } from '~/public/static/data/my-constants/Labels';

function ProductTableOrderDetail({ products,language }) {
   
    const labels = Labels(language)

    return (
        <>
        <div className="table-responsive table-products-big-screen">
            <table className="table ps-table--shopping-cart">
                <thead>
                    <tr>
                        <th>{labels['Product']} </th>
                        <th>{labels['Price']} </th>
                        <th>{labels['Quantity']} </th>
                        <th>{labels['Amount']} </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <ProductCart language={language} product={product} myOrder={true} />
                            </td>
                            <td className="price">₹ {product.amount}</td>

                            <td>{product.count}</td>
                            <td className="price">
                                ₹ 
                                {parseInt(product.amount) *
                                    parseInt(product.count)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        
            </>
    );
}

export default ProductTableOrderDetail;
