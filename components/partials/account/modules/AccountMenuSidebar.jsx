import React from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { showNotification } from '~/utilities/common-helpers';

const AccountMenuSidebar = ({ data, activeType1,language }) => {
    const { asPath } = useRouter();
    // const language = useSelector((state) => state.datas.language);
    // // const language = useLanguageHook();


    const labels = Labels(language);    
    const Router = useRouter()

    const handleLogout = (e) => {
        e.preventDefault();
        Axios.post(apis.logout, {
            session_id: constants['sessionId'],
            language: language,
        })
            .then((res) => {
                localStorage.removeItem('session_id');
                showNotification(language, constants.Success,labels['logout successfully'])
                
                Router.push('/account/login', null, { shallow: true });
                // window.location.assign('/account/login')
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
            text: labels['Address'],
            url: '/account/addresses',
            active:
                asPath.split('/')[2] === 'addresses'
                    ? true
                    : asPath.split('/')[2] === 'edit-address'
                    ? true
                    : false,
        },
        {
            text: labels['Change Password'],
            url: '/account/change-password',
            active: asPath.split('/')[2] === 'change-password' && true,
        },
        {
            text: labels['Orders'],
            url: '/account/order-history',
            active:
                asPath.split('/')[2] === 'order-history'
                    ? true
                    : asPath.split('/')[2] === 'my-orders'
                    ? true
                    : false,
        },
    ];

    return (
        <aside className="ps-widget--account-dashboard"
            style={{ marginBottom: '2rem' }}>
                {language === constants['English'] && (
            <div className="ps-widget__header" >
                <img src="/static/img/user.jpg" />
                <figure>
                    <div>
                        <p> {constants['userName']}</p>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width:"100%",
                               
                            }}>
                            <figcaption  style={{width:"70%",wordBreak:"break-all"}}> {constants['email']}</figcaption>
                            <div style={{width:"30%",marginLeft:"2vw"}}> 
                                <img
                                    src="/static/img/coin.png"
                                    style={{ width: '25px', height: '25px' }}
                                    alt=""
                                />{' '}
                                
                                <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                    }}>
                                    {' '}
                                    {constants.rewardPoint === 'undefined'
                                        ? 0
                                        : constants.rewardPoint}
                                </span>
                            </div>
                        </div>
                    </div>
                </figure>
            </div>
            )}
                {language === constants['Arabic'] && (
            <div className="ps-widget__header">
                <figure>
                    <div >

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width:"100%",
                            }}>
                            <div style={{width:"30%",marginLeft:"2vw"}}>
                            <span
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        
                                    }}>
                                    {' '}
                                    {constants.rewardPoint === 'undefined'
                                        ? 0
                                        : constants.rewardPoint}
                                </span>
                                <img
                                    src="/static/img/coin.png"
                                    style={{ width: '25px', height: '25px',marginRight:"1rem",
                                }}
                                    alt=""
                                />
                              
                             
                            </div>
                            <div style={{display:"flex",flexDirection:"column", marginRight:"1rem"}}>
                             <p style={{textAlign:"right"}}> {constants['userName']}</p>

                            <figcaption style={{textAlign:"right",wordBreak:"break-all",width:"70%"}}>{constants['email']}</figcaption>
                            </div>

                        </div>

                    </div>
                </figure>


                <img src="/static/img/user.jpg" />

            </div>
            )}
            <div
                className="ps-widget__content"
                style={{
                    textAlign: language === constants['Arabic'] && 'right',
                }}>
                <ul>
                    {accountLinks.map((link) => (
                        <li
                            key={link.text}
                            className={link.active ? 'active' : ''}>
                            <Link href={link.url}>
                                <a>
                                    {/* <i className={link.icon}></i> */}
                                    {link.text}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li>
                        {/* <Link href="/account/my-account"> */}
                            <a onClick={(e)=>handleLogout(e)}>{labels['Logout']}</a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default AccountMenuSidebar;
