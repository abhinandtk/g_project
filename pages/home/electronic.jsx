import React from 'react';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import ProductGroupDealOfDay from '~/components/partials/product/ProductGroupDealOfDay';
import ElectronicProductGroupWithCarousel from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import ElectronicBanner from '~/components/partials/homepage/electronic/ElectronicBanner';
import ElectronicTopCategories from '~/components/partials/homepage/electronic/ElectronicTopCategories';
import ElectronicPromotions2 from '~/components/partials/homepage/electronic/ElectronicPromotions2';

const HomeElectronicsPage = () => {
    const smartPhoneLinks = ['Iphone, Ipad, Samsung'];
    const electronicLinks = [
        'Smart',
        'TV LED',
        'Air Conditions',
        'Sony Speakers',
        'Panasonic Refrigerations',
    ];
    const computerLinks = [
        'Laptop',
        'Desktop PC',
        'Smartphone',
        'Mainboards',
        'PC Gaming',
        'Accessories',
    ];
    const cameraLinks = [
        'Videos',
        'Projectors',
        'Digital Cameras',
        'Printers & Scanners',
        'Accessorices',
    ];
    return (
        <ContainerHomeElectronics>
            <ElectronicBanner />
            <ElectronicTopCategories />
            {/* <ProductGroupDealOfDay
                categorySlug="computers-and-technologies"
                boxed={true}
            /> */}
            <ElectronicProductGroupWithCarousel
                collectionSlug="electronics-best-sellers"
                // title="Best Seller In The Last Month"
                 title="Top Deals"

                links={smartPhoneLinks}
            />

            <ElectronicPromotions2 />

            <ElectronicProductGroupWithCarousel
                collectionSlug="electronic_computer_technology"
                title="Computers & Technology"
                links={computerLinks}
            />
            <ElectronicProductGroupWithCarousel
                categorySlug="consumer-electrics"
                title="Home Electronics"
                links={electronicLinks}
            />

            <ElectronicProductGroupWithCarousel
                collectionSlug="electronics-cameras-and-videos"
                title="Cameras & Videos"
                links={cameraLinks}
            />
        </ContainerHomeElectronics>
    );
};

export default HomeElectronicsPage;
