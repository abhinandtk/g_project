import { useRouter } from 'next/router'
import React from 'react'
import constants from '~/public/static/data/my-constants/Constants'

function RepSerList({ repair }) {

    const router = useRouter();

  return (
    <section className="m-5 features13 cid-rOM3aYqA4m" id="features013-39">
        <div className="row">

            <div className="col-12 col-lg-12">
                <div className="title_block text-center">
                    <h3  style={{color:"#000F44"}}>Repairing Service </h3>
                </div>
            </div>

            {repair.map((item,index) => { 
                return (                
            <div key={index} className="card border-0  col-6 col-md-4 col-lg-2">
                <div className="card-wrapper">
                    <div onClick={() => {router.push('/service#servicelist')}} className="card-box align-center" style={{padding:"10px",textAlign:"center",borderRadius:"10px",cursor:'pointer'}}>
                        <img src={`${constants.port}${item.icons}`} style={{padding:"10px"}}></img>
                    
                    </div>
                </div>
            </div> 
            )})
            }           
        </div>
        
   
</section>
  )
}

export default RepSerList