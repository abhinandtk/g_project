import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import constants from '~/public/static/data/my-constants/Constants';
import {

    setProVarient,
} from '~/store/datas/action';
import {
    setProPrimaryVarientId,
    setProSecondaryVarientId,
} from '~/store/datas/action';
import ModuleVarientPopup from './ModuleVarientPopup';

const ModuleVarients = ({ product, language,varientPopup }) => {
    const dispatch = useDispatch();

    const [isShown,setIsShown] = useState(false)
    const [primaryIndex, setPrimaryIndex] = useState(
        useSelector((state) => state.datas.proPrimaryVarientId)
    );

    const prVarientId = useSelector((state) => state.datas.proVarient);

    const items = [];

    product.Product_Items.map((item, index) => {
        const isExist = (obj) => obj.varent_id === item.varent_id;
        if (items.some(isExist) === false) {
           
            items.push({
                varent_id: item.varent_id,
                values_values: item.values_values,
                secondVarientSlug:
                    item.multivarient.length !== 0
                        ? item.multivarient[0].slug_id
                        : item.slug_id,
            });
        }
    });


    console.log(product,"producttttttt");



    const handleButtonActions = (varent_id,secondVarientSlug)=>{
        
        setPrimaryIndex(varent_id);
        dispatch(
            setProPrimaryVarientId(
                varent_id
            )
        );

        dispatch(
            setProVarient(
                secondVarientSlug
            )
        );
        dispatch(
            setProSecondaryVarientId(
                secondVarientSlug
            )
        );

    }

    return (
        <div className="ps-product__desc">
            <ul
                className="ps-list--dot"
                style={{ textAlign: language === constants.Arabic && 'right' }}>
                <p className="ps-prodcut__varient-name" >
                    {product.primary_varient}
                </p>

                <p className="ps-product__varient" >
                    {items.map((item, index) => {
                        return (
                            <span key={index}
                            className={`ps-product__varient-span `}
                            style={{position:"relative",display:"inline-block"}}
                            >
                                {isShown &&
                                <ModuleVarientPopup  varient_value={item.values_values} varientPopup={varientPopup} />
                                } 
                                <button style={{marginTop:"1rem"}}
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}
                                    onClick={() => {
                                        handleButtonActions(item.varent_id,item.secondVarientSlug)
                                        
                                    }}
                                    className={`${
                                        prVarientId === item.secondVarientSlug
                                            ? `active_product-varient__product`
                                            : primaryIndex === item.varent_id
                                            ? `active_product-varient__product`
                                            : `product-varient__product`
                                    } `}
                                    >
                                    {item.values_values}
                                </button>
                            </span>
                        );
                    })}
                </p>
            </ul>
        </div>
    );
};

export default ModuleVarients;
