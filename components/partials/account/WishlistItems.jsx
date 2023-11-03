import React from 'react';
import ProductCart from '~/components/elements/products/ProductCart';
import { Labels } from '~/public/static/data/my-constants/Labels';

function WishlistItems(props) {
    const labels = Labels(props.language)
    return (
        <tr key={props.product.id}>
            <td>
                <a
                    href="#"
                    onClick={(e) => {props.handleRemoveWishListItem(props.product.slug_Id);e.preventDefault()}}>
                    <i className="icon-cross"></i>
                </a>
            </td>
            <td>
                <ProductCart language={props.language} product={props.product} />
            </td>
            <td className="price">₹ {props.product.actual_prize}</td>
            {/* <td>{props.product.vendor}</td> */}
            <td>
                <a
                    className="ps-btn"
                    href=""
                    onClick={(e) => {props.handleAddItemToCart(props.product.slug_Id);e.preventDefault()}}>
                        {labels['Add to cart']}

                    
                </a>
            </td>
        </tr>
    );
}

export default WishlistItems;
