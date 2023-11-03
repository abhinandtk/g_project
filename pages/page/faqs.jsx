import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import apis from '~/components/myspace/constants/Api';
import Faqs from '~/components/partials/page/Faqs';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';

function Faqsa() {
    const [faqData, setFaqData] = useState([]);
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'FAQs',
        },
    ];



    const language = useLanguageHook();

    const faqDatas = () => {
        Axios.post(apis.faq, {
            session_id: constants.sessionId,
            language: language,
        })
            .then((res) => {
                setFaqData(res.data.data.faq);
            })
            .catch((err) => {
                showNotification(constants.English,constants.Error);
            });
    };

    useEffect(() => {
        faqDatas();
    }, []);


    return (
        <ContainerHomeElectronics title="Orderd" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                {faqData.length !== 0 && <Faqs datas={faqData} />} 
            </div>
        </ContainerHomeElectronics>
    );
}

export default Faqsa;
