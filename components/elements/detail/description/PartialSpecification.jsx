import React from 'react';
import { useSelector } from 'react-redux';

const PartialSpecification = ({ product }) => {
    const prVarientId = useSelector((state) => state.datas.proVarient);
    let allSpecifications = [];

    product.Product_Items.map((item, index) => {
        item.multivarient.length !== 0
            ? item.multivarient.map((item_, index_) => {
                  if (item_.slug_id === prVarientId) {
                      return (allSpecifications = item_.specification);
                  }
              })
            : item.slug_id === prVarientId ?
                allSpecifications = item.specification : null
            
            
               
    });



    return (
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    {allSpecifications.map((item, index) => {
                        return (
                            item[1] != null ?
                            <tr key={index}>
                                <td style={{width:"20%",minWidth:"200px"}}>{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>
                            :<></>
                        );
                    })}

                 
                </tbody>
            </table>
        </div>
    );
};

export default PartialSpecification;
