import React from 'react';

import { Checkbox, ConfigProvider} from 'antd';
import constants from '~/public/static/data/my-constants/Constants';

                                                        
const WidgetShopVarients = ({ language,name, byFilter, values,filterBy }) => {

        

    return (
        

        <aside className="widget widget_shop widget_shop--brand" style={{paddingTop:"0",paddingBottom:"0",}}>
            <h4 className="widget-title" style={{ textAlign:language === constants.Arabic && "right" }}>By {name}</h4>
            <ConfigProvider  >
            <figure style={{textAlign:language === constants.Arabic && "right"}}>
                {values.map((item,index) => (
                    <>
                        <Checkbox
                            key={index}
                            onChange={(e) => {
                                byFilter(
                                    'byVarient',
                                    item.id,    
                                    e.target.checked
                                );
                            }}

                            value={item.slug_brand}
                            checked={filterBy.byVarient.includes(item.id)}
                            >
                            {item.Varient_Values }
                        </Checkbox>{' '}
                        <br />
                        <br />
                    </>
                ))}
            </figure>
        </ConfigProvider>

        </aside>
    );
};

export default WidgetShopVarients;
