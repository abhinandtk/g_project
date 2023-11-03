import React from 'react';
import FooterWidgets from './modules/FooterWidgets';
import FooterLinks from './modules/FooterLinks';
import FooterCopyright from './modules/FooterCopyright';
import constants from '~/public/static/data/my-constants/Constants';
import { useSelector } from 'react-redux';

const FooterDefault = ({language}) => {
    
    

    // const datas = useSelector((state) => state.datas.language);
    return (
        <footer className="ps-footer">
            <div className="container">
                <FooterWidgets language={language}/>
                {/* <FooterLinks /> */}
                <FooterCopyright language={language}/>
                {/* {datas === constants['English'] ? (
                    <>
                        <FooterWidgets />
                        <FooterLinks />
                        <FooterCopyright />
                    </>
                ) : (
                    <>
                        <FooterWidgets />
                        <FooterLinks />
                        <FooterCopyright />
                    </>
                )} */}
            </div>
        </footer>
    );
};

export default FooterDefault;
