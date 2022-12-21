import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';
import RightSideContent from '../RightSideContent/RightSideContent';


const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='mt-3 mb-3'>
            <Row>
                <Col lg="4" sm="12" className=' d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg = "8" sm="12">
                    <div className='d-flex flex-wrap justify-content-center gap-4'>
                            {
                                courses.map(course=> <RightSideContent
                                key = {course.id}
                                course = {course}
                                ></RightSideContent>)
                            }
                    </div>
                </Col>
            </Row>
            </div>
    );
};

export default Courses;