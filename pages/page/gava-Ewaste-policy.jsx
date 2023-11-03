import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

function GavaEwastePolicy() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
  
        {
            text: 'Ewaste policy',
        },
    ];

    return (
        <ContainerHomeElectronics title="Orderd" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />

            <div className="ps-page--my-account">
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>E - Waste Policy</h1>
                        </div>
                        <div className="ps-section__content">
                            <h3>Page What is “E-Waste”?</h3>

                            <p>
                            As per the E-waste (Management) Rules, 2016, &apos;E-waste&apos; means electrical and electronic equipment, whole or in part discarded as waste by the consumer or bulk consumer as well as rejected from manufacturing, refurbishment, and repair processes.
                            </p>
                            <p>
                            Electronics such as mobile phones, TVs, laptops, printers, fax machines or even their parts, which have reached the end of their useful life are called “E-Waste”. If not recycled in an environmentally sound way, e-waste poses a range of environmental risks.
                            </p>
                            <table className='table_ewaste_policy'>
                                <tr>
                                    
                                    <th><center><b>Important Do&apos;s</b></center></th>
                                    <th><center><b>Important Don&apos;ts</b></center></th>
                                </tr>
                                <tr>
                                    <td>As our valued customer, we encourage you to channelize your e-waste only through the collection channels set up by GAVA e-waste buddy.</td>
                                    <td>Do not dismantle any electronics/ electrical devices at home. Improper dismantling or recycling of e-waste is harmful to the environment.</td>
                                </tr>
                                <tr>
                                    <td>Keep the product in an isolated area, after it becomes non-functional/unrepairable in order to prevent its accidental breakage.</td>
                                    <td>Do not mix e-waste in your home dustbins with other municipal waste.</td>
                                </tr>
                                <tr>
                                    <td>Always disconnect the battery from the product and ensure any glass surface is protected against breakage.</td>
                                    <td>Do not sell the e-waste to any unauthorized agencies/scrap dealers/informal waste collectors.</td>
                                </tr>
                            </table>

                            <h3>e-Waste Collector Programme</h3>
                            <p>
                                The waste collector program focuses on formalizing the waste pickers and aggregators. By being a part of the program, waste pickers and waste aggregators become a collection channel of the PRO and bring transparency to their processes.
                            </p>
                            <h3>Residential Welfare Associations (RWAs) Programme</h3>
                            <p>
                                The objective of the Residential Welfare Associations (RWAs) Programme is to establish collection channels and provide a responsible E-waste management solution to the individual consumers in urban areas of India.
                            </p>
                            <p>
                            The Programme serves the E-waste management needs of Residents of Apartment Complexes and Residential Welfare Associations, where in collection drives are held, and consumers are educated on issues related to e-waste.
                            </p>
                            <h3>Institutional and schools welfare associations programme</h3>
                            <p>
                                The main motive of this programme is to give awareness classes to students and faculty about E-waste management and to establish collection channels and provide a responsible E-waste management solution to the consumer. In October 14 Gava plans to plant trees at various places. 
                            </p>
                            <h3>E-waste collections events</h3>
                            <p>
                                E-waste collection events are a great opportunity for the organization, and all company employees to properly recycle old electronics, whether from the office or their home.
                            </p>
                    
                        </div>
                    </div>
                </div>
            </div>
        </ContainerHomeElectronics>
    );
}

export default GavaEwastePolicy;
