import Router  from 'next/router';
import React from 'react'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'

function SuccesRequest() {
  return (
    <ContainerHomeElectronics title="sellRequest-succes" boxed={true}>
    <section
            className="web_view_only ps-checkout ps-section--shopping"
            style={{ marginBottom: '10rem'}}
            >
            <div style={{backgroundImage:"url('../static/img/collection/success_confetti.png')",backgroundSize:"cover",height:"180px" }}>
            </div>
            <div className="container">
                <div className="ps-section__header" style={{paddingBottom:"0px"}}>
                    <h2 style={{color:"#384D9C"}}>Congratulations</h2>
                </div>
                <div
                    className="ps-section__content"
                    style={{ marginTop: '5rem' ,textAlign:"center"}}>

                    <p style={{fontSize:"22px",color:"#384D9C"}}>
                    You have entered the Gava+<br></br>
                    Lucky Draw to Win an iPhone 14 Pro<br></br>
                    for 1 Rupees
                    </p>
                    <p>* Terms and conditions apply</p>
                    <br></br>
                    <div style={{color:'#384D9C',padding:'12px 0',fontSize:'15px'}}>
                    Winners will be announced after 24th April through our social media pages,<br></br> For more updates please follow us on
                    </div>
                    <div className="wrapper">
                    <a href='https://www.instagram.com/gavaserviceworld/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel="noreferrer">  

                    <div className="button">
                        <div className="icon">
                            <i className="fa fa-facebook"></i>
                        </div>
                        <span>Facebook</span>
                    </div></a>
                    <a href='https://www.instagram.com/gavaserviceworld/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel="noreferrer">  

                    <div className="button">
                        <div className="icon">
                        <i className="fa fa-instagram" style={{color:"#CC3C5B"}}></i>
                        </div>
                        <span>Instagram</span>
                    </div></a>
                    </div>
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
            <div className='mobile_view_only ps-checkout '>
                <img src='../static/img/collection/mobile_view.jfif' />
                * Terms and conditions apply
                
                <center><div style={{color:'#384D9C',padding:'12px 0',fontSize:'15px'}}>
                Winners will be announced after 24th April through our social media pages, For more updates please follow us on
                </div>
                <div className="wrapper_mob">
                    <a href='https://www.facebook.com/GavaGadgets' target='_blank' rel="noreferrer">
                    <div className="button">
                        <div className="icon">
                            <i className="fa fa-facebook" style={{color:"#4867AA"}}></i>
                        </div>
                        <span>Facebook</span>
                    </div>
                    </a>
                    <a href='https://www.instagram.com/gavaserviceworld/?igshid=YmMyMTA2M2Y%3D' target='_blank' rel="noreferrer">  
                    <div className="button">
                        <div className="icon">
                        <i className="fa fa-instagram" style={{color:"#CC3C5B"}}></i>
                    </div>
                        <span>Instagram</span>
                    </div>
                    </a>  
                </div>
                </center>
            </div>
            <section>
            
            </section>
    </ContainerHomeElectronics>
  )
}

export default SuccesRequest