import React from 'react';
import { useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
const FooterCopyright = ({language}) => {


    const labels = Labels(language);

    return (
        
            language === constants['English'] ? (
                
                <div className="ps-footer__copyright" style={{borderTop:"1px solid #b7abab"}}>
                    <p>&copy; {labels['2022 GAVA. All Rights Reserved']}. Powered by <a href='https://primalcodes.com' target='_blank' rel="noreferrer">primalcodes.com</a></p>
                    <p>
                        {/* <span> {labels['We Using Safe Payment For:']} </span> */}
                        {/* <a href="#">
                            <img
                                src="/static/img/payment-method/1.jpg"
                                alt="Martfury"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/static/img/payment-method/2.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                        {/* <a href="#">
                            <img
                                src="/static/img/payment-method/3.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                        {/* <a href="#">
                            <img
                                src="/static/img/payment-method/4.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                        {/* <a href="#">
                            <img
                                src="/static/img/payment-method/5.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                    </p>
                </div>
            ) : (
                <div className="ps-footer__copyright" style={{borderTop:"1px solid #b7abab"}}>

                    <p >
                        

                        {/* <a href="#" style={{marginLeft:"0.5rem"}}>
                            <img
                                src="/static/img/payment-method/1.jpg"
                                alt="Martfury"
                            />
                        </a>
                        <a href="#" style={{marginLeft:"0.5rem"}}>
                            <img
                                src="/static/img/payment-method/2.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                        <a href="#" style={{marginLeft:"0.5rem"}}> 
                            <img
                                src="/static/img/payment-method/3.jpg"
                                alt="Martfury"
                            />
                        </a>
                        {/* <a href="#" style={{marginLeft:"0.5rem"}}>
                            <img
                                src="/static/img/payment-method/4.jpg"
                                alt="Martfury"
                            />
                        </a> */}
                        <a href="#" style={{marginLeft:"0.5rem"}}>
                            <img
                                src="/static/img/payment-method/5.jpg"
                                alt="Martfury"
                            />
                        </a>
                        <span style={{marginLeft:"2rem"}}> {labels['We Using Safe Payment For:']} </span>
                    </p>
                    <p >&copy; {labels['2022 GAVA. All Rights Reserved']}</p> 
                </div>
            )
        
    )
};
export default FooterCopyright;
