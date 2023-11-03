import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import Product1 from '~/components/elements/products/Product1';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import constants from '~/public/static/data/my-constants/Constants';

export function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const ElectronicProductGroupWithCarousel = ({
    Slug,
    title,
    titleDesc,
    arabicTitle,
    products=[],
    type,
    isLoading_,
    language,
    index,
    relatedProducts
}) => {
    const Router = useRouter();

    const labels = Labels(language);

    const [width, height] = useWindowSize();
    

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 5,
        },
        desktop1: {
            breakpoint: { max: 1300, min: 1024 },
            items: 5,
        },
        tablet1: {
            breakpoint: { max: 1024, min: 900 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 900, min: 664 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 664, min: 0 },
            items: 2,
        },
    };

    // {console.log("carousel page")}


    let productItemsView;
    if (isLoading_) {
        const skeletons = generateTempArray(
            width > 1200 ?  5: width > 992 ? 4 : width > 576 ? 3 : 2
        ).map((item) => (
            <div style={{width:width> 1200 ?  "20%" :width>992 ? '25%':width>576?"33%":"50%",padding:"1rem"}} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row" style={{width:"100%"}}>{skeletons}</div>;
    } else if (products.length > 0) {
 
        
        let ab = [];

        let  slideItems = []

        relatedProducts && products.map((item, index) =>

            
           slideItems.push( <Product1 language={language} key={index} product={item} index={index} />)
        );

        !relatedProducts && products.map((item, index) =>

            
        index <5 && slideItems.push( <Product1 language={language} key={index} product={item} index={index} />)
    );
            



        
     

        productItemsView = (
            <Carousel 
                swipeable={true}
                // draggable={true}
                responsive={responsive}
                ssr={true} 
                // removeArrowOnDeviceType={['tablet1', 'tablet', 'mobile']}
                itemClass="product-carousel__items">
                {slideItems}

            </Carousel>
        );
    } else {
        productItemsView = <p>{labels['No product found']}</p>;
    }


    

    return (
        <div className="ps-product-list ps-shopping" key={{index}} style={{marginBottom:"0px",marginTop:"0px", }}>
            
            <div
            
                className={width>576 && `ml-5 mr-5`}
                
                >
                <div
                    className="ps-section__header"
                    style={{ borderBottom: 'none', paddingBottom: '0' ,marginTop: '1rem',marginBottom: '1rem',backgroundColor:"white"}}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection:
                            language === constants.Arabic
                                    ? 'row-reverse'
                                    : 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}>
                        <h2 style={{ fontWeight: '500', color: '#000F44' }}>
                            {language === constants.Arabic ? arabicTitle : title}
                        </h2>
        
                        {type !== 'noViewAll' && (
                            products.length > 5 &&
                            <>
                                <ul className="ps-section__links ">
                                    <li>
                                        <a
                                            onClick={() => {
                                                Router.push(
                                                    `/shop?${
                                                        type == 'category'
                                                            ? 'category'
                                                            : 'offer'
                                                    }=${Slug}`,
                                                    null,
                                                    { shallow: true }
                                                );
                                            }}>
                                            {labels['View All']}
                                        </a>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                {titleDesc !== null && <h3 style={{ marginLeft:"20px",fontWeight: '500', color: '#000F44' }}>{titleDesc}</h3>}
                <div className="ps-shopping__content" >{productItemsView}</div>
            </div>
        </div>
      
    );
};
export default ElectronicProductGroupWithCarousel;
