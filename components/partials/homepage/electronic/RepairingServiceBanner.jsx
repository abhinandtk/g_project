import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { maxHeight } from '@mui/system';
import RepSerList from '../../service/RepSerList';
import apis from '~/public/static/data/my-constants/Api';
import { useHistory } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import Link from 'next/link';

function RepairingServiceBanner() {
    // const history = useHistory();
    const [serviceList, setServiceList] = useState([]);

    useEffect(() => {
        Axios.post(apis.navBar).then((res) => {
            setServiceList(res.data.data.services);
        });
    }, []);

    return (
        <div className="container-fluid row">
            <Col xs={12} md={12} lg={4} style={{ paddingLeft: '35px' }}>
                <div style={{ width: '100%', backgroundColor: '#2091D0' }}>
                    <img
                        style={{
                            objectFit: '',
                            maxHeight: '550px',
                            width: '100%',
                        }}
                        src="static/img/service/321X452serviceBanner.jpg"
                    />
                    {/* <div className='repair-service-left'>
            <h2>Looking for a fast and reliable repair service? </h2>
            <button className='btn-repair' onClick={() => {router.push('/service')}}>Book Now</button>
          </div> */}
                </div>
            </Col>
            <Col xs={12} md={12} lg={8} style={{ padding: '0' }}>
                <div className="row">
                    {serviceList.slice(0, 8).map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="card border-0  col-6 col-md-4 col-lg-3">
                                <div className="card-wrapper">
                                    <Link href="/service#servicelist">
                                        <div
                                            className="card-box align-center"
                                            style={{
                                                padding: '10px',
                                                textAlign: 'center',
                                                borderRadius: '10px',
                                                cursor: 'pointer',
                                            }}>
                                            <img
                                                src={`${constants.port}${item.icons}`}
                                                style={{
                                                    padding: '10px',
                                                }}></img>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Col>
        </div>
    );
}

export default RepairingServiceBanner;
