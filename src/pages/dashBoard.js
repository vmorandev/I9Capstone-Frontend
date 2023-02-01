import React from "react";
import NavigationBar from "../components/NavBar";
import PageBanner from "../components/PageBanner";
import { Container, Row, Col } from "react-bootstrap";

function DashboardTemplate() {
  return (
    <div>
      <NavigationBar />
      <PageBanner />
      <h1>Dashboard</h1>
      <Container>
        <Row>
          <Col md={12}></Col>
      </Row>
      </Container>
    </div>
  );
}

export default DashboardTemplate;
