import React from 'react';
import Header from '../pasges/Shaired/Header/Header';
import Footer from '../pasges/Shaired/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pasges/Shaired/LeftNav/LeftNav';
import RightNav from '../pasges/Shaired/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pasges/Shaired/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>

                <Row>
                    <Col lg={3}>

                        <LeftNav></LeftNav>

                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;