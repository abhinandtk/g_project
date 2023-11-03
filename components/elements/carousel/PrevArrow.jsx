import React from 'react';

const PrevArrow = (props) => {
    const { className, onClick, icon } = props;
    return (
        <a className={`slick-arrow slick-prev ${className}`} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-left"></i>
            )}
        </a>
    );
};

export default PrevArrow;


const PrevArrowMainBanner = (props) => {
    const { className, onClick, icon } = props;
    return (
        <div onClick={onClick} className='arrow-btn-banner' style={{position:"absolute",bottom:"40%",left:"1rem",padding:"1rem",zIndex:"1",color:"white",cursor:"pointer"}}>

            <a className={`slick-arrow slick-prev ${className}`} >
                {icon ? (
                    <i className={icon}></i>
                ) : (
                    <i className="icon-chevron-left"></i>
                )}
            </a>
        </div>
    );
};

export {PrevArrowMainBanner}