import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./auditorDashboard.css";
import { ReactComponent as Avatar } from "../Assets/AccountCircle.svg";
import { ReactComponent as Image } from "../Assets/forms.svg";


function AuditorDashboard() {
  return (
    <div>
      <NavigationBar />
      <PageBanner />
      <Container className="ActivityLog">
        <h2>Auditor Dashboard</h2>
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
                  <Avatar /> <h5 className="employee">Earl Garrett</h5>{" "}
                  <p>Auditor</p>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className="text-center mt-2">
                {" "}
                <Col>
                  {" "}
                  <p> Employee ID:</p>{" "}
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
                    <Image /> <h3 className="ms-1 color">Logs/Reports</h3>{" "}
                  </div>{" "}
                </Col>{" "}
                <Col md={3}></Col>{" "}
                <Col md={4}>
                  {" "}
                  <h4 className="due"> </h4>{" "}
                </Col>{" "}
                <Col md={2} className="">
                  {" "}
                  <h1 class="completed">Notice!</h1> <p>New Activities Logged</p>{" "}
                </Col>{" "}
              </Row>{" "}
            </Container>{" "}
            <Container className="ms-5 mt-5">
              <Row>
                <table class="table">
                  <thead>
                    <tr className="color">
                      <th scope="col">User</th>
                      <th scope="col">Section 1</th>
                      <th scope="col">Section 2</th>
                      <th scope="col">Form ID</th>
                      <th scope="col">Country</th>
                      <th scope="col">State</th>
                      <th scope="col">City</th>
                      <th scope="col">Reviewer</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">E Verify Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
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

export default AuditorDashboard; 
