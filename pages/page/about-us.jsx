import React from 'react'
import BreadCrumb from '~/components/elements/BreadCrumb'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'

function AboutusPage() {
    const breadCrumb = [
        {
            text : 'Home',
            url : '/'
        },
        {
            text : 'about-us'
        }
    ]
  return (
    <ContainerHomeElectronics title="terms-conditions" boxed={true}>
    <BreadCrumb breacrumb={breadCrumb} />


    <div className="ps-section--custom">
    <div className="container">
        <div className="ps-section__header">
            <h1>About Gava</h1>
        </div>
        <h3>Experience premium quality with affordable price</h3>
        <h2>Explore south india&apos;s largest Mobile, Laptop and E-gadget service center</h2>
        <div className="ps-section__content">
        Gava comes with comprehensive solutions for all the troubles in your gadget and it is the perfect choice for pre-owned mobiles and laptops which is possible with an efficient technical team and advanced repair services. Gava has a wide range of repair activities that include Apple products, smartphones, laptops, smart TV, cameras, kitchen appliances and so more.
        <br></br>
        <br></br>
        Gava is the first ISO 27001:2013 certified brand in Kerala which ensures customer privacy protection and data security. And what makes Gava relevant in the refurbished market is the quality of certified pre-owned products that we offer. We provide our quality-checked products with a warranty from 3 months to 1 year and this warranty demonstrates trust in our service and technical team. We intend to share our confidence and trust with the people of Kerala as well.
        <br></br>
        <br></br>
        Every pre-owned gadget is presented only after 40 different quality checks. Thats the secret behind the quality of our products and warranty. Our technical team is committed to returning customers gadgets within 45 minutes which is a surprisingly unbeatable service time. It is not an easy task but we manage it with our qualified technical team. The service arena is transparent and customers are allowed to watch how Gava treats their gadgets. Gava&apos;s credibility is demonstrated through deeds rather than words.
            
        </div>
    </div>
    </div>
    </ContainerHomeElectronics>
  )
}

export default AboutusPage