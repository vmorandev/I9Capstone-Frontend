import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Container, Row, Col,  } from "react-bootstrap";
import "./auditorEmployee.css";
import { ReactComponent as Avatar } from "../Assets/AccountCircle.svg";
import { ReactComponent as Image } from "../Assets/forms.svg";

function AuditorEmployeeView() {
  return (
    <div>
      <NavigationBar />
      <PageBanner />
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
                  <Avatar /> <h5 className="employee">James O'Neal</h5>{" "}
                  <p>Applicant</p>{" "}
                </Col>{" "}
              </Row>{" "}
              <Row className="text-center mt-2">
                {" "}
                <Col>
                  {" "}
                  <p>
                    {" "}
                    Employee ID
                    <br /> Form ID
                  </p>{" "}
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
                    <Image /> <h3 className="ms-1 color">I-9 Form</h3>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <Image /> <h3 className="ms-1 color">Documents</h3>{" "}
                  </div>{" "}
                </Col>{" "}
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

export default AuditorEmployeeView;
