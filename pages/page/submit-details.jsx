import React, { useState } from 'react'
import Axios from 'axios'
import apis from '~/components/myspace/constants/Api'
import { showNotification } from '~/utilities/common-helpers'
import constants from '~/public/static/data/my-constants/Constants'
import { useRouter } from 'next/router'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'
import BreadCrumb from '~/components/elements/BreadCrumb'
import { Card } from 'antd'

function CampaignCustomers() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'submit-details'
        }
    ]

    const router = useRouter()

    const [campaignData, setCampaignData] = useState({
        name: "",
        phone: "",
        location: ""
    })
    const [errorMsg, setErrorMsg] = useState('')
    const [apiSuccess, SetApiSuccess] = useState(false)
    const [buttonDisable, setButtonDisable] = useState(false)

    const changeHandler = (e) => {
        const newCampaign = { ...campaignData }
        newCampaign[e.target.id] = e.target.value;
        setCampaignData({ ...newCampaign })
    }
    const submitHandler = (e) => {
        setButtonDisable(true)
        e.preventDefault()
        setButtonDisable(true)
        Axios.post(apis.campaignCustomers, {
            Name: campaignData.name,
            Phone: campaignData.phone,
            Location: campaignData.location

        }).then((res) => {
            if (res.data.status === true) {
                setButtonDisable(true)
                SetApiSuccess(false)
                const language = 'english'
                showNotification(language, constants.Success, res.data.message)
                router.push('/page/submit-details-success')
            }
            else {
                setErrorMsg("Phone no already exists")
                SetApiSuccess(true)
            }
        })

    }

    return (
        <ContainerHomeElectronics title="contact-us" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />



            <div style={{ marginLeft: "40px", marginRight: "20px" }}>
                <div className=' ps-checkout '>


                    <center><div style={{ color: '#384D9C', padding: '120px 0', fontSize: '15px' }}>
                        <h3>Sorry... the time is over !!!</h3> <br />
                        Unfortunately, We are no longer accepting submissions.<br />
                        The draw will be taken on 24th 5 pm @ GAVA tower Cherooty road, Calicut.<br />
                        Chief Guest<br />
                        Mr.Anwar Sadath<br />
                        Hon&apos;ble President - The Business club and Director - Calicut Landmark builders.<br />
                        Follow our social media pages for more information and live streaming<br /><br /><br />
                        Thank You for your interest and support.<br />

                    </div>
                        <div className="wrapper_mob" style={{ padding: '50px 0px' }}>
                            <a href='https://www.facebook.com/GavaGadgets' target='_blank' rel="noreferrer">
                                <div className="button">
                                    <div className="icon">
                                        <i className="fa fa-facebook" style={{ color: "#4867AA" }}></i>
                                    </div>
                                    <span>Facebook</span>
                                </div>
                            </a>
                            <a href='https://www.instagram.com/gavaserviceworld/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel="noreferrer">
                                <div className="button">
                                    <div className="icon">
                                        <i className="fa fa-instagram" style={{ color: "#CC3C5B" }}></i>
                                    </div>
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </div>
                    </center>
                </div>
            </div>
        </ContainerHomeElectronics>
    )
}

export default CampaignCustomers
