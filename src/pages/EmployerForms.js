import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./EmployerForms.css";
import { ReactComponent as Avatar } from "../Assets/AccountCircle.svg";
import { ReactComponent as Image } from "../Assets/forms.svg";
import { Button, Space } from 'antd';
import ProgressGraph from "../components/ProgressGraph";


function EmployerForms() {
    return (
        <div>
            <NavigationBar />
            <PageBanner />
            <Container className="Dashboard">
                <h2 xs md={3} className="DashboardHeader">I9 Forms/Documents</h2>
            </Container>
            <Container>
                {" "}
                <Row>
                    {" "}
                    <Col xs md={3} className="profile">
                        {" "}
                        <Container>
                            {" "}
                            <Row>
                                {" "}
                                <Col className="text-center mt-5">
                                    {" "}
                                    <Avatar /> <h5 className="employee">Juan Cambell</h5>{" "}
                                    <p>Employer</p>{" "}
                                </Col>{" "}
                            </Row>{" "}
                            <Row className="text-center mt-2">
                                {" "}
                                <Col>
                                    {" "}
                                    <p>
                                        {" "}
                                        Employee ID:

                                    </p>{" "}

                                </Col>{" "}
                            </Row>{" "}
                            
                            <Row className="Link mt-3">
                                {" "}
                                <Image className="LinkImage" /><Button type="link" block>
                                    Activity Report
                                </Button>
                            </Row>
                            <Row className="Link mt-4">
                                {" "}
                                <Image className="LinkImage" /><Button type="link" block>
                                    Applicant List
                                </Button>
                            </Row>
                        </Container>{" "}
                    </Col>{" "}
                    <Col xs md={9} className="dashboard">
                        {" "}
                        <Container className="container-2 ">
                            {" "}
                            <Row className="mt-5 ms-2 ">
                                {" "}
                                <Col md={3}>
                                    {" "}
                                    <div>
                                        {" "}
                                        <h4 className="ms-1 color">I-9</h4>{" "}
                                    </div>{" "}
                                </Col>{" "}
                                <Col md={3}>

                                </Col>{" "}

                            </Row>{" "}
                            <Row>
                                {/* <DeadLine />             DATE PICKER? */}
                            </Row>
                        </Container>{" "}
                        <Container className="ms-5 mt-6"></Container>{" "}
                    </Col>{" "}
                </Row>{" "}
            </Container>{" "}
            <footer id="sticky-footer" class="flex-shrink-0 py-4 text-white-50 mt-5">
                {" "}
                <div class="container text-center">
                    {" "}
                    <small>Copyright &copy; Your Website</small>{" "}
                </div>{" "}
            </footer>
        </div>
    );
}

export default EmployerForms;