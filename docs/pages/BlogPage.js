import React from 'react';
import {Container, Row, Col, Jumbotron, Fa, Badge} from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class BlogPage extends React.Component {
  render(){
    return(
      <Container>
        <Row>
          <Col md="8" className="mx-auto">
            <Jumbotron className="mt-3">
              <h1><Fa icon="css3" className="grey-text" /> BLOG</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogPage;