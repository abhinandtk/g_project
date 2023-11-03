import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import LazyLoad from 'react-lazyload';
import constants from '~/public/static/data/my-constants/Constants';

function BrandsCard({ brandIcon }) {
    console.log('brand', brandIcon);
    const router = useRouter();
    return (
        <div className="brand_row">
            <h2
                style={{
                    fontWeight: '500',
                    color: '#000F44',
                    marginBottom: '0px',
                }}
                className=" mb-3">
                Brands
            </h2>
            <div className="row">
                {brandIcon.slice(0, 6).map((obj) => {
                    return (
                        <div
                            className="col-6 col-md-4 col-lg-2 mb-3"
                            key={obj}
                            onClick={() =>
                                router.push(`/shop?brand=${obj.slug_brand}`)
                            }
                            style={{ cursor: 'pointer' }}>
                            <img
                                className="img-fluid brand-img"
                                alt="poster"
                                src={`${constants.port}${obj.icon}`}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BrandsCard;
