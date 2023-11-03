import Router  from 'next/router';
import React from 'react'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'

function SuccesRequest() {
  return (
    <ContainerHomeElectronics title="sellRequest-succes" boxed={true}>
    <section
            className="ps-checkout ps-section--shopping"
            style={{ marginBottom: '10rem' }}>
            <div className="container">
                <div className="ps-section__header" style={{paddingBottom:"0px"}}>
                    <h2>Your Request Has Been Sent Successfully</h2>
                </div>
                <div
                    className="ps-section__content"
                    style={{ marginTop: '5rem' ,textAlign:"center"}}>

                    <p style={{fontSize:"16px"}}>Our tech support will contact you shortly. Thank you for choosing Gava.</p>

                    <div
                        className="ps-section__cart-actions"
                        style={{ marginLeft: '4rem', marginTop: '5rem' }}
                        >
                            <a onClick={()=>Router.push("/")}>
                                <i className="icon-arrow-left mr-2"></i>
                                Back to Home
                                
                            </a>
                    </div>
                </div>
            </div>
        </section>
    </ContainerHomeElectronics>
  )
}

export default SuccesRequest