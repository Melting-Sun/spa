import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import coursesData from "./CoursesData";

function MainCourse() {
  let params = useParams();
  console.log(params);

  let mainCourseData = coursesData.find((course) => course.id == params.id);

  console.log(mainCourseData);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src={mainCourseData.img}
            style={{ width: "80%", height: "300px" }}
          />
        </Col>
        <Col>
            <h2>{mainCourseData.title}</h2>
            <p>{mainCourseData.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainCourse;
