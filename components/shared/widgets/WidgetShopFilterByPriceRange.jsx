import React, { useEffect, useState } from 'react';
import { Slider, Checkbox, ConfigProvider } from 'antd';
import { useRouter } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';

const WidgetShopFilterByPriceRange = (props) => {
    const [min, setMin] = useState(props.price.min_prize);
    const [max, setMax] = useState(props.price.max_prize);

    function handleChangeRange(value) {
        setMin(value[0]);
        setMax(value[1]);

        props.byFilter('byPrice', value[0], value[1]);
    }

    const labels = Labels(props.language);


    const [a,setA] = useState(props.price.min_prize)
    const [b,setB] = useState(props.price.max_prize)

    function seting (value){

        localStorage.setItem('shopPageMinPrice',value[0])
        localStorage.setItem('shopPageMaxPrice',value[1])
        props.byFilter('byPrice', value[0], value[1]);


        setA(value[0])
        setB(value[1])
    }

    const minPrice1 =parseInt( localStorage.getItem("shopPageMinPrice1"))
    const maxPrice1 = parseInt(localStorage.getItem("shopPageMaxPrice1"))




    
     

    return (
        <aside
            className="widget widget_shop"
            style={{ paddingTop: '0', paddingBottom: '0' }}>

            <figure>
                

                <h4
                    className="widget-title"
                    style={{
                        textAlign:
                            props.language === constants.Arabic && 'right',
                    }}>
                    {labels['By Price']}{' '}
                </h4>

 
                <Slider
        range={{
          draggableTrack: true,
        }}
        value={[localStorage.getItem('shopPageMinPrice'),localStorage.getItem('shopPageMaxPrice')]}
        min={minPrice1}
        max={maxPrice1}
        onChange={(e)=>seting(e)}
      />

                {props.language === constants.English && (
                    <p>
                        Price: ₹ {props.price.min_prize} - ₹{' '}
                        {props.price.max_prize}
                    </p>
                )}
                {props.language === constants.Arabic && (
                    <p>
                        Price: ₹{props.price.max_prize} - ₹{' '}
                        {props.price.min_prize}
                    </p>
                )}
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
