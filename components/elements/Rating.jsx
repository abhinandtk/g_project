import React from 'react';

const Rating = ({ratingCount}) => (
    <span className="ps-rating">
        
        {[...Array(ratingCount)].map((e, i) => (
            <i className="fa fa-star" key={i}></i>
        ))}
       
    </span>
);

export default Rating;