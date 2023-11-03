import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Compare from '~/components/partials/account/Compare';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const ComparePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Compare',
        },
    ];
    return (
        // <ContainerPage title="Compare" boxed={true}>
            <ContainerHomeElectronics title="Compare" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Compare />
            </div>
            </ContainerHomeElectronics>
        // </ContainerPage>
    );
};

export default ComparePage;
