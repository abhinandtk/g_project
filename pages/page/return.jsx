import React, { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import ReactHtmlParser from 'react-html-parser';
import { useEffect } from 'react';
import Axios from 'axios'
import apis from '~/components/myspace/constants/Api';
function Return() {
        const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'privacy policy',
        },
    ];

    const [htmlData,setHtmlData] = useState([])

    useEffect(() => {
        Axios.get(apis.returnPolicy)
        .then((res) => {
            setHtmlData(res.data.return_policy_data)  
        })

    },[])




    return (
        <ContainerHomeElectronics title="Orderd" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h2>Return Policy</h2>
                        </div>
                       { ReactHtmlParser(htmlData) }
                    </div>
                </div>
            </div>
        </ContainerHomeElectronics>
    );
}

export default Return;
