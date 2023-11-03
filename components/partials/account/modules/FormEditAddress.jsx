import Axios from 'axios' 
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import { Checkbox } from 'antd';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { data } from 'jquery';

function FormEditAddress(props) {
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [locationsData, setLocationsData] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    var varStateList =[];

    const router = useRouter();
    const { id } = router.query;
    // const language = useLanguageHook();

    const [formData, setFormData] = useState({
        name: '',
        state: '',
        streetAddress: '',
        postCode: '',
        phone: '',
        region: '',
        // default: '',
        // addressId: '',
    });
    const [defaultAddress, setDefaultAddress] = useState(
        props.editAddress === true ? null : true
    );
    const [billingAddress, setBillingAddress] = useState(
        props.editAddress === true ? null : true
    );

    useEffect(() => {
        Axios.post(apis.locations, {
            session_id: constants['sessionId'],
            language: props.language,
        })
            .then((res) => {
                console.log(res.data.data.states, 'res in locations');
                if (res.data.status === 1) {
                    // setLocationsData(res.data.data.regions);
                    setStateList(res.data.data.states);
                    varStateList = res.data.data.states;
                    setApiSuccess(true);
                    getAddressDetails()
            
                } else {
                    showNotification(language, constants.Error);
                }
            })
            .catch((err) => {
                showNotification(language, constants.Error);
            });

    }, []);
   const  getAddressDetails = () =>  {
        if (
            props.editAddress === true &&
            (props.quickView === false ||
                props.quickView === null ||
                props.quickView === undefined)
        ) {
            Axios.post(apis.getAddressById, {
                session_id: constants['sessionId'],
                language: props.language,
                addressId: id,
            })
                .then((res) => {
 
                    if (res.data.status === 1) {
                        console.log(res,"ress in data");
                        setFormData({
                            name: res.data.data.address[0].name,
                            state: res.data.data.address[0].region.state.id,
                            streetAddress:
                                res.data.data.address[0].streetAddress,
                            postCode: res.data.data.address[0].postcode,
                            phone: res.data.data.address[0].phone,
                            region: res.data.data.address[0].region.id,
                        });
                        setDefaultAddress(res.data.data.address[0].is_default);
                        setBillingAddress(res.data.data.address[0].is_billing_default)
                    } else {
                        showNotification(props.language, constants.Error);
                    }
                    
                    var statePos=varStateList.findIndex((c) => c.id == res.data.data.address[0].region.state.id);  
                    setDistrictList(varStateList[statePos].districts)
                    setApiSuccess(true);
                })
                .catch((err) => {
                    SetApiError(true);
                    showNotification(props.language, constants.Error);
                });
        } else {
            setApiSuccess(true);
        }

    }
    const handleDistrict =(e) =>{
        var statePos=stateList.findIndex((c) => c.id == e.target.value);
        setDistrictList(stateList[statePos].districts)
    }

    const handleInputChange = (e) => {
        const newFormData = { ...formData };
        newFormData[e.target.id] = e.target.value;
        setFormData({ ...newFormData });
    };

    function sumbitForm(e) {
        e.preventDefault();
        setButtonDisabled(true)
        console.log(formData,"formDatass");
        props.handleAddAddress(formData, defaultAddress,billingAddress);
    }
    const labels = Labels(props.language);

    let a  = 2;
    return (
        props.language !== false && (
            <>
                {apiSuccess && (
                    <form
                        className="ps-form--edit-address"
                        onSubmit={(e) => sumbitForm(e)}>
                        <div className="ps-form__header">
                            <h3>
                                {' '}
                                {props.editAddress === true
                                    ? labels['Edit Address']
                                    : labels['Add Address']}
                            </h3>
                        </div>
                        <div className="ps-form__content">
                            <div className="form-group">
                                <label>
                                    {labels['Name']} <sup>*</sup>
                                </label>
                                <input
                                    onChange={(e) => handleInputChange(e)}
                                    required
                                    id="name"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    value={formData.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    {labels['Street Address']} <sup>*</sup>
                                </label>
                                <input
                                 required
                                    onChange={(e) => handleInputChange(e)}
                                    id="streetAddress"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    value={formData.streetAddress}
                                />
                            </div>
                            {/* <div className="form-group">
                                <label>
                                    {labels['State']} <sup>*</sup>
                                </label>
                                <input
                                 required
                                    onChange={(e) => handleInputChange(e)}
                                    id="state"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    value={formData.state}
                                />
                            </div> */}
                            <div className="form-group form-select form-select-sm">
                                <label>
                                    {labels['State']} <sup>*</sup>
                                </label>
                                <select
                                    id="state"
                                    className="form-control"
                                    required
                                    onChange={(e) => {
                                        handleDistrict(e)
                                        handleInputChange(e)}}>
                                        <option value={''}> {labels['Select State']}</option>
                                        
                                    {stateList.map((data) => (
                                        <option selected={ props.editAddress === true && formData.state == data.id} key={data}  value={data.id}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="form-group form-select form-select-sm">
                                <label>
                                    {labels['District']} <sup>*</sup>
                                </label>
                                <select
                                    id="region"
                                    className="form-control"
                                    required
                                    onChange={(e) => handleInputChange(e)}>
                                        <option value={''}> {labels['Select District']}</option>
                                        
                                    {districtList.map((data, index) => (
                                        <option selected={ props.editAddress === true && formData.region == data.id}  key={index} value={data.id}>{data.Region_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>
                                    {labels['Pincode']} <sup>*</sup>
                                </label>
                                <input
                                 required
                                    onChange={(e) => handleInputChange(e)}
                                    id="postCode"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    maxLength={6}
                                    pattern="[0-9]{6}"
                                    value={formData.postCode}
                                />
                            </div>
                            <div className="form-group">
                                <label>
                                    {labels['Phone']} <sup>*</sup>
                                </label>
                                <input
                                 required
                                    onChange={(e) => handleInputChange(e)}
                                    id="phone"
                                    type="text"
                                    placeholder=""
                                    className="form-control"
                                    maxLength={10}
                                    pattern="[0-9]{10}"
                                    value={formData.phone}
                                />
                            </div>
                            <div className="form-group">
                                <Checkbox
                                    onChange={(e) => {
                                        setDefaultAddress(e.target.checked);
                                    }}
                                    // defaultChecked={true}
                                    checked={defaultAddress}>
                                    {labels['Set this as default address']}
                                </Checkbox>
                            </div>

                            <div className="form-group">
                                <Checkbox
                                    onChange={(e) => {
                                        setBillingAddress(e.target.checked);
                                    }}
                                    // defaultChecked={true}
                                    checked={billingAddress}>
                                    {labels['Set this as Billing address']}
                                </Checkbox>
                            </div>

                            <div className="form-group submit">
                                <button 
                                    type="submit" 
                                    className="ps-btn"
                                    disabled={buttonDisabled}
                                    >
                                    {labels['Save Address']}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </>
        )
    );
    // }
}

export default FormEditAddress;
