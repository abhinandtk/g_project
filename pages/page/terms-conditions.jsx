import React, { useEffect, useState } from 'react';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import Axios from 'axios';
import apis from '~/components/myspace/constants/Api';
import BreadCrumb from '~/components/elements/BreadCrumb';

function TermsConditions() {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
  
        {
            text: 'terms&conditions',
        },
    ];

    const [terms,setTerms] = useState([])
    useEffect(() => {
        Axios.get(apis.termsCondition)
        .then((res) => {
            setTerms(res.data)
        })
    },[])

    return (
        <ContainerHomeElectronics title="terms-conditions" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb}/>
            <div className="ps-section--custom">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Terms&Conditions</h1>
                    </div>
                    <div className="ps-section__content">
                        {/* { terms.map((item,index) => (
                            <>
                            <p>{index+1}. {item.description}</p>
                            </>
                        ))} */}
                        <p>
                        Gava Terms and Conditions of Service, Support and payment.
                        <br></br><br></br>
                        1. Provision of Service and Support
                        <br></br><br></br>
                        During the continuance of this Agreement, Gava will provide service and support as follows:
                        <br></br><br></br>
                        1.1 Gava Telephone Support
                        <br></br>
                        Gava shall provide at its sole option and for as long and for such hours as it may decide Telephone Support
                        for the Customer. &quot;Telephone Support&quot; means telephone and remote hardware fault diagnosis provided by
                        Gava at its sole option and on such terms and conditions as it may, from time to time determine pursuant to
                        clause 2.1.
                        <br></br><br></br>
                        1.2 Remedial Support
                        <br></br>
                        Upon receipt of notification from the Customer that the Products have failed or are malfunctioning, and in the
                        event that the fault cannot be rectified using Gava Telephone Support, Gava undertakes to use all
                        reasonable endeavours during the Standard Service Hours to make such corrections, repairs or adjustments
                        to or replace such parts of the Products as may be necessary to restore the Products to their proper
                        operating condition. The extent of such remedial support and whether this is achieved remotely or by an on-
                        site visit by a Gava engineer will be determined by Gava in its discretion and/or depending upon any Service
                        Offering purchased by the Customer (as evidenced on the Invoice) from amongst the Service Offerings or
                        the specific Service Offering packaged with the Product.
                        <br></br><br></br>
                        Gava&#39;s &quot;Standard Service Hours&quot; means the hours between 9.00 a.m. and 6.00 p.m. each day excluding,
                        Sundays and public holidays. Additional service hours may be available at Gava&#39;s discretion in consideration
                        of the payment of additional fees.
                        <br></br><br></br>
                        &quot;Service Offering (s)&quot; means the different service options offered by Gava for the Products or any part of
                        them and for varying periods, as described in Gava&#39;s published literature, including Customer&#39;s Invoice
                        and/or Gava&#39;s Service Description.
                        <br></br><br></br>
                        2. Exceptions to Service &amp; Support
                        <br></br><br></br>
                        2.1 Gava shall provide repair services that are necessary because of any existing defect or a defect occurs
                        in materials or workmanship in the system or in any system component covered by this Agreement.
                        Preventive maintenance is not included. Repairs necessitated by software problems, or as a result of
                        alteration, adjustment, or repair by anyone other than Gava (or its authorized representatives) are not
                        included.
                        <br></br><br></br>
                        2.2 Unless expressly provided by mutual agreement of Gava and the Customer in writing and/or by the terms
                        of a Service Description, Gava&#39;s service and support do not include support which is necessitated as a result
                        of any cause other than a result of Gava&#39;s neglect or fault, including, without limitation:-
                        <br></br><br></br>
                        (a) Failure or fluctuation of electric power, air conditioning, humidity control or other environmental
                        conditions; or
                        <br></br><br></br>
                        (b) Accident, transportation, neglect, misuse, abuse or default of or by the Customer its employees or agents
                        or any third party, including but not limited to broken or cracked plastics; or
                        <br></br><br></br>
                        (c) Any fault in any products or components which are not supplied by Gava, whether or not
                        <br></br>
                        (i) They form part of a Customer&#39;s configuration of the Products; or
                        <br></br>
                        (ii) They comprise the Customer&#39;s configuration and the Products form an integral part of them; or
                        <br></br><br></br>
                        (d) Any fault in attachments or associated products or components (whether or not supplied by Gava) which
                        do not form part of the Products covered by this Agreement and/or under the relevant Service Offering; or
                        <br></br><br></br>
                        (e) Any fault in the Products caused by the failure of any products or components not supplied by Gava; or
                        <br></br><br></br>
                        (f) Act of God, lightning, fire, flood, war, act of violence or any similar occurrence; or
                        <br></br><br></br>

                        (g) Any attempt by any person other than Gava personnel or any person authorised by Gava (via the
                        telephone or otherwise) or an authorised Gava sub-contractor, to adjust, repair or support the Products.
                        <br></br><br></br>
                        2.3 Unless expressly provided by mutual agreement of Gava and the Customer in writing and/or by the terms
                        of a Service Description, Gava&#39;s service &amp; support do not include:-
                        <br></br><br></br>
                        (a) support of non- Gava branded Products (even though they may have been supplied by Gava and form
                        part of the Product) or Products which are not standard Gava assemblies or configurations as defined on
                        Gava&#39;s published price list. The Customer agrees that where such of the Products are covered by a relevant
                        manufacturer&#39;s warranty to utilise that warranty for the support of such Products and in any event not look to
                        Gava for such support;
                        <br></br><br></br>
                        (b) Services at places other than the Customer&#39;s address specified on the Invoice except where Gava
                        specifically agrees otherwise;
                        <br></br><br></br>
                        (c) The correction or avoidance of software defects or errors or the loading or re-loading of a Customer&#39;s
                        application software or the Customer&#39;s data or any re-configuration of the Products beyond loading the
                        operating system software (ie basic install of the OS and Drivers using the factory supplied CDs) as carried
                        out before shipment;
                        <br></br><br></br>
                        (d) Repair or renewal of diskettes, printing ribbons, typefaces or other consumable supplies;
                        <br></br><br></br>
                        (e) Electrical or other environmental work external to the Products; and
                        <br></br><br></br>
                        (f) The support of any attachments or associated products which do not form part of the Products.
                        <br></br><br></br>
                        2.4 Collection of Products by Gava, or its appointed carrier and/or its authorised sub-contractor for the
                        purposes of this Agreement shall not be construed as invalidating the exceptions stated above and shall not
                        imply that Gava accepts the validity of any customer&#39;s claim.
                        <br></br><br></br>
                        3. Replacement
                        <br></br><br></br>
                        3.1 Gava reserves the right to replace the whole of the Products or any part or parts thereof which may be
                        found to be faulty or in need of investigation even where only a part of the Products are so faulty or in need
                        of investigation.
                        <br></br><br></br>
                        3.2 Gava , in effecting such replacement, is under no obligation to use Products or any parts thereof which
                        are identical in all respects to the faulty Products. Unless local laws determine otherwise, Gava reserves the
                        right to supply used or reconditioned parts or Products which are equivalent to new in functionality and
                        appearance. Gava shall ensure that any Products or parts thereof used in replacement shall have
                        substantially the same fittings and at least an equivalent specification to the faulty Products or parts thereof.
                        Gava reserves the right to supply Products or parts thereof manufactured by whomsoever it shall, from time
                        to time, deem appropriate.
                        <br></br><br></br>
                        3.3 The products or parts supplied to replace the Products shall become the property of the owner of the
                        Products. The Products or any part or parts thereof removed shall become the property of Gava.
                        <br></br><br></br>
                        3.4 The warranty term for a spare part used in repairing Products (&quot;Replacement Part&quot;) is 90 days from its
                        installation in the Product or the remainder of the warranty term for the Product into which it is installed,
                        whichever is longer. For the avoidance of doubt, the warranty term of a Product is not extended after its
                        repair or replacement. Customer will pay Gava for a Replacement Part when the part replaced is not
                        returned by Customer to Gava within 10 days after the date the Replacement Part was delivered to
                        Customer by Gava. Prices of the part replaced will be at Gava&#39;s then current standard price in the Territory.
                        <br></br><br></br>
                        3.5 The provisions of this Agreement shall apply to all replacements of any part or parts of the Products
                        made by Gava during the continuance of this Agreement.
                        <br></br><br></br>
                        4. Customer&#39;s Obligations
                        <br></br><br></br>
                        4.1 During the continuance of this Agreement, the Customer shall:-
                        <br></br><br></br>

                        4.1.1 Facilities
                        <br></br><br></br>
                        (a) Provide Gava with full, safe and prompt access to the Products to enable Gava to carry out its obligations
                        under this Agreement.
                        <br></br><br></br>
                        (b) Provide adequate working space around the Products for the use of Gava&#39;s personnel and make
                        available all reasonable facilities as may be requested from time to time by Gava for the storage and safe
                        keeping of any test equipment and spare parts.
                        <br></br><br></br>
                        (c) Use all reasonable endeavours to provide a suitable vehicle parking facility for use by Gava&#39;s personnel
                        which is not used for any other testing, diagnostic and remedial purposes at the Customer&#39;s expense.
                        <br></br><br></br>
                        (d) Use all reasonable endeavours to provide a suitable vehicle parking facility for use by Gava&#39;s personnel
                        which is free from any legal restrictions and which is immediately close to the Location.
                        <br></br><br></br>
                        (e) Ensure, in the interest of health and safety, that Gava&#39;s personnel are met promptly by a member of the
                        Customer&#39;s staff and while on the Customer&#39;s premises for the purposes of this Agreement, are at all times
                        accompanied by a member of the Customer&#39;s staff familiar with the Customer&#39;s premises and safety
                        procedures.
                        <br></br><br></br>
                        (f) Make available to Gava, free of charge, all facilities and services reasonably required by Gava to enable
                        Gava properly to provide the Services under this Agreement.
                        <br></br><br></br>
                        (g) Provide such telecommunication facilities as are reasonably required.
                        <br></br><br></br>
                        4.1.2 Use and Care
                        <br></br><br></br>
                        (a) Make sure that proper environmental conditions (in particular those (if any) defined in the relevant
                        Product user manuals) are maintained for the Products and shall further maintain in good condition the place
                        where the Products are situated, the cables and fittings to the Products and associated with the Products,
                        and the electricity supply thereto.
                        <br></br><br></br>
                        (b) Save for discrete additions generally recognised as being compatible with the Products, not make any
                        modifications to the Products without Gava&#39;s prior consent.
                        <br></br><br></br>
                        (c) Ensure that the Products are used in a proper manner, in accordance with the Product user manuals and
                        by competent trained employees only or by persons under their supervision.
                        <br></br><br></br>
                        (d) Ensure that the external surfaces of the Products are, where appropriate, kept clean and in good
                        condition and shall carry out any minor maintenance requirements recommended by Gava (or recommended
                        in the relevant Product user manual) from time to time.
                        <br></br><br></br>
                        (e) Save as aforesaid, and except when operating under:
                        <br></br>
                        (i) a Gava Agreement or in accordance with a Service Offering which provides otherwise; or
                        <br></br>
                        (ii) under instructions from the Gava Telephone Support; not attempt to adjust, repair, support or maintain the
                        Products and shall not request, permit or authorise anyone other than Gava or the manufacturer of the
                        Products (where such Products are under a warranty from a manufacturer other than Gava) to carry out any
                        adjustments, repairs, support or maintenance of the Products.
                        <br></br><br></br>
                        (f) Use on or with the Products only such accessory, attachment, component or additional equipment or
                        products as Gava recommends, or are recommended in accordance with the Product user manuals, or are
                        commonly and properly used on or with the Products.
                        <br></br><br></br>
                        (g) Not use in conjunction with the Products any accessory, attachment, component or additional equipment
                        or products other than those which have been supplied or approved by Gava for use in the manner
                        proposed, or which are specifically approved as compatible by the relevant Product user manuals.
                        <br></br><br></br>
                        4.1.3 Notification and Information
                        <br></br><br></br>

                        (a) Promptly notify Gava if the Products need service or are not operating correctly. Failure by the Customer
                        to notify Gava within 2 weeks of the Customer first becoming aware of such failure or incorrect working shall
                        free Gava from all obligations to investigate or correct such failure or incorrect working.
                        <br></br><br></br>
                        (b) Make available to Gava, free of charge, such information as may be necessary to enable Gava properly
                        to conduct telephone diagnosis as part of the Gava Telephone Support service, and in addition, such
                        programs, operating manuals and information to enable Gava properly to perform its obligations under this
                        Agreement and shall use its best endeavours to provide staff familiar with the Customer&#39;s programs and
                        operations, which staff shall co-operate fully with Gava personnel operating Gava&#39;s Telephone Support or
                        present on-site, as the case may be, in the diagnosis of any malfunction of the Products.
                        <br></br><br></br>
                        Database and Software Keep full security copies of any of the Products comprising Software and of the
                        Customer&#39;s programs, databases and computer records in accordance with best computing practice and in
                        any case before requesting Services from Gava. The Customer acknowledges that they are responsible for
                        re-loading their own application software after any such Services have been provided. It is the Customer&#39;s
                        responsibility to backup data on the system. Gava will not be responsible for loss of or damage to data or
                        loss of use of any of the computer or network systems.
                        <br></br><br></br>
                        4.2 The Customer must grant the service technician full access to the system and (at no cost to Gava) have
                        working space, electricity and a local telephone line. If these requirements are lacking, Gava is not obligated
                        to provide service. In addition, Gava is not obligated to provide service if the Customer fails to provide an
                        environment that is conducive to computer repair, including for example, if the Customer insists on service to
                        be provided at varying locations, if the Customer fails to properly restrain a pet, if the Customer threatens
                        Gava technician either verbally or physically, or if the Customer location or the general area where the
                        system is located is dangerous, infested with insects, rodents, pests, biohazards, human or animal
                        excrement and/or chemicals as reasonably determined to be unsafe by Gava technician.
                        <br></br><br></br>
                        4.3 To receive service and support, the Customer is responsible for complying with the following:
                        <br></br><br></br>
                        (a) Prepare for the Call. The Customer can help the technician serve better if the Customer has the following
                        information and materials ready when the call is made: the Customer System&#39;s Invoice and serial numbers;
                        service tag number; model number; the current version of the operating system being used; and the brand
                        names and models of any peripheral devices (such as a modem, printer or scanner) being used.
                        <br></br><br></br>
                        (b) Explain the Problem to the Technician. The Customer should describe the problem the Customer is
                        having with the System. Let the technician know what the error message is and when it occurs; what was
                        being done when the error occurred; and what steps have already been taken to solve the problem.
                        <br></br><br></br>
                        (c) Cooperate with the technician. Listen carefully to the technician and follow the technician&#39;s directions.
                        <br></br><br></br>
                        (d) If the technician is unable to resolve the problem over the phone, the technician will recommend to the
                        Customer the next course of action to be taken.
                        Until the customer has complied with the above procedures, Gava cannot provide the customer with service
                        and support.
                        <br></br><br></br>
                        5. Liability
                        <br></br><br></br>
                        5.1 Gava warrants that services will be performed in a good and workmanlike manner. Except as expressly
                        stated in the preceding sentence, Gava makes no express or implied warranties with respect to the services,
                        including but no limited to any warranty relating to third party products, any warranty with respect to the
                        performance of any hardware or software used in conducting services, any express or implied warranties
                        concerning the results to be obtained from the services or warranties concerning the results to be obtained
                        from the services or the results of any recommendation Gava may make, including without limitation any
                        implied warranties concerning the performance, merchantability, suitability, non-infringement or fitness for a
                        particular purpose of any of the deliverables or of any system that may result from the implementation of any
                        recommendation Gava may provide. Nothing in this agreement or any other written documentation or any
                        oral communications with customer may later alter the terms and conditions of this paragraph.
                        <br></br><br></br>

                        5.2 Gava shall not be liable for any loss or damage sustained or incurred by the Customer or any third party
                        (including without limitation any loss of use of the Products or loss of or spoiling of any of the Customer&#39;s
                        programs or data) resulting from any lines down of or fault in the Products, unless such lines down or fault is
                        caused by the negligence or wilful misconduct of Gava, its employees, agents or sub-contractors, or to the
                        extent that such loss or damage arises from any negligent delay by Gava in providing the particular Services
                        purchased by the Customer and then only to the extent not excluded by this Agreement.
                        <br></br><br></br>
                        5.3 The Customer shall indemnify Gava and keep Gava fully and effectively indemnified against any loss of
                        or damage to any property or injury to or death of any persons caused by any negligent act or omission or
                        willful misconduct of the Customer, its employees, agents or sub-contractors or by any breach of its
                        contractual obligations arising out of this Agreement.
                        <br></br><br></br>
                        5.4 Except in respect of injury to or death of any person, for which no limit applies, Gava&#39;s total liability to the
                        Customer under this Agreement in respect of each event or series of connected events is limited to the
                        amount paid by the Customer for the relevant Services(which gives rise to the claim) purchased by the
                        Customer as evidenced on the Invoice.
                        <br></br><br></br>
                        5.5 Any service response times stated by Gava in the Service Offerings are approximate only and shall not
                        form part of the Contract. Gava will use all reasonable endeavours to meet the stated response times,
                        however Gava shall not be liable for any direct or indirect loss or damage arising from it&#39;s failure to meet
                        such response times, howsoever occasioned.
                        <br></br><br></br>
                        5.6 Notwithstanding anything else contained in this Agreement, Gava shall not be liable to the Customer for
                        loss of business, profits or contracts or other indirect or consequential loss whether arising from negligence,
                        breach of contract or howsoever.
                        <br></br><br></br>
                        5.7 Some Services may require Gava to access hardware or software that is not manufactured by Gava.
                        Some manufacturers&#39; warranties may become void if Gava or anyone else, other than the manufacturer or its
                        authorized representative, works on the hardware or software.  Gava does not take responsibility for third
                        party warranties or for any effect that the Gava services may have on those warranties.
                        <br></br><br></br>
                        6. Waiver
                        <br></br><br></br>
                        Except as otherwise expressly provided for in this Agreement, no forbearance, delay or indulgence by either
                        party in enforcing the provisions of this Agreement shall prejudice or restrict the rights of that party, nor shall
                        any waiver of its rights operate as a waiver of any subsequent breach, and no right, power or remedy herein
                        conferred upon or reserved for either party, is exclusive of any other right, power or remedy available to that
                        party and each such right, power or remedy shall be cumulative.
                        <br></br><br></br>
                        7. Consumers
                        <br></br><br></br>
                        Nothing in this Agreement shall affect the statutory right of a Customer dealing with Gava as a consumer as
                        defined in any consumer protection legislation intended to protect consumers in similar transactions.
                        <br></br><br></br>
                        8. Subcontracting
                        <br></br><br></br>
                        Gava has the right to subcontract the Services provided under this Agreement to any of its authorized
                        service providers.
                        <br></br><br></br>
                        9. Severance
                        <br></br><br></br>
                        If any provision of this Agreement (including terms contained in a relevant Service Offering) is held by any
                        competent authority to be invalid or unenforceable in whole or in part the validity of the other provisions of
                        this Agreement and the remainder of the provisions in question shall not be affected thereby.
                        <br></br><br></br>
                        10. Warranty
                        <br></br>
                        10.1 Unless specified otherwise, Gava warrants to the Customer that Gava‐ branded Products will from
                        invoice date be free from defects in materials and workmanship affecting normal use for a period of one year
                        or such other period as may be set out in Gava&#39;s invoice.(&quot;Standard Warranty&quot; And &quot;Relevant Warranty&quot;
                        period as appropriate).
                        <br></br><br></br>

                        10.2 This Standard Warranty or Relevant Warranty does not cover damage, fault, failure or malfunction due
                        to external causes, including accident, abuse, misuse, problems with electrical power, servicing not
                        authorized by Gava, usage and/or storage and/or installation not in accordance with Product instructions,
                        failure to perform required preventive maintenance, normal wear and tear, act of God, fire, flood, war, act of
                        violence or any similar occurrence; products with missing or altered Service Tags or serial numbers; any
                        attempt by any person other than Gava personnel or any person authorised by Gava, to adjust, repair or
                        support the Products and problems caused by use of parts and components not supplied by Gava. The
                        Standard Warranty or Relevant Warranty does not cover any items that are in one or more of the following
                        categories: software; external devices; accessories or parts added to the Product after the Product is
                        shipped from Gava; accessories or parts added to the Product through Gava&#39;s Custom Factory Integration
                        (CFI) program; accessories or parts that are not installed in the Gava factory; or Third Party Products
                        purchased under Gava Software &amp; Peripherals (S&amp;P) Program.
                        <br></br><br></br>
                        10.3 Subject to clause 9 below, if a valid claim is received during the Standard Warranty or Relevant
                        Warranty period during the Standard Warranty or Relevant Warranty period as the case may be and
                        beginning on the invoice date, Gava will repair or replace Gava‐branded Products returned to Gava&#39;s facility
                        at its option and to the extent permitted by law. Customer must prepay shipping and transportation charges,
                        and insure the shipment or accept the risk of loss or damage during such shipment and transportation. Gava
                        will ship the repaired or replacement Products to Customer freight prepaid.
                        <br></br><br></br>
                        10.4 Gava does not give any warranty that the Products are fit for any particular purpose and this Standard
                        Warranty is given in place of all warranties, conditions, terms, undertakings and obligations implied by
                        statute, common law, trade usage, course of dealing or otherwise including warranties or conditions of
                        merchantability, fitness for purpose, satisfactory quality and/or compliance with description, all of which are
                        hereby excluded to the fullest extent permitted by law. To the extent permitted by law, the Standard Warranty
                        and remedies set forth herein are exclusive and in lieu of all other warranties, remedies and conditions,
                        whether oral or written, statutory, express or implied. If Gava cannot lawfully disclaim Statutory or implied
                        warranties then to the extent permitted by law, all such warranties shall be limited in duration to the duration
                        of this Standard Warranty and to repair or replacement service as determined by Gava in its sole discretion.
                        No Gava reseller, agent, or employee is authorized to make any modification, extension, or addition to this
                        warranty.
                        <br></br><br></br>
                        10.5 The Customer agrees that, in relation to Third Party Products purchased through Gava, where such of
                        the Products are covered by a relevant manufacturer&#39;s warranty, then the Standard Warranty shall not extend
                        to such Third Party Products and such manufacturer&#39;s warranty shall be the sole warranty in respect of such
                        Third Party Products. The Customer shall utilise that warranty for the support of such Third Party Products
                        and in any event not look to Gava but shall look to the relevant manufacturer for such warranty support.
                        Gava in so far as permitted by law, provides Third Party Products &quot;as is&quot;.
                        <br></br><br></br>
                        10.6 For systems/Gava products wherein the country of origin is not India or purchased outside India will be
                        limited support and services only on best effort basis and the same shall not be entitled to any replacement
                        or refund.
                        <br></br><br></br>
                        10.7 Gava INCORPORATES ITS CONSUMER WARRANTIES REFERENCED ABOVE WHICH APPLY TO
                        PURCHASES OF Gava-BRANDED HARDWARE. Gava MAKES NO WARRANTIES FOR SERVICE,
                        SOFTWARE, MAINTENANCE OR SUPPORT OR FOR NON- Gava BRANDED PRODUCT, WHICH ARE
                        PROVIDED &quot;AS IS,&quot; AND DISCLAIMS ALL OTHER WARRANTIES AND CONDITIONS, EXPRESS OR
                        IMPLIED, STATUTORY OR OTHERWISE, INCLUDING WITHOUT LIMITATION, WARRANTIES OF
                        MERCHANTABILITY, MERCHANTABLE QUALITY AND FITNESS FOR A PARTICULAR PURPOSE, AND
                        WARRANTIES AND CONDITIONS AGAINST HIDDEN OR LATENT DEFECTS. SOME STATES DO NOT
                        ALLOW LIMITATION OF WARRANTIES, SO THESE LIMITATIONS MAY NOT APPLY TO YOU.
                        <br></br><br></br>
                        11. Service and Technical Support
                        <br></br>
                        11.1 Gava will provide general service and technical support to Customer in accordance with the
                        then‐current service and technical support policies in effect. Service and support offerings may vary from
                        product to product. If Customer purchases optional services and support as listed on Gava&#39;s invoice, Gava
                        will provide the optional service and support to Customer in accordance with the then‐current terms and
                        conditions in the optional service contract between Gava and Customer (available via the Internet on Gava&#39;s
                        Web site at //www.gava.co.in/ or upon request) in addition to the Standard Warranty or Relevant Warranty.
                        Gava may, at its discretion, revise its general and optional service and support programs and the terms and

                        conditions that govern them. Gava has no obligation to provide service or support until Gava has received
                        full payment for the Product or service/support contract for which service or support is requested.
                        <br></br><br></br>
                        11.2 Telephone communications with us, our agents or independent contractors may be monitored and/or
                        recorded. You expressly consent, on behalf of yourself and other users of your phone number, to such
                        monitoring or recording. By providing us with a phone number (including mobile) as your contact number,
                        you expressly authorize us to contact you on that number via text message or telephone, including via
                        prerecorded or auto-dialed calls. This consent is for non-telemarketing calls only.
                        <br></br><br></br>
                        11.3 IT IS YOUR RESPONSIBILITY TO BACK UP ALL EXISTING DATA, SOFTWARE AND PROGRAMS
                        BEFORE RECEIVING SERVICES OR SUPPORT (INCLUDING TELEPHONE SUPPORT). Gava AND/OR
                        YOUR THIRD-PARTY SERVICE PROVIDER WILL HAVE NO LIABILITY FOR LOSS OR RECOVERY OF
                        DATA OR PROGRAMS, OR FOR LOSS OF USE OF SYSTEM(S) ARISING OUT OF THE SERVICES OR
                        SUPPORT OR ANY ACT OR OMISSION, INCLUDING NEGLIGENCE, BY Gava OR YOUR-THIRD-PARTY
                        SERVICE PROVIDER. Parts used in repairing or servicing Product(s) may be new, equivalent-to-new, or
                        reconditioned.
                        <br></br><br></br>
                        12. Orders, Price and Payment
                        <br></br>
                        12.1 Unless credit terms have been expressly agreed by Gava, payment for the Products or services
                        including applicable taxes shall be made in full before physical delivery of Products or services.
                        <br></br><br></br>
                        12.2 Customer shall bear all country, provincial, municipal, government, state and local sales, use, goods
                        and services, value added, excise, privilege and similar levies/taxes
                        <br></br><br></br>
                        12.3 Time for payment is of the essence. Gava reserves the right to charge interest at the rate of 2% per
                        month from the date on which the payment was due till the date of actual receipt of payment.
                        <br></br><br></br>
                        12.4 Unless Customer and Gava have agreed to a different discount, Gava&#39;s standard pricing policy for Gava
                        branded systems, which include both hardware and services in one discounted price, allocates the discount
                        off list price applicable to the service portion of the system to be equal to the overall calculated percentage
                        discount off list price on the entire system.
                        <br></br><br></br>
                        12.5 Prices and promotions are subject to change. Gava strives to communicate accurate pricing and
                        product information, but errors may occur. In the unlikely event that an error impacts your order, or a Product
                        ordered is no longer available, we will either contact you for instructions or cancel your order.
                        <br></br><br></br>
                        13. Taxes and Fees.
                        <br></br>
                        Unless you provide Gava with a valid and correct tax exemption certificate, you are responsible for sales and
                        other taxes associated with your order.
                        <br></br><br></br>
                        The Finance Act, 2020 has introduced Tax Collection at Source (“TCS”) provisions (effective from 1st
                        October 2020 or such further date as notified by the Government hereinafter known as ‘’effective date’’) in
                        the Income-tax Act, 1961 (“the Act”) requiring a seller to collect TCS on consideration for sale of goods in
                        excess of the prescribed threshold limit (i.e. INR 50 lakhs or any other limit as prescribed by the
                        Government) in aggregate in a financial year. Accordingly, if the cumulative consideration for sale of goods
                        (including sale of goods made prior to effective date) receivable by Gava (on or after the effective date) in a
                        financial year(s) or if the cumulative gross value of goods sold (inclusive of taxes) in a financial year,
                        exceeds the prescribed threshold, TCS would be charged / collected at the applicable rates on such
                        consideration received / receivable or on such gross value of goods sold (inclusive of taxes), on or after the
                        effective date. Gava / EMC, in accordance with the provision of the Act, reserves the right to charge / collect /
                        adjust TCS through an intimation in any form including by way of a debit / credit note, invoice or any other
                        means either at the time of the transaction or separately.
                        <br></br><br></br>
                        Hence, in addition to GST (as may be applicable), TCS would be separately charged/ collected (as
                        mentioned above, if applicable).
                        </p>
                    </div>
                </div>
            </div>
        </ContainerHomeElectronics>
    );
}

export default TermsConditions;
