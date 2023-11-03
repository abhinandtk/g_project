import { List, Menu } from 'antd';
const { SubMenu } = Menu;
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
function HamburgerMenu({ source }) {
    const [show, setShow] = useState(false);
    const allBrands = useSelector((state) => state.datas.allBrands);

    console.log('source', source, allBrands);

    const router = useRouter();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {' '}
            <svg
                width="22"
                height="18"
                style={{ cursor: 'pointer' }}
                classNameName="menu my-2"
                onClick={() => handleShow()}
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 1H21M1 9H21M1 17H21"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                style={{ zIndex: 9999 }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="mx-2">
                        <ul className="list-group category-list">
                            {source &&
                                source.map((item, index) => (
                                    <li
                                        key={index}
                                        className="list-group-item category-ham"
                                        style={{ border: 'none' }}>
                                        <div className="category-header">
                                            <strong
                                                style={{
                                                    cursor: 'pointer',
                                                }}
                                                onClick={() =>
                                                    router.push(item.url)
                                                }>
                                                {item.text}
                                            </strong>
                                        </div>
                                        <ul className="list-group subcategory mt-2">
                                            {item.megaContent &&
                                                item.megaContent.map(
                                                    (sub, index_) =>
                                                        sub.megaItems &&
                                                        sub.megaItems.map(
                                                            (sub_, i) => (
                                                                <li
                                                                    key={i}
                                                                    onClick={() =>
                                                                        router.push(
                                                                            sub_.url
                                                                        )
                                                                    }
                                                                    style={{
                                                                        cursor: 'pointer',
                                                                        background:
                                                                            '#FAFAFA',
                                                                    }}
                                                                    className="list-group-item">
                                                                    {sub_.text}
                                                                </li>
                                                            )
                                                        )
                                                )}
                                        </ul>
                                    </li>
                                ))}
                            <li
                                className="list-group-item category-ham"
                                style={{ border: 'none' }}>
                                <div className="category-header">
                                    <strong>Brands</strong>
                                </div>
                                <ul className="list-group subcategory mt-2">
                                    {allBrands &&
                                        allBrands.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() =>
                                                    router.push(
                                                        `/shop?brand=${item.slug_brand}`
                                                    )
                                                }
                                                style={{
                                                    cursor: 'pointer',
                                                    background: '#FAFAFA',
                                                }}
                                                className="list-group-item">
                                                {item.brand}
                                            </li>
                                        ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default HamburgerMenu;
