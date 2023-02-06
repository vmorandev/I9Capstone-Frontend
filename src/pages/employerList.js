import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./employerList.css";
import { ReactComponent as Avatar } from "../Assets/AccountCircle.svg";
import { ReactComponent as Image } from "../Assets/forms.svg";
import ListEmployeeComponent from "../components/ListEmployeeComponent";
import CalendarComp from "../components/calendar";


function EmployerList() {
    return (
        <div>
            <NavigationBar />
            <PageBanner />
            <Container className="ActivityLog">
                <h2>EMPLOYEE LIST</h2>
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
                                    <p> Employee ID:5551</p>{" "}
                                </Col>{" "}
                            </Row>{" "}
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
                                        <Image /> <h3 className="ms-1 color">Table View</h3>{" "}
                                    </div>{" "}
                                </Col>{" "}
                                <Col md={3}></Col>{" "}
                                <Col md={4}>
                                    {" "}
                                    <h4 className="due"> </h4>{" "}
                                </Col>{" "}
                                <Col md={2} className="">
                                    {" "}
                                    <h1 class="completed">Notice!</h1> <p>I-9 Deadline 3/6/2023 approching</p>{" "}
                                </Col>{" "}
                            </Row>{" "}
                        </Container>{" "}
                        <Container className="ms-5 mt-5">

                            {/* EMPLOYEE LIST COMPONENT!! */}

                            <Row>
                                <ListEmployeeComponent />
                            </Row>

                        </Container>{" "}
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

export default EmployerList; 