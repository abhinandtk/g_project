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

const ArabicAccountQuickLinks = ({ isLoggedIn,language }) => {
    // const language = useLanguageHook();
    const labels = Labels(language);
  

    
    const handleLogout = (e) => {
        e.preventDefault();
        Axios.post(apis.logout, {
            session_id: constants['sessionId'],
            language: language,
        })

            .then((res) => {
                if (res.data.status === 1) {
                    localStorage.removeItem('session_id');
                    Router.push('/account/login');
                }
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
            text: labels['Change Password'],
            url: '/account/change-password',
            
        },
        {
            text: labels['Orders'],
            url: '/account/order-history',
            
        },

        
        
        {
            text: labels['Address'],
            url: '/account/addresses',
        },
    ];
    // const { isLoggedIn } = props;

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));


    if (isLoggedIn === true) {
        return (
            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content ps-arabic-account-quicklink__items " >
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                            {labels['Logout']}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            // <div className="ps-block--user-header">
            //     <div className="ps-block__left">
            //         <i className="icon-user"></i>
            //     </div>
            //     <div className="ps-block__right">
            //         <Link href="/account/login">
            //             <a>Login</a>
            //         </Link>
            //         <Link href="/account/register">
            //             <a>Register</a>
            //         </Link>
            //     </div>
            // </div>

            <div className="ps-block--user-account">
                <i className="icon-user"></i>
                <div className="ps-block__content ps-arabic-account-quicklink__items">
                    <ul className="ps-list--arrow">
                        {/* <Link href="/account/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/account/register">
                            <a>Register</a>
                        </Link> */}

                        <li className="ps-block__footer" style={{padding: "1rem 0.5rem",marginBottom:"0"}}>
                            <a href="#" onClick={(e) => Router.push('/account/login')}>
                            {labels['Login']}

                            </a>
                        </li>
                        <li className="ps-block__footer" style={{padding: "1rem 0.5rem",marginBottom:"0"}}>
                            <a href="#" onClick={(e) => Router.push('/account/register')}>
                            {labels['Register']}

                            </a>
                        </li>
                        {/* {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Logout
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
};

// export default connect((state) => state)(AccountQuickLinks);
export default ArabicAccountQuickLinks;
