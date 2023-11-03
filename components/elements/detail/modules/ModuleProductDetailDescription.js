import React from 'react';
import Link from 'next/link';
import ReactHtmlParser from 'react-html-parser';

// var wrapper= document.createElement('div');
// wrapper.innerHTML= '<div><a href="#">ddddddddddd ddd </a><span>fdfd</span></div>';
// var div= wrapper.firstChild;
const ModuleProductDetailDescription = ({ product ,arabic}) => (
    
    <div className="ps-product__desc">
        {/* <p>
            Sold By:
            <Link href="/shop">
                <a>
                    <strong> {product.vendor}</strong>
                </a>
            </Link>
        </p> */}

        <ul className="ps-list--dot" style={{textAlign:arabic && 'right'}}>
            {/* <li>Unrestrained and portable active stereo speaker</li>
            <li> Free from the confines of wires and chords</li>
            <li> 20 hours of portable capabilities</li>
            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
            <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li> */}

            <p className='abc'>
            {/* { } */}
            { !arabic?   ReactHtmlParser(product.Description) :ReactHtmlParser(product.arabic_description ) }
            
            {/* {div} */}
            </p>
          
        

            
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
