import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import apis from '~/components/myspace/constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';

function RepairingServiceForm({ device }) {
    const [errorMsg, setErrorMsg] = useState('');
    const [apiSuccess, setApiSuccess] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [serviceData, setServiceData] = useState({
        name: '',
        phone: '',
        address: '',
        devicetype: '',
        date: '',
        time: '',
        detail: '',
    });

    const router = useRouter();

    const handleChange = (e) => {
        const newServiceData = { ...serviceData };
        newServiceData[e.target.id] = e.target.value;
        setServiceData({ ...newServiceData });
    };

    const disableDate = () => {
        var today, dd, mm, yyyy;
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1;
        yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    };

    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        Axios.post(apis.serviceRequests, {
            name: serviceData.name,
            phone: serviceData.phone,
            address: serviceData.address,
            problems_in_detail: serviceData.detail,
            device_type: serviceData.devicetype,
            prefer_date: serviceData.date ? serviceData.date : null,
            prefer_time: serviceData.time ? serviceData.time : null,
        }).then((res) => {
            if (res.data.status === true) {
                // setButtonDisabled(false)
                const language = 'english';
                showNotification(language, constants.Success, res.data.message);
                router.push('/page/success-request');
            } else {
                setErrorMsg(res.data.error);
                setApiSuccess(true);
            }
        });
    };

    return (
        <section style={{ paddingBottom: '50px' }} id="servicelist">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <img
                        className="text-element col-xl-7"
                        style={{ paddingRight: '0' }}
                        src="static/img/service/service_img.png"
                    />

                    {/* <div className="text-element col-xl-6" style={{backgroundImage:`url("static/img/service/service_img.png")`,backgroundSize:"cover",margin:"70px 0px"}}>
                
                <div className='ser_right_text' >
                <h2 >
                    Do you need a repair service ?
                </h2>
                <div className="paragraphs-wrapper pb-4">
                    <p className="mbr-text mbr-fonts-style mbr-lighter first-paragraph display-7">
                        Looking for a quick and trustworthy repair service ?
                    </p>
                    <p>Call us at <a href='tel:+918281224422' style={{color:"#6985EE",fontSize:"24px",fontWeight:"800px"}}>+91 8281 22 44 22</a> or mail us to reach us</p>
                </div>
                </div>
            </div> */}
                    <div
                        className="repair_ser col-xl-5"
                        style={{ backgroundColor: '#3C4C92' }}>
                        <form
                            onSubmit={(e) => {
                                submitHandler(e);
                            }}
                            className="ps-form--edit-address">
                            <div className="sell-form-header">
                                <h3 style={{ color: 'white' }}>
                                    Please Fill Your Details
                                </h3>
                            </div>
                            <div className="sell_form_details">
                                <div className="form-group">
                                    <input
                                        required
                                        id="name"
                                        type="text"
                                        placeholder="First Name *"
                                        className="form-control"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        value={serviceData.name}
                                        // autoFocus
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        required
                                        id="phone"
                                        type="text"
                                        placeholder="Phone Number *"
                                        className="form-control"
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        value={serviceData.phone}
                                    />
                                    {apiSuccess ? (
                                        <p
                                            style={{
                                                color: 'red',
                                                textAlign: 'center',
                                            }}>
                                            {errorMsg.phone}
                                        </p>
                                    ) : (
                                        ''
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <textarea
                                    required
                                    id="address"
                                    row={3}
                                    type="text"
                                    placeholder="Address *"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={serviceData.address}
                                />
                            </div>
                            <div className="form-group form-select form-select-sm ">
                                <select
                                    required
                                    id="devicetype"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}>
                                    <option value={''}> Device Type</option>
                                    {device.map((data, index) => (
                                        <option key={index} value={data.id}>
                                            {data.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* <div className='sell_form_details1'>
                <div className="form-group">
                <div className='label_date_time'>Date</div>
                    <input
                        id="date"
                        type="date"
                        placeholder="date"
                        className="form-control"
                        onChange={(e) => {handleChange(e)}}
                        value={serviceData.date}
                        min={disableDate()}
                        
                    />
                </div>
                <div className="form-group">
                <div className='label_date_time'>Time</div>
                    <input
                        id="time"
                        type="time"
                        placeholder="Time "
                        className="form-control"
                        onChange={(e) => {handleChange(e)}}
                        value={serviceData.time}
                    />
                </div>
      
            </div> */}
                            <div className="form-group">
                                <input
                                    id="detail"
                                    type="text"
                                    placeholder="Problem in detail"
                                    className="form-control"
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    value={serviceData.detail}
                                />
                            </div>
                            <div
                                className="form-group "
                                style={{
                                    textAlign: 'right',
                                    backgroundColor: '#3C4C92',
                                }}>
                                <button
                                    type="submit"
                                    className="service-btn mr-4"
                                    disabled={buttonDisabled}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RepairingServiceForm;
