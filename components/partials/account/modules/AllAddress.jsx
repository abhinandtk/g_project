import React from 'react';

function AllAddress(props) {
    return (
        <figure className="ps-block--address" style={{ marginTop: '2rem' ,}}>
            <div className="ps-block__content">
                <div
                 
                    className={`ps-block--address__address `}
                    onClick={() =>
                        props.handleSetDefaultAddress(props.address.addressId)
                    }>
               
                    <p style={{ fontWeight: '600', fontSize: '25px' }}>
                        {props.address.name}
                    </p>
                    <p>
                        {props.address.streetAddress}, {props.address.state},{' '}
                        {props.address.postcode}, {props.address.phone}{' '}
                    </p>
                </div>

            </div>
        </figure>
    );
}

export default AllAddress;
