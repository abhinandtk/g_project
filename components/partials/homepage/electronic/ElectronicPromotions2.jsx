import React from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';

const ElectronicPromotions2 = (props) => (
    <div className="ps-promotions">
        <div className="container">
            <Link href={`${props.url}`}>
                <a className="ps-collection">
                    <img
                        // src="/static/img/promotions/home-7/3.jpg"

                        src={`${constants.port}${props.image}`}
                        alt={constants.ZAINBAY}
                    />
                </a>
            </Link>
        </div>
    </div>
);

export default ElectronicPromotions2;
