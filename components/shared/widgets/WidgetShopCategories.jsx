import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import { Labels } from '~/public/static/data/my-constants/Labels';

const WidgetShopCategories = (props) => {
    const Router = useRouter();
    function getItem(label, key, children, icon, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    let categoriesView;

    let items_ = [];


    if (props.category.length > 0) {
        const items = props.category.map((item) => {
            <>
                {items_.push(
                    getItem(
                        props.language === constants.English
                            ? item.Category_Name
                            : item.arabic_translator,
                        item.slug_category,
                        item.sub_category.length !== 0 &&
                            item.sub_category.map((children) =>
                                getItem(
                                    props.language === constants.English
                                        ? children.Category_Name
                                        : children.arabic_translator,

                                    children.slug_category
                                )
                            )
                    )
                )}
            </>;
        });
        categoriesView = <ul className="ps-list--categories">{items}</ul>;
    }

    const labels = Labels(props.language);

    return (
        <aside className="widget widget_shop" style={{ paddingTop: '10px' }}>
            <h4
                className="widget-title"
                style={{
                    textAlign: props.language === constants.Arabic && 'right',
                }}>
                {labels['Categories']}{' '}
            </h4>
            <div className="ps-list--categories">
                <ConfigProvider
                    direction={
                        props.language === constants.English ? 'ltr' : 'rtl'
                    }>
                    <Menu
                        onClick={(e) => {
                            Router.push(
                                `/shop?category=${e.key.split(',').pop()}`
                            );
                        }}
                        defaultOpenKeys={[1]}
                        defaultSelectedKeys={[0]}
                        mode="inline"
                        items={items_}
                    />
                    
                </ConfigProvider>
            </div>
        </aside>
    );
};

export default WidgetShopCategories;

