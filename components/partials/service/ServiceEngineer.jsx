import React from 'react'
import constants from '~/public/static/data/my-constants/Constants'

function ServiceEngineer({ engineer}) {
  return (
    <>
    {engineer !== null ? 
    <section style={{paddingBottom:"50px"}} id="team-9">
    <div className="container">
        <div className="row">
            <div className="col-12 col-lg-12  mb-5">
                <div className="title_block text-center">
                    <h3 className=" mt-4 mb-4 mbr-section-subtitle mbr-fonts-style display-4"><strong>Service Engineers</strong></h3>

                    <p> We have a panel of professional service engineers to lead the technical team, and their skills are reflected in the quality of products and services from Gava. They are efficient enough to manage every brand, including premium brands like Apple and all types of electronic gadgets.</p>
                </div>
            </div>
            { engineer.map((item,index) => {
                return (
            <div className="item features-image col-12 col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="item-wrapper text-center">
                        <div className="item-img">
                            <img src={`${constants.port}${item.photo}`} alt="gava" width="200px"/>                       
                        </div>
                        <h4 style={{marginTop:"15px"}}><strong>{item.name} </strong></h4>
                        <p className="">{item.designation}</p>
                </div>
            </div>
                )
            })
            }


        </div>
    </div>
</section> : <></> }
 

</>

      


  )
}

export default ServiceEngineer