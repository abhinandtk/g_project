import React, { useState } from 'react'
import BreadCrumb from '~/components/elements/BreadCrumb'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'
import Axios from 'axios'
import apis from '~/components/myspace/constants/Api'
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import { useRouter } from 'next/router'

function ContactusPage() {
    const breadCrumb = [
        {
            text : 'Home',
            url : '/'
        },
        {
            text : 'contact-us'
        }
    ]

    const router = useRouter()

    const [contactUs,setContactUs] = useState({
        name:"",
        phone:"",
        email:"",
        subject:"",
        message:""    
    })
    const [buttonDisable,setButtonDisable] = useState(false)
    const [errorMsg,setErrorMsg] = useState("")
    const [apiSuccess,setApiSuccess] = useState(false)

    const changeHandler = (e)=>{
        const newContactusData = {...contactUs}
        newContactusData[e.target.id] = e.target.value;
        setContactUs({...newContactusData})

    }
    const submitHandler = (e) => {
        setButtonDisable(true)
        e.preventDefault()

        Axios.post(apis.contactUsRequests,{
            Name:contactUs.name,
            Phone:contactUs.phone,
            Email:contactUs.email,
            Subject:contactUs.subject,
            Message:contactUs.message 
        }).then((res) => {
            if (res.data.status === true) {
                const language="english"
                showNotification(language,constants.Success,res.data.message)
                router.push('/page/success-request')  
        
              }
            else{
            
            setErrorMsg(res.data.error)
            setApiSuccess(true)
            }
        })

    }
  return (
    <ContainerHomeElectronics title="contact-us" boxed={true}>
    <BreadCrumb breacrumb={breadCrumb} />
    


    <div style={{marginLeft:"40px",marginRight:"20px"}}>    
    <div className='sell-form-header'>
        <h3>Locate Us</h3>
        <p>GAVA <br></br>Gava Tower, Near CH Flyover, Cherooty Road, <br></br> Calicut - 673001, Kerala, India.</p>
            
    </div>
    <div className='sell-form-header'>
        <h3>Contact Us</h3>
        <table width="100%">
            <tr>
                <td><p>Phone</p></td>
                <td><p>:</p></td>
                <td><p><a href='tel:+918281224422'>+91 8281 22 44 22</a></p></td>
            </tr>
            <tr>
                <td><p>Email</p></td>
                <td><p>:</p></td>
                <td><p><a href='mailto:cc@gava.co.in'>cc@gava.co.in</a></p></td>
            </tr>
        
        </table>  
    </div>
      <form
        className="ps-form--edit-address"
        onSubmit={(e) => {submitHandler(e)}}
    >   
    <div className="ps-form__content">
        {/* <div className='sell-form-header'></div> */}
        <div className='sell_form_details'>
            <div className="form-group">

                <input
                    required
                    id='name'
                    type="text"
                    placeholder="Name *"
                    className="form-control"
                    onChange={(e) => {changeHandler(e)}}
                    value={contactUs.name}
                />
            </div>
            <div className="form-group">

                <input
                    required
                    id="phone"
                    type="text"
                    placeholder="Phone Number *"
                    className="form-control" 
                    onChange={(e) => {changeHandler(e)}}
                    value={contactUs.phone}
                    maxLength={10}
                    pattern="[0-9]{10}"
                />
                { apiSuccess ? <p style={{color:"red",textAlign:"center"}}>{errorMsg.phone}</p> : ''}
            </div>
        </div>

        <div className="form-group">

            <input
                required
                id="email"
                type="text"
                placeholder="Email"
                className="form-control"
                onChange={(e) => {changeHandler(e)}}
                value={contactUs.email}
            />
        </div>
        <div className="form-group">

            <input
                required
                id="subject"
                type="text"
                placeholder="Subject *"
                className="form-control"
                onChange={(e) => {changeHandler(e)}}
                value={contactUs.subject}
            />
        </div>
        

        
        <div className="form-group">
            <textarea
                className="form-control"
                id='message'
                placeholder="Message "
                rows={3}
                onChange={(e) => {changeHandler(e)}}
                value={contactUs.message}
 
            />
        </div>

        <div className="form-group " style={{textAlign:"right",paddingRight:"20px"}}>
 
            <button  
            className="sell-btn1 " 
            disabled={buttonDisable}
            type='submit'
            >
                SUBMIT
            </button>
            
        </div>
    </div>
</form>
</div>
    </ContainerHomeElectronics>
  )
}

export default ContactusPage