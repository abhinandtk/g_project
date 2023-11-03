import React from 'react'
import constants from '~/public/static/data/my-constants/Constants'

function HeaderCategories({ data, lang }) {

    return (
        <>
            {data && (
                <div  className="col-12 pb-2 d-flex  bg-white justify-content-center" >
                    <div className='headercat' style={{display:"flex",overflowX:"auto",whiteSpace:"nowrap"}}>
                    {
                        data.map((item) =>
                            <div className="px-3 mb-2 mt-3 " style={{ color: "black"}} key={item}>
                                <a href={item.category_url}>
                                <div>
                                    <center>
                                        <img height={50} alt={item.category_name} title={item.category_name} src={`${constants.port}${item.category_image}`} />
                                    </center>
                                </div>
                                <div>{lang == 'english' ? item.category_name : item.arabic_translator}</div>
                                </a> 
                            </div>
                        )
                    }

                    </div>
                </div>
            )}
        </>
    )
}

export default HeaderCategories