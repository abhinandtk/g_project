import React, { useRef, useState } from 'react';
import Router from 'next/router';

import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';

const ArabicSearchHeader = () => {
    const inputEl = useRef(null);

    const [keyword, setKeyword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        keyword.length !== 0 && Router.push(`/search?keyword=${keyword}`);
    }

    const labels = Labels(constants.Arabic);

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}
            style={{width:"100%"}}>
            <button onClick={handleSubmit}>{labels['Search']}</button>

            <div className="ps-form__input">
                <input
                    ref={inputEl}
                    className="form-control"
                    type="text"
                    dir="rtl"
                    value={keyword}
                    placeholder={labels["I'm Shopping for..."]}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
        </form>
    );
};

export default ArabicSearchHeader;
