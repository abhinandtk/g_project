import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { showNotification } from '~/utilities/common-helpers';
import Router from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const AccountQuickLinks = ({ isLoggedIn,language }) => {
    // const language = useLanguageHook();
    
    const labels = Labels(language);

    const handleLogout = (e) => {
        e.preventDefault();
        Axios.post(apis.logout, {
            session_id: constants['sessionId'],
            language: language,
        })
            .then((res) => {
                localStorage.removeItem('session_id');
                showNotification(language,constants.Success,labels['logout successfully'])
                // Router.push('/account/login', null, { shallow: true });
                window.location.assign('/account/login')

            })
            .catch((err) => {
                showNotification(
                    language,
                    constants.Error

                );
            });
        // return notification;
    };
    const accountLinks = [
        {
            text: labels['My Orders'],
            url: '/account/order-history',
        },

        {
            text: labels['Change Password'],
            url: '/account/change-password',
        },
        {
            text: labels['My Address'],
            url: '/account/addresses',
        },
    ];

    // const { isLoggedIn } = props;

    // View
    const linksView = accountLinks.map((item) => {
        return (
            <li key={item.url}>
                <Link href={item.url}>
                    <a>{item.text}</a>
                </Link>
            </li>
        );
    });

    if (isLoggedIn === true) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {/* {linksView} */}
                        {/* <li> */}
                            {/* <li style={{paddingTop:"0.5rem",listStyle:"none",border:"1px solid blue"}}> */}
                           <div  className='account-quickliks__items' onClick={()=>Router.push("/account/order-history")}> 
                            {/* <Link href="/account/order-history"> */}
                                My Orders
                            {/* </Link> */}
                            </div>
                            {/* </li> */}
                        {/* </li>{' '}
                        <li> */}
                        {/* <li style={{paddingTop:"0.5rem",listStyle:"none",border:"1px solid blue"}}> */}
                            {/* <Link href="/account/addresses"> */}
                           <div  className='account-quickliks__items' onClick={()=>Router.push("/account/addresses")}> 

                                My Address
                                </div>
                            {/* </Link> */}
                            {/* </li> */}
                        {/* </li>{' '}
                        <li> */}
                        {/* <li style={{paddingTop:"0.5rem",listStyle:"none",border:"1px solid blue"}}> */}
                        
                            {/* <Link href="/account/change-password"> */}
                           <div  className='account-quickliks__items' onClick={()=>Router.push("/account/change-password")}> 

                                Change Password
                                </div>
                            {/* </Link> */}
                            {/* </li> */}
                        {/* </li> */}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                {labels['Logout']}
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <button onClick={(e)=>abc(e)}>fdsf</button> */}
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {/* <Link href="/account/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/account/register">
                            <a>Register</a>
                        </Link> */}

                        <li
                            className="ps-block__footer"
                            style={{
                                padding: '1rem 0.5rem',
                                marginBottom: '0',
                            }}>
                            <a
                                href="#"
                                onClick={(e) => Router.push('/account/login')}>
                                {labels['Login']}
                            </a>
                        </li>
                        <li
                            className="ps-block__footer"
                            style={{
                                padding: '1rem 0.5rem',
                                marginBottom: '0',
                            }}>
                            <a
                                href="#"
                                onClick={(e) =>
                                    Router.push('/account/user-register')
                                }>
                                {labels['Register']}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default AccountQuickLinks;
