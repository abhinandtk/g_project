import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LazyLoad from 'react-lazyload';
import { Col, Row, Space } from 'antd';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
function BigCategories({ categories }) {
    const [itemCount, setItemCount] = useState(null);
    const [bigCat, setBigCat] = useState([]);

    let bannerView;
    useEffect(() => {   
        Axios.post(apis.mainpage)
        .then((res) => {
            setBigCat(res.data.data.all_category); 
            console.log("1212121212121111111")
            console.log(res.data.data.all_category)
        });
    },[])    

    const img = new Image();
    img.onload = function () {
        if (this.width < 400) {
            setItemCount(2);
        } else {
            setItemCount(1);
        }
    };
    img.src =
        categories.length !== 0 &&
        `https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg`;

    if (itemCount !== null) {
        const responsive = {
            mobile: {
                breakpoint: { max: 576, min: 0 },
                items: itemCount,
            },
        };

        bannerView = (
            <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true}
                removeArrowOnDeviceType={['mobile']}
                itemClass="product-carousel__items">
                {categories.length !== 0 &&
                    bigCat.map((item, index) => {
                        return (
                            <Col  style={{ boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 8px", marginTop: "1rem", flex:1, }} key={item}>
                            <h4 style={{ textAlign: "center",paddingTop:'10px' }}>{item.Category_Name}</h4>
                            { item.sub_category[0] != null && item.sub_category[1] != null ? 
                            <Space
                                direction="horizontal"
                                style={{ width: '100%', justifyContent: 'space-around'}}>
                                <a href={`/shop?category=${item.sub_category[0].slug_category}`}>
                                    <img
                                        src={item.sub_category[0].home_tile === null ? `${constants.port}/media/${item.sub_category[0].category_image}` : `${constants.port}/media/${item.sub_category[0].home_tile}` }
                                        alt={item.sub_category[0].Category_Name}
                                        title={item.sub_category[0].Category_Name}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <p>{ item.sub_category[0].home_tile_name === null ? item.sub_category[0].Category_Name : item.sub_category[0].home_tile_name}</p>
                                </a>

                                <a href={`/shop?category=${item.sub_category[1].slug_category}`}>
                                    <img
                                        src={item.sub_category[1].home_tile === null ? `${constants.port}/media/${item.sub_category[1].category_image}` : `${constants.port}/media/${item.sub_category[1].home_tile}` }
                                        alt={item.sub_category[1].Category_Name}
                                        title={item.sub_category[1].Category_Name}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <p>{ item.sub_category[1].home_tile_name === null ? item.sub_category[1].Category_Name : item.sub_category[1].home_tile_name}</p>
                                </a>
                            </Space> : <Space></Space>}
                            { item.sub_category[2] != null && item.sub_category[3] != null ? 
                            <Space
                                direction="horizontal"
                                style={{ width: '100%', justifyContent: 'space-around' }}>
                                <a href={`/shop?category=${item.sub_category[2].slug_category}`}>
                                    <img
                                        src={item.sub_category[2].home_tile === null ? `${constants.port}/media/${item.sub_category[2].category_image}` : `${constants.port}/media/${item.sub_category[2].home_tile}` }
                                        alt={item.sub_category[2].Category_Name}
                                        title={item.sub_category[2].Category_Name}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <p>{ item.sub_category[2].home_tile_name === null ? item.sub_category[2].Category_Name : item.sub_category[2].home_tile_name}</p>
                                </a>

                                <a href={`/shop?category=${item.sub_category[3].slug_category}`}>
                                    <img
                                        src={item.sub_category[3].home_tile === null ? `${constants.port}/media/${item.sub_category[3].category_image}` : `${constants.port}/media/${item.sub_category[3].home_tile}` }
                                        alt={item.sub_category[3].Category_Name}
                                        title={item.sub_category[3].Category_Name}
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                    <p>{ item.sub_category[3].home_tile_name === null ? item.sub_category[3].Category_Name : item.sub_category[3].home_tile_name}</p>
                                </a>
                            </Space> : <Space></Space>}
                        </Col>
                        );
                    })}
            </Carousel>
        );
    }

    return (
        itemCount !== null && (
            <>
                <div className="banner-cards" >
                    {/* {categories.length !== 0 &&
                        categories.map((item, index) => {
                            return ( */}

                            {
                                bigCat.map((item, index) => {
                                    return (  <div key={item}
                                    style={{ padding: '1rem', paddingTop: "0", paddingBottom: "0", flex: 1  }}>


                                        <Col  style={{ boxShadow: " rgba(0, 0, 0, 0.15) 0px 3px 8px", marginTop: "1rem", flex:1, }}>
                                            <h4 style={{ textAlign: "center",paddingTop:'10px' }}>{item.Category_Name}</h4>
                                            { item.sub_category[0] != null && item.sub_category[1] != null ? 
                                            <Space
                                                direction="horizontal"
                                                style={{ width: '100%', justifyContent: 'space-around'}}>
                                                <a href={`/shop?category=${item.sub_category[0].slug_category}`} >   
                                                <div>
                                                    <img
                                                        src={item.sub_category[0].home_tile === null ? `${constants.port}/media/${item.sub_category[0].category_image}` : `${constants.port}/media/${item.sub_category[0].home_tile}` }
                                                        alt={item.sub_category[0].Category_Name}
                                                        title={item.sub_category[0].Category_Name}
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                    <p>{ item.sub_category[0].home_tile_name === null ? item.sub_category[0].Category_Name : item.sub_category[0].home_tile_name}</p>
                                                </div></a>
                                                <a href={`/shop?category=${item.sub_category[1].slug_category}`} >
                                                <div>
                                                    <img
                                                        src={item.sub_category[1].home_tile === null ? `${constants.port}/media/${item.sub_category[1].category_image}` : `${constants.port}/media/${item.sub_category[1].home_tile}` }
                                                        alt={item.sub_category[1].Category_Name}
                                                        title={item.sub_category[1].Category_Name}
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                    <p>{ item.sub_category[1].home_tile_name === null ? item.sub_category[1].Category_Name : item.sub_category[1].home_tile_name}</p>
                                                </div></a>
                                            </Space> :  <Space></Space>}
                                            { item.sub_category[2] != null && item.sub_category[3] != null ?
                                            <Space
                                                direction="horizontal"
                                                style={{ width: '100%', justifyContent: 'space-around' }}>
                                                <a href={`/shop?category=${item.sub_category[2].slug_category}`}>
                                                <div>
                                                    <img
                                                        src={item.sub_category[2].home_tile === null ? `${constants.port}/media/${item.sub_category[2].category_image}` : `${constants.port}/media/${item.sub_category[2].home_tile}` }
                                                        alt={item.sub_category[2].Category_Name}
                                                        title={item.sub_category[2].Category_Name}
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                    <p>{ item.sub_category[2].home_tile_name === null ? item.sub_category[2].Category_Name : item.sub_category[2].home_tile_name}</p>
                                                </div></a>
                                                <a href={`/shop?category=${item.sub_category[3].slug_category}`}>
                                                <div>
                                                    <img
                                                        src={item.sub_category[3].home_tile === null ? `${constants.port}/media/${item.sub_category[3].category_image}` : `${constants.port}/media/${item.sub_category[3].home_tile}` }
                                                        alt={item.sub_category[3].Category_Name}
                                                        title={item.sub_category[3].Category_Name}
                                                        style={{ width: '100px', height: '100px' }}
                                                    />
                                                    <p>{ item.sub_category[3].home_tile_name === null ? item.sub_category[3].Category_Name : item.sub_category[3].home_tile_name}</p>
                                                </div></a>
                                            </Space> :  <Space></Space> }
                                        </Col>
                                </div>
                                )})
                            }
                </div>
                
                <div className="banner-card-mobile">{bannerView}</div>
            </>
        )
    );
}

export default BigCategories;
