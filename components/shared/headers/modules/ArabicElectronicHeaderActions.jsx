import React from 'react';
import { useSelector } from 'react-redux';

import constants from '~/public/static/data/my-constants/Constants';
import ArabicLanguageSwicher from './ArabicLanguageSwicher';
import ArabicMiniCart from './ArabicMiniCart';
import ArabicAccountQuickLinks from './ArabicAccountQuickLinks';
import { useRouter } from 'next/router';

const ArabicElectronicHeaderActions = ({ language }) => {
    const wishlistCount = useSelector((state) => state.datas.wishlistCount);
    const router = useRouter();
    return (
        <div className="header__actions" style={{ width: '100%' }}>
            {constants['sessionId'] !== null ? (
                <ArabicAccountQuickLinks
                    language={language}
                    isLoggedIn={true}
                />
            ) : (
                <ArabicAccountQuickLinks
                    language={language}
                    isLoggedIn={false}
                />
            )}
            <a
            onClick={() =>
                router.push('/account/shopping-cart', null, {
                    shallow: true,
                })
            }>
            <ArabicMiniCart language={language} />
            </a>
            <a
                className="header__extra"
                onClick={() =>
                    router.push(
                        constants['sessionId'] === null
                            ? '/account/login'
                            : '/account/wishlist',
                        null,
                        {
                            shallow: true,
                        }
                    )
                }>
                <i className="icon-heart"></i>
                {wishlistCount !== null && wishlistCount !== 0 && (
                    <span>
                        <i>{wishlistCount}</i>
                    </span>
                )}
            </a>

            <ArabicLanguageSwicher />
        </div>
    );
};

export default ArabicElectronicHeaderActions;
