import React from 'react';
import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';

const { TabPane } = Tabs;

const DefaultDescription = ({product,comments,language}) => {
    const labels =Labels(language)

    
    return (
        <div className="ps-product__content ps-tab-root" >
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab= {labels['Specification']} key="1">
                    <PartialSpecification product={product}/>
                </TabPane>
                <TabPane tab={labels['Description']} key="2"  >
                    <PartialDescription language={language} product={product}/>
                </TabPane>

                {/* <TabPane tab={` ${labels['Reviews']} (${comments.length})`} key="4">
                    <PartialReview language={language} comments={comments}/>
                </TabPane> */}
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
