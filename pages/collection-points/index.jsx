import { Card ,Avatar} from 'antd'
import React, { useEffect, useState } from 'react'
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics'
import Axios from 'axios'
import apis from '~/components/myspace/constants/Api'
function CollectionPoints() {
  const [collectionPoints,setCollectionPoints] = useState([])
  useEffect(() =>{
  Axios.get(apis.collectionPoints)
  .then((res) => {
    setCollectionPoints(res.data.collection)
  })
  },[])
  return (
    <ContainerHomeElectronics title='collection Points'>
        <div style={{margin:"40px"}}>
          <div className='sell-form-header' style={{margin:"40px 0"}}>
            <h3>Collection Points</h3>
            <p>Gava ecommerce: Shop online, collect in person. Convenient collection points for hassle-free shopping.
            Shop online with Gava ecommerce,And collect your purchases with ease,At our convenient collection points,
            Where customer service will please.We offer a shopping experience,That combines the best of both worlds,
            Online convenience and in-person care,With Gava ecommerce, you&apos;re surely sold.

            </p>
          </div>
          <div className='row'>
             {collectionPoints.map((item,index) =>{
              return(
              <Card
                key={index}
                hoverable
                className='col-md-6 col-lg-4'
                style={{position:"relative",textAlign:"center",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",}}
              >
                  <h3>{item.name}</h3>
                  <p style={{ 
                    display: '-webkit-box', 
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    padding:"0 3rem"}}
                  >
                    {item.address}
                  </p>
                  <a href={`tel:${item.phone}`}>{item.phone}</a>
                  <a href={item.gmap_link} style={{position:"absolute",bottom:"3px",right:"0",margin:"16px"}} target='_blank' rel="noreferrer">
                  <Avatar 
                      src='../static/img/collection/collection-sign.png'
                  /></a>  
              </Card>)}
              )}
          </div>
        </div>
    </ContainerHomeElectronics>
  )
}

export default CollectionPoints

