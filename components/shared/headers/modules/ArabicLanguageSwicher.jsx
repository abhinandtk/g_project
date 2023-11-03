import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeLanguage, setLanguage } from '~/store/datas/action';
import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
function ArabicLanguageSwicher() {
    const labels = Labels(constants.Arabic);

    const [language, setlanguage] = useState(labels['Arabic']);
    const dispatch = useDispatch();

    const handleFeatureWillUpdate = (e, flag, name) => {
        e.preventDefault();

        setlanguage(name);
        dispatch(setLanguage(name));
        dispatch(changeLanguage(name));

        localStorage.setItem("language",name)
        window.dispatchEvent(new Event("storage"));


    };

    return (
        <div className="ps-dropdown language ps-dropdown__language arabic-ps-dropdown__language">
            <a href="#">
                {language}
                {/* <img src={countryFlag} alt="zainbay" /> */}
            </a>
            <ul className="ps-dropdown-menu">
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            handleFeatureWillUpdate(
                                e,
                                '/static/img/flag/en.png',
                                'english'
                            );
                            setlanguage("english");
                        }}>
                        {labels['English']}
                        {/* <img src="/static/img/flag/en.png" alt="martfury" /> */}
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            handleFeatureWillUpdate(
                                e,
                                '/static/img/flag/fr.png',
                                'arabic'
                            );
                            setlanguage(labels['Arabic']);
                        }}>
                        {labels['Arabic']}
                        {/* <img src="/static/img/flag/fr.png" alt="martfury" /> */}
                    </a>
                </li>
            </ul>
        </div>
    );
    // }
}

export default ArabicLanguageSwicher;
