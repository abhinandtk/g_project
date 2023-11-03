import React from 'react'
import BreadCrumb from '~/components/elements/BreadCrumb'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'

function ReturnPolicy() {
    const breadCrumb = [
        {
            text : 'Home',
            url : '/'
        },
        {
            text : 'return-exchange-policy'
        }
    ]
  return (
    <ContainerHomeElectronics title="return-policy" boxed={true}>
    <BreadCrumb breacrumb={breadCrumb} />


    <div className="ps-section--custom">
    <div className="container">
        <div className="ps-section__header">
            <h1>Return and Exchange Policy</h1>
        </div>
        <div className="ps-section__content">
            
            <p>
                Last Updated: 8/3/2023
            </p>
            <p>
                Thank you for shopping at <a href="https://www.gava.co.in" style={{color:'blue'}} target="_blank" rel="noreferrer"><u>gava.co.in</u></a>
            </p>
            <p>
                If, for any reason, You are not completely satisfied with a purchase, we invite You to review our Policy.
            </p>
            <p>
                The following terms are applicable for any products that you purchased with us.
            </p><br></br><br></br>
            <h2>Interpretation and Definition</h2>
            <br></br>
            <h3>Interpretation</h3>
            <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3>Definitions</h3>
            <p>
                For the purposes of this Return and Exchange Policy:
            </p>
            <p>
                <b>Business Company</b> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to <b>Gava ecommerce</b> Located at <b>2nd Floor, 17/982C, BMT Trade Centre, Calicut-673004, IN.</b>
            </p>
            <p>
                <b>Goods</b> refer to the items offered for sale on the Service.
            </p>
            <p>
                <b>Orders</b> mean a request by You to purchase Goods from Us.
            </p>
            <p>
                <b>Service</b> refers to the Website.
            </p>
            <p>
                <b>Website</b> refers to My Site, accessible from <a href="https://www.gava.co.in" style={{color:'blue'}} target="_blank" rel="noreferrer"><u>gava.co.in</u></a>
            </p>
            <p>
                <b>You</b> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </p>
            <h2>General Return Policy</h2>
            <p>
                Product that are bought from the <b>Website can be returned.</b> All Items are eligible for return and would be processed if conditions are met.
            </p>
            <p>
                You are always required to ship back the items by following the shipping instruction:
            </p>
            <p>
                <b>GAVA Gava Tower, Near CH Flyover, Cherooty Road, Calicut - 673001, Kerala, India.</b>
            </p>
            <h2>Exchange Policy</h2>
            <p>
                Products can be exchanged for a different size or color variation, provided that such variation is available. Customers are allowed to exchange for item within <b>7</b> days. Exchanges exceeding <b>7</b> days will not be processed.
            </p>
            <p>
                In order to be eligible for exchanges make sure that these following conditions are met:
            </p>
            <ul>
                <li><b>Product must be returned in its original packaging</b></li>
                <li><b>Product wasn&apos;t used or damaged</b></li>
                <li><b>Product must include original tags (if applicable)</b></li>
                <li><b>Product must have the receipt or proof of purchase</b></li>
            </ul>
            <p>
                You are <b>required to ship back </b>the product for the item to be inspected and replaced.
            </p>
            <p>
                You exchanged product will be processed <b>Once items are received and conditions confirmed.</b>
            </p>
            <p>
                You are given the rights to exchange the item, <b>One time</b>. Provided that all conditions in Exchange Policy are met.
            </p>
            <h2>How to Initiate a Return</h2>
            <p>
                If you have a request for Return, Refund or Exchange and if you have further clarification and questions, Please do not hesitate to contact us through our:
            </p>
            <p>
                Email Address: <a href='mailto:cc@gava.co.in' style={{color:"blue"}}>cc@gava.co.in</a>
            </p>
            <p>
             Contact Form URL: <a href='https://www.gava.co.in/page/contact-us' style={{color:"blue"}} target='_blank' rel="noreferrer"><u>https://www.gava.co.in/page/contact-us</u></a>
            </p>
            <p>
                Phone Number: <a href='tel:8281224422' style={{color:"blue"}}>+91 8281 22 44 22</a>
            </p>
            <p>
            You will be updated for their Return Status through their <b>EMAIL and PHONE,</b> provided that all contact information is recorded to us.
            </p>
        </div>
    </div>
</div>
</ContainerHomeElectronics>
  )
}

export default ReturnPolicy