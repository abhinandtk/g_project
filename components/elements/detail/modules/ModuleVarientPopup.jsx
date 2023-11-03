import React from 'react'

function ModuleVarientPopup({varientPopup ,varient_value}) {
  return (
    <div className='varient_details rounded'>
        {varientPopup.map((item,index) => {
            return (
              <table style={{width:"100%",color:`${varient_value === item.Varient_Values ? "green" : ''}`}} key={index}>
                <tr>
                  <td style={{width:"15%",fontSize:"12px",fontWeight:"bold"}}>{item.Varient_Values}</td>
                  <td style={{width:"1%"}}>:</td>
                  <td  style={{fontSize:"12px"}}>{item.Varient_Desc}</td>
                </tr>
              </table>    
            )
        })} 

    </div>
  )
}

export default ModuleVarientPopup