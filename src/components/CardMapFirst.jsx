import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MapCarddata } from '../Mapdata'

const CardMapFirst = () => {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    {MapCarddata.map((data) => {
                        return (
                            <Col key={data.id} md={6} lg={4} className='d-flex align-items-center justify-content-center pt-4' >
                                <div className='mapbox'>
                                    <div className=' d-flex align-items-center justify-content-center'>
                                        <img className='w-100' src={data.img} alt="" />
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-center'>
                                        <h2 className=''>{data.heading}</h2>
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-center text-center'>
                                        <p className='max_width_para'>{data.paragraph}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                    }
                </Row>
            </Container>
        </>
    )
}

export default CardMapFirst