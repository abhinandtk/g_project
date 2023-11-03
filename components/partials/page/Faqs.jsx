import { Collapse } from 'antd'
import React from 'react'
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import constants from '~/public/static/data/my-constants/Constants';

function Faqs({datas}) {
    const { Panel } = Collapse;
    const language = useLanguageHook();

  return (
    <div className="ps-section--custom">
    <div className="container">
        <div className="ps-section__header">
            <h2>FAQs</h2>
        </div>
        <div className="ps-section__content">
            <Collapse bordered={false}  accordion className='faq-collapse'>
                {datas.map((item,index)=>{
                    return(
                    <Panel   header={ language=== constants.English ? item.title:item.arabic_title}  key={index}>
                    <p  style={{textAlign: language=== constants.Arabic &&'right' }}>
                        {language=== constants.English ? item.description:item.arabic_description}
                    </p>
                    </Panel>
                    )
                })}
                
                
            </Collapse>
        </div>
    </div>
</div>
  )
}

export default Faqs