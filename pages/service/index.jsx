import  Axios  from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'
import apis from '~/components/myspace/constants/Api'
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures'
import RepairingServiceForm from '~/components/partials/service/RepairingServiceForm'
import RepSerList from '~/components/partials/service/RepSerList'
import ServiceEngineer from '~/components/partials/service/ServiceEngineer'
import WhyChooseUs from '~/components/partials/service/WhyChooseUs'
import WorkProcessBox from '~/components/partials/service/WorkProcessBox'

function ServicePage() {
  const router = useRouter()
  const currentUrl = router.asPath

  const [serviceList,setServiceList] = useState([]);
  const [engineerList,setEngineerList] = useState([]);
  useEffect(() => {
    Axios.post(apis.navBar)
    .then((res) => {    
      setServiceList(res.data.data.services)
      setEngineerList(res.data.data.service_engineers)
      if (currentUrl.includes('#servicelist')){
        router.push('/service#servicelist')
      }
      else{
        router.push('/service#top')
      }
    })
  },[])
  return (
    <>
    <React.Fragment>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-Q0SB10G1ZD');`
                    }}
                ></script>
            </Head>
            <noscript
                dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-Q0SB10G1ZD" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}>
            </noscript>
        </React.Fragment>
    <ContainerHomeElectronics
    title={'Service'} id="top">   
                <div className="row" style={{backgroundColor:"#2091D0",width:"100%",margin:"0px"}}>
                  <div style={{width:"100%"}}><img style={{width:"100%"}} src='static/img/service/service_pg_banner.jpg' /></div>
                  {/* <div className="col-8" style={{padding:"8%",color:"white",fontSize:"3vw"}}>Looking for a fast and reliable repair service?<br></br><u style={{fontSize:"2vw"}}>Book Now</u></div> */}
                </div> 

        <RepSerList repair={serviceList} />
        <RepairingServiceForm device={serviceList} />
        <WhyChooseUs />
        <WorkProcessBox />
        <ServiceEngineer engineer={engineerList} />
        
        

    </ContainerHomeElectronics>
    </>)
}

export default ServicePage