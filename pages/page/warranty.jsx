import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

function warranty() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
  
        {
            text: 'warranty',
        },
    ];

    return (
        <ContainerHomeElectronics title="Orderd" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-section--custom">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>Warranty Policy</h1>
                        </div>
                        <div className="ps-section__content">
                            <p>GAVA plus offers you a 3 month breakage warranty on every product from the date of invoice. We also provide 3 months warranty on all the other spare parts that we replace</p>
                            The 3 months breakage warranty covers :
                            <ul>
                                <li>Screen/LCD that malfunctions, or does not work as intended or designed.</li>
                                <li>Any display issues that may arise without any manual intervention and are related to the screen quality specifically touch issues.</li>
                                <li>One time screen replacement in case of accidental damage, if claimed within 1 month from the date of invoice.</li>
                            </ul>
                            If the screen replaced by us causes any above-mentioned issues, you can claim a brand new screen with the continued warranty of 3 months!
                            <p>Please note:</p> 
                            <ul>
                                <li>The warranty is valid only for the specific device repaired and the original customer. It is not transferable across devices or if the device is sold or handed over to another individual.</li>
                                <li>Mobile phone must be switching on and functioning normally other than screen to process claim request.</li>
                                <li>In case the old screen of your device is not handed over to the technician, the warranty is applicable only for 3 months.</li>
                            </ul>
                            To claim your warranty, you need to:
                            <ul>
                                <li>Share the video of the phone with the prevailing display issue at info@gava.co.in</li>
                                <li>Send us your phone number/order number/IMEI Number. Just about any of it at <a href="info@gava.co.in" target="_blank">info@gava.co.in</a></li>
                            </ul>
                            <p>How can I claim my warranty?</p>
                            <p>
                                You can claim the warranty by writing to us at info@gava.co.in with the service details and the invoice delivered to you at the time of repair. If you need any further assistance, please connect via Chat or write to us at info@gava.co.in
                            </p>
                            <p>How much time will GAVA Repair take to resolve my query, if it is coming under warranty?</p>
                            <p>
                                Our team generally resolves an issue within 24 hours to 48 hours from the moment you send us a query. You will get acknowledgement over mail for your query and your issue will be sorted as soon as possible.
                            </p>
                            <p>
                                Warranty is limited to the parts and/or service(s) that were paid for. If only parts were purchased, the warranty is limited to the replacement of the parts. If parts and repair service were purchased, the warranty extends to cover the labor cost of part replacement and any other repairs specifically resulting from the initial repair.
                            </p>
                            <p>The warranty is not applicable under the following scenarios :</p>
                            <ul>
                                <li>We do not cover any kind of accidental damage and our warranty stands null and void in all such related cases. Direct damage or damages caused as a consequence of accidents will not be covered under the 3 month warranty.</li>
                                <li>Any display issues that may arise without any manual intervention and are related to the screen quality specifically visible lines and blank screen</li>
                                <li>Excessive Damage to the device wherein there is a possibility that internal components might have been affected due to excessive or critical damage to the device or screen. Such excessive visible damage might lead to internal components getting damaged and can cause screen or other system malfunctions. Any part replacement wherein such damage is reported at the time of order completion will not be covered under the warranty provided. Such malfunctions can even become visible after immediately opening of the device and reassembly as any component damage/malfunction would become visible after opening the device and reassembly, GAVA Repair or any of its representative will neither be responsible nor liable for such issues.</li>
                                <li>Subsequent mishandling which causes the frame to bend, twist, or crack will not be entertained</li>
                                <li>Subsequent mishandling with the screen such as hard press that may initiate discoloring or lining on the display</li>
                                <li>Subsequent accidental or purposeful drops</li>
                                <li>Water damage</li>
                                <li>Tampering with internal hardware</li>
                                <li>Damage resulting from attempted customer self-repairs</li>
                                <li>Software issues unrelated to the repair</li>
                                <li>Jail-broken devices</li>
                                <li>New damages unrelated to the original repair</li>
                                <li>Any loss of data occurring as a result of the repair customers are advised to back up all data prior to the repair attempt</li>
                            
                            </ul>
                            <p>Our warranty also does not cover the outcome of a repair if certain pre-repair conditions exist, including:</p>
                            <ul>
                                <li>Existence of known manufacturing and/or performance issues related to the device separate from repair, as noted prior to the repair</li>
                                <li>Existence of damage to the device frame, as noted prior to the repair</li>
                                <li>Water damage</li>
                                <li>Jail-broken devices</li>
                                <li>Tampering with internal hardware: Under certain conditions, internal damage may make a repair impossible. Our specialist will be able to explain in detail upon diagnosing your specific device. If you have any doubts, we recommend that you do not attempt to repair the device on your own, as any damage may affect the reparability of your device.</li>
                            </ul>




                        </div>
                    </div>
                </div>
            </div>
        </ContainerHomeElectronics>
    );
}

export default warranty;
