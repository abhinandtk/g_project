import React from 'react'

function WorkProcessBox() {
  return (
    <section className="mb-5 mt-5" style={{backgroundImage:`url("static/img/service/bg_service.png")`,padding:'20px 10px'}}>
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-12 mb-5 mt-5">
                <div className="title_block text-center">
                    <h3 style={{color:"white"}} className="mbr-section-subtitle mbr-fonts-style display-4"><strong>Our Work Process </strong></h3>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12" >
                <div className="row">
                <div className="col-lg-3" data-aos="fade-up">
                        <div className="card_box_det" data-aos="zoom-in" data-aos-delay="100">
                        <h3>01.</h3>
                        <div style={{marginBottom:"30px",height:"50px"}}><h3 >Initial Activities</h3></div>
                        <p>People can take initiative for repair services through website and our executives will collect it. When a device arrives at Gava for any type of repair, a detailed job card will be provided. Customer will also recieve a Whatsapp message when a device is turned in for service. Gava is the first ISO 27001:2013 certified brand in Kerala for privacy protection and data security. This ensures protection of customer&apos;s personal data at our service center.
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 mt-lg-0" data-aos="fade-up">
                        <div className="card_box_det" data-aos="zoom-in" data-aos-delay="200">
                        <h3>02.</h3>
                        <div style={{marginBottom:"30px",height:"50px"}}><h3 >Recognizing Damages</h3></div>
                        <p>Following initial checkups, the gadget will be handed over to technical staff for recognition of damages.  Once the checks are complete, our technical team begins to resolve the problem using the most advanced machinery and technologies.
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 mt-lg-0">
                        <div className="card_box_det" data-aos="zoom-in" data-aos-delay="300">
                        <h3>03.</h3>
                        <div style={{marginBottom:"30px",height:"50px"}}><h3 >Repair</h3></div>
                        <p>Gadgets are treated with the utmost care using special tools and an ESD kit. The repair activities can be observed through a transparent window. Our service team is committed to finishing repair services within 45 minutes, but that may change if there is any shortage of spare parts. The premium lounge is available too for the convenience of customers, and here every repair activity is carried out in front of them.
                        </p>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 mt-lg-0">
                        <div className="card_box_det" data-aos="zoom-in" data-aos-delay="300">
                        <h3>04.</h3>
                        <div style={{marginBottom:"30px",height:"50px"}}><h3 >QC Check</h3></div>
                        <p>Even though issues are resolved, repair activities are not finished yet. Once again our team will go through the gadget and ensure that there are no other issues. As a precaution, the gadgets are provided for numerous quality checks that may be extended to 40 distinct phases.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default WorkProcessBox