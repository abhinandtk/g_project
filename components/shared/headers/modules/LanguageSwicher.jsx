import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage ,changeLanguage} from '~/store/datas/action';
import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
function LanguageSwicher() {
    const [language, setlanguage] = useState('English');
    const dispatch = useDispatch();

    const handleFeatureWillUpdate = (e, flag, name) => {
        e.preventDefault();


        setlanguage(name);
        dispatch(setLanguage(name));
        dispatch(changeLanguage(name));

        localStorage.setItem("language",name)
        window.dispatchEvent(new Event("storage"));


    };

    const labels = Labels(constants.English);

    return (
        <div className="ps-dropdown language ps-dropdown__language" style={{minWidth:"90px"}}>
            <a href="#" >
                {language}
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
    
}

export default LanguageSwicher;
