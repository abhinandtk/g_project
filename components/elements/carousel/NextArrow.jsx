import React from 'react';

const NextArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-next ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-right"></i>
            )}
        </a>
    );
};

export default NextArrow;


const NextArrowMainBanner = (props) => {
    const { className, onClick, icon } = props;
    return (
        <div  onClick={onClick} className='arrow-btn-banner' style={{ position:"absolute",bottom:"40%",right:"1rem",padding:"1rem",color:"white",cursor:"pointer"}}>
        <a className={`slick-arrow slick-next ${className}`}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-right"></i>
            )}
        </a>
        </div>
    );
}

export  {NextArrowMainBanner}