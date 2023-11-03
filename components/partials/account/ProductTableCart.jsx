import React from 'react';
import { Labels } from '~/public/static/data/my-constants/Labels';
import CartItems from './CartItems';

function ProductTableCart({
    cartPageDatas,
    handleRemoveCartItem,
    handleUpdateCart,
    language,
    refreshPage
}) {
    const lables = Labels(language);
    return (
        language !== false && (
            <div className="table-responsive table-products-big-screen">
                <table className=" table ps-table--shopping-cart ">
                    <thead>
                        <tr>
                            <th>{lables['Product']}</th>
                            <th>{lables['Price']}</th>
                            <th>{lables['Quantity']}</th>
                            <th>{lables['Total']}</th>
                            <th>{lables['Action']}</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartPageDatas.map((product, index) => {
                            return (
                                <CartItems
                                    key={index}
                                    refreshPage={refreshPage}
                                    language={language}
                                    index={index}
                                    product={product}
                                    handleUpdateCart={handleUpdateCart}
                                    handleRemoveCartItem={handleRemoveCartItem}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    );
}

export default ProductTableCart;
