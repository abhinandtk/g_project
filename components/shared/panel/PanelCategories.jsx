import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import categories from '../../../public/static/data/static-categories.json';
import { ConfigProvider } from 'antd';
import { useRouter } from 'next/router';

const { SubMenu } = Menu;


const PanelCategories= (props)=>{
    const Router = useRouter()
    // constructor(props) {
    //     super(props);
    // }

    // const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    // state = {
    //     openKeys: ['sub1'],
    // };
    // onOpenChange = openKeys => {
    //     const latestOpenKey = openKeys.find(
    //         key => this.state.openKeys.indexOf(key) === -1
    //     );
    //     if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //         this.setState({ openKeys });
    //     } else {
    //         this.setState({
    //             openKeys: latestOpenKey ? [latestOpenKey] : [],
    //         });
    //     }
    // };

    

    // render() {
        let items_ = [

        ];

        function getItem(label, key, children, icon, type) {
            return {
                key,
                icon,
                children,
                label,
                type,
            };
        }

        const handleClick = (e)=>{
            Router.push(`/shop?category=${e}`);
            props.handleDrawerClose()
        }
    
       props.allNavbarData.categories.map((item) => {
                <>
                    {items_.push(
                        getItem(
                            item.Category_Name,
                            item.slug_category,
                            item.sub_category.length !== 0 &&
                                item.sub_category.map((children) =>
                                    getItem(
                                        children.Category_Name,
                                        children.slug_category
                                    )
                                )
                        )
                    )}
                </>;
            });
           
        
        return (
        <ConfigProvider direction="ltr">

            {/* <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {categories.map(category => (
                    <Menu.Item key={category.id}>
                        <a href={`/shop?category=${category.slug}`}>
                            {category.name}
                        </a>
                    </Menu.Item>
                ))}
            </Menu> */}
          

            <Menu
            //  Router.push(`/shop?${type=="category"?"category":"offer"}=${Slug}`)
                    onClick={(e) => {
                        // props.byFilter('byCategory', e.key.split(',').pop());
                  
                   handleClick(e.key.split(',').pop())
                    }}
                    // defaultSelectedKeys={items_.map(
                    //     (i) => i.key === props.slug && i.key
                    // )}
                   
                    // onOpenChange={
                    //     Router.push(`/shop?category=${e.key.split(',').pop()}`)

                    // }

                    
                    mode="inline"
                    items={items_}
                />
                  </ConfigProvider>
        );
    // }
}

export default PanelCategories;
