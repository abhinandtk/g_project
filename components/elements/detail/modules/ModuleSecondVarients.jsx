import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProVarient } from '~/store/datas/action';
import constants from '~/public/static/data/my-constants/Constants';

const ModuleSecondVarients = ({ product, language }) => {
    const dispatch = useDispatch();

    const primaryIndex = useSelector(
        (state) => state.datas.proPrimaryVarientId
    );

    const multiItems = [];
    const prVarientId = useSelector((state) => state.datas.proVarient);

    product.Product_Items.map((item, index) => {
        item.multivarient.map((item_, index_) => {
            if (item.varent_id === primaryIndex) {
                multiItems.push({
                    value: item_.values,
                    slug: item_.slug_id,
                });
            }
        });
    });


    return (
        multiItems.length !== 0 && (
            <div className="ps-product__desc" >
                <ul
                    className="ps-list--dot"
                    style={{
                        textAlign:
                            language === [constants['Arabic']] && 'right',
                    }}>
                    <p
                        className="ps-prodcut__varient-name"
                        style={{
                            textAlign:
                                language === [constants['Arabic']] && 'right',
                            width: '100%',
                        }}>
                        {product.secondary_varient}
                    </p>
                    <p
                        className="ps-product__varient"
                        >
                        {multiItems.map((item, index) => {
                            return (
                                <span
                                    className={`ps-product__varient-span `}
                                    key={index}>
                                    <button
                                    style={{marginTop:"1rem"}}
                                        onClick={() => {
                                            dispatch(setProVarient(item.slug));
                                        }}
                                        className={`${
                                            prVarientId === item.slug
                                                ? `active_product-varient__product`
                                                : `product-varient__product`
                                        } `}>
                                        {item.value}
                                    </button>
                                </span>
                            );
                        })}
                    </p>
                </ul>
            </div>
        )
    );
};

export default ModuleSecondVarients;
