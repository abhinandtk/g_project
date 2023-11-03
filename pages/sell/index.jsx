import { Checkbox } from 'antd'
import  Axios  from 'axios'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { useState } from 'react'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'
import apis from '~/components/myspace/constants/Api'
import SellFormDetails from '~/components/partials/account/modules/SellTopFormDetails'

function SellPage() {

  const [category,setCategory] = useState([])

  useEffect(() => {
    Axios.post(apis.mainpage)
      .then((res) => {
        setCategory(res.data.data.top_catagory)
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
      title={'Sell'}>
        <div style={{margin:"4%"}}><img src='static/img/home_bannercard/home_bottom_ban.jpg'  width="100%" alt='gava'/></div>
        <div>
            <div style={{marginLeft:"40px"}}>
                <div className='sell-form-header'><h2>Sell old Mobile phones, Tablets, Laptops </h2></div>
                <p>Sell your items fast,Enter details about your products to get your price</p>
            </div>
            <SellFormDetails categoryData={category} />
        </div>
  </ContainerHomeElectronics>

  </>)
}

export default SellPage