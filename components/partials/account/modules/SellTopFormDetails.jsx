
import { Checkbox, Radio } from 'antd'
import  Axios  from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import apis from '~/components/myspace/constants/Api'
import constants from '~/public/static/data/my-constants/Constants'
import { showNotification } from '~/utilities/dist/common-helpers.dev'

function SellFormDetails({ categoryData }) {
    const [errorMsg,setErrorMsg] = useState("")
    const [apiSuccess,setApiSuccess] = useState(false)
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [sellData,setSellData] = useState({
        category :'',
        brand : '',
        series :"",
        model : "",
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        postalCode : "",
        phone : "",
        email : "",
        details : "",
        device : ""


    })
    const [checkedValues,setCheckedValues] = useState([])
    const [radioValues,setRadioValues] = useState('')

    const router = useRouter()

    const handleChange = (e) => {
        const newSellData = {...sellData}
        newSellData[e.target.id] = e.target.value
        setSellData({...newSellData})
        console.log(sellData)
    }
    const clearHandler= (e) => {
        setSellData({
            category :'',
            brand : '',
            series :"",
            model : "",
            firstName : "",
            lastName : "",
            address : "",
            city : "",
            postalCode : "",
            phone : "",
            email : "",
            details : "",
            device : ""
        })
        setCheckedValues('')
        console.log("checked values",checkedValues)
        setRadioValues('')
        console.log("radio values",radioValues)
        
    }
  
    const checkHandleChange = (e) => {
        const {value,checked} = e.target 
        if(checked){            
            setCheckedValues(pre => [...pre,value])   
        }
        else{
            setCheckedValues(pre => {
                return [...pre.filter(skill => skill !== value)]
            })
        }
    }
    const radioHandleChange =(e) => {
        setRadioValues(e.target.value)
        

    }
    console.log(radioValues)
   
    const submitHandler = (e) => {

        e.preventDefault()
        setButtonDisabled(true)
        
            Axios.post(apis.sellRequests,{
                category : sellData.category,
                brand : sellData.brand,
                series : sellData.series,
                model : sellData.model,
                device_details : radioValues,
                accessories : checkedValues.join(",").toString(),
                first_name : sellData.firstName,
                last_name : sellData.lastName,
                address : sellData.address,
                post_code :sellData.postalCode,
                phone : sellData.phone,
                additional_details : sellData.details,
                email : sellData.email,
                city : sellData.city
            }).then((res => {
                
                if (res.data.status === true){
                    const language="english"
                    showNotification(language,constants.Success,res.data.message)
                    router.push('/page/success-request')
                }
                else{
                    setErrorMsg(res.data.error)
                    setApiSuccess(true)
                }
               
            }))
            
        
    }

  return (
    <div style={{marginLeft:"40px",marginRight:"20px"}}>      
    <form
    onSubmit={(e) => {submitHandler(e)}}
    className="ps-form--edit-address"
    >   
    <div className='sell-form-header'><h3>Choose your Model</h3></div>
    <div className="ps-form__content">

      <div className="sell_form_details">             
        <div className="form-group form-select form-select-sm">

            <select
                className="form-control"
                id='category'
                required
                onChange={(e) => {handleChange(e)}}
                >
                    <option value={''}> Category</option>
                    { categoryData.map((data,index) => (

                    <option key={index} value={data.id}>{data.Category_Name}</option>
                ))}
              
            </select>
        </div>
  
        <div className="form-group form-select form-select-sm">
            <input
                id='brand'
                type="text"
                placeholder="Brand"
                className="form-control"
                value={sellData.brand}
                onChange={(e) => {handleChange(e)}}

            />
        </div>
      </div>

      <div className="sell_form_details">             
        <div className="form-group form-select form-select-sm ">

            <input
                id='series'
                type="text"
                placeholder="Series"
                className="form-control"
                value={sellData.series}
                onChange={(e) => {handleChange(e)}}
            />
        </div>
        <div className="form-group form-select form-select-sm ">

            <input
                id='model'
                type="text"
                placeholder="Model"
                className="form-control"
                value={sellData.modal}
                onChange={(e) => {handleChange(e)}}
            />
        </div>
      </div>

        
      <div className='sell-form-header'><h3>Choose your device details</h3></div>
        
        <div className="form-group">
            <Radio.Group id="device" onChange={(e) => {radioHandleChange(e)}}>
            <Radio value="100% Working?"  >
               100% Working?
            </Radio>
            <Radio value="One or more issues" >
               One or more issues
            </Radio> 
            </Radio.Group>            
        </div>
        
        <div className='sell-form-header'><h3>Accessories</h3></div>
        <div className="form-group">
            <Checkbox value='Original Charger' onChange={(e) => {checkHandleChange(e)}} >
               Original Charger
            </Checkbox >
            <Checkbox value='Original Data cable' onChange={(e) => {checkHandleChange(e)}} >
               Original Data cable
            </Checkbox>
            <Checkbox value='Original Earphone' onChange={(e) => {checkHandleChange(e)}}>
               Original Earphone
            </Checkbox>
            {/* <input class="form-check-input" type="radio" style={{width:"50px",height:"50px"}} name="flexRadioDefault" id="flexRadioDefault1" />
              srhyryhurju<label class="form-check-label" for="flexRadioDefault1">gg
                  Default radio
              </label>               */}
        </div>
        <div className='sell-form-header'><h3>Enter your conatct details</h3></div>
        <div className='sell_form_details'>
            <div className="form-group">

                <input
                    required
                    id='firstName'
                    type="text"
                    placeholder="First Name *"
                    className="form-control"
                    value={sellData.firstName}
                    onChange={(e) => {handleChange(e)}}
                />
            </div>
            <div className="form-group">

                <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    value={sellData.lastName}
                    onChange={(e) => {handleChange(e)}}
                   
                />
            </div>
        </div>

        <div className='sell_form_details'>
            <div className="form-group">

                <input
                    required
                    id='phone'
                    type="text"
                    placeholder="Phone *"
                    className="form-control"
                    value={sellData.phone}
                    maxLength={10}
                    onChange={(e) => {handleChange(e)}}
                />
            { apiSuccess ? <p style={{color:"red",textAlign:"center"}}>{errorMsg.phone}</p> : ''}

            </div>
            <div className="form-group">

                <input
                    id='email'
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={sellData.email}
                    onChange={(e) => {handleChange(e)}}
                />
                { apiSuccess ? <p style={{color:"red",textAlign:"center"}}>{errorMsg.email}</p> : ''}

            </div>
        </div>
        <div className="form-group">
            <input
                required
                id="address"
                type="text"
                placeholder="Address *"
                className="form-control"
                value={sellData.address}
                onChange={(e) => {handleChange(e)}}
            />
        </div>
        <div className='sell_form_details'>
            <div className="form-group">

                <input
                    required
                    id='city'
                    type="text"
                    placeholder="City *"
                    className="form-control"
                    value={sellData.city}
                    onChange={(e) => {handleChange(e)}}
                />
            </div>
            <div className="form-group">

                <input
                    required
                    id='postalCode'
                    type="text"
                    placeholder="PostCode *"
                    className="form-control"
                    value={sellData.postalCode}
                    maxLength={6}
                    onChange={(e) => {handleChange(e)}}
                />
                { apiSuccess ? <p style={{color:"red",textAlign:"center"}}>{errorMsg.post_code}</p> : ''}
            </div>             
        </div>
        <div className="form-group">
            <textarea
                className="form-control"
                id='details'
                placeholder="Additional details "
                rows={3}
                value={sellData.details}
                onChange={(e) => {handleChange(e)}}
            />
        </div>

        <div className="form-group " style={{textAlign:"right",paddingRight:"20px"}}>
 
            <button  className="sell-btn1 " disabled={buttonDisabled}>
                SUBMIT
            </button>
            
        </div>
    </div>
</form>
</div>
  )
}

export default SellFormDetails