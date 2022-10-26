import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideContent from '../RightSideContent/RightSideContent';
import LeftSideNav from '../../LeftSideNav/LeftSideNav';

const Courses = () => {

    return (
        <div>
             <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg = "8">
                    <RightSideContent></RightSideContent>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Courses;