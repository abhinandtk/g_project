import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProduct = () => {
    return (
        <div className="ps-skeleton ps-skeleton--product " >
            <Skeleton.Input active={true} size={350} style={{height: 200}} />
            <Skeleton active={true} paragraph={{ rows: 1, title: true }} style={{marginTop:"1rem"}}/>
        </div>
    );
};

export default SkeletonProduct;
