import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Row, Col } from "react-bootstrap";
import "./reviewerDashboard.css";
import Container from "react-bootstrap/esm/Container";
import { ReactComponent as Reviewer } from "../assets/reviewer.svg";

function ReviewerDashboard() {
  return (
    <div>
      <NavigationBar />
      <PageBanner />
      <Container>
        <Row className="ms-4 mb-5">
          <Col>
            <Reviewer />
            <h3>Reviewer Dashboard</h3>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className="progress-1 ms-5">
            <Row className="ms-1 mt-5" id="progress-2">
              <Col lg={10}>
                <h4>Forms In Progress</h4>
              </Col>
              <Col lg={2}>
                <h4>#</h4>
              </Col>
            </Row>
          </Col>
          <Col lg={5} className="review ms-5"></Col>
        </Row>
      </Container>
      <Container></Container>
      <footer id="sticky-footer" class="flex-shrink-0 py-4 text-white-50 mt-5">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  );
}

export default ReviewerDashboard;
