import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import '../css/HomePage.css';

import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';

class HomePage extends React.Component {
  render() {
    var blogImageDir = "docs/img/blog/post1/";
    var commonImageDir = "docs/img/common/";

    return (
      <div style={{marginTop: '6rem'}}>
        {/* <EdgeHeader color="red darken-4" /> */}
        <FreeBird className="">
          <Col md="12" className="mx-auto float-none gamecock-red z-depth-3 py-2 px-2">
            <CardBody className="text-center">
              <img src={commonImageDir + 'logo1.JPG'} width="25%" width="700rem" />
            </CardBody>
          </Col>
          {/* <Row>
            <Col md="10" className="mx-auto float-none special-color z-depth-3 py-2 px-2">
              <CardBody className="white-text">
                <h2 className="h2-responsive"><strong>Non Trad MD</strong></h2>
                <p className="pb-4">Join me on my journey in medicine!</p>
              </CardBody>
            </Col>
          </Row> */}
        </FreeBird>

        <Container>
          <Row>
            <Col md="10" className="mx-auto mt-4">
              <h4>Introduction</h4>

              <p className="">
                Hi internet!
                <br /><br />
                My name is Alyssa and I’m considered to be a nontraditional medical student.
                I’m currently living in South Carolina (USA). I’m a 26-year-old first year medical student and I want to share my
                journey through medicine with you. Insert cliche picture of me the day I got my “you got into medical school
                stethoscope”:
              </p>

              <p className="text-center">
                <img src={blogImageDir + 'me.JPG'} width="25%" class="rotate90" />
              </p>

              <h4>My Family</h4>
              <p>Meet Dobby and Smokey, my furbabies:</p>

              <p class="text-center">
                <div class="row">
                  <div class="col-lg-3 col-md-3" />
                  <img id="dobby-pic" src={blogImageDir + 'dobby.JPG'} height="200px" class="col-lg-2 col-md-2 col-sm-2" />
                  <div class="col-lg-3 col-md-3" />
                  <img id="smokey-pic" src={blogImageDir + 'smokey.JPG'} height="200px" class="col-lg-2 col-md-2 col-sm-2" />
                </div>

              </p>

              <p className="">
                That little orange thing is my 2-year-old Shiba Inu (Dobby). The Smokey looking one is
                Smokey. My puppies bring an element of love and joy to my home. I can’t imagine going through this medical
                journey without them.
              </p>

              <p className="">
                Even more so, I can’t imagine going through this journey without my husband, Robert. So,
                meet Robert (AKA the computer brains behind this blog/vlog operation):
              </p>

              <p className="text-center">
                <img src={blogImageDir + 'us.JPG'} width="25%" class="rotate90" />
              </p>

              <p className="">
                This photo is particularly special because it commemorates the day we got our marriage license!
                It was probably 65 degrees on this day and 102 degrees on the day of our wedding one month later! Robert and I
                had a small pre-med school family only wedding in May. We’re planning a much larger wedding for December 2019.
                You can expect lots of posts about why I made this decision and how I’m planning a 120 person wedding while in
                medical school in the future.
              </p>

              <p className="">
                One more word about my wonderful husband. He is by far my biggest supporter. The day I got into medical school
                he bought me my stethoscope. He even went so far as to have my initials (new last name and all) engraved. So what
                is my first piece of advice? Establish your support system now. It doesn’t matter where you are in the process.
                You will need these people!
              </p>

              <h4>My Journey</h4>

              <p className="">
                So, let’s sum up the nontrad components of my life so far:
              </p>

              <ol>
                <li>
                  I didn’t just jump straight into medicine. To be honest, I didn’t plan on going to medical school until 6 months
                  into my graduate school program. Which brings me to…
                </li>
                <li>
                  I have a Bachelor’s degree in Anthropology and a Master’s degree in Forensic Anthropology. My initial motivation 
                  for medicine involved wanting to complete pediatric cranial head trauma research. I still want to do this in my 
                  spare time &#128521;
                </li>
                <li>
                  I never finished the premedical coursework. Maybe I got lucky in that my school didn’t require the courses, but 
                  I only took a few of the traditional courses and I took most of them after finishing my Master’s degree (Organic 
                  Chemistry, Physics, Psychology, Sociology. Biology and General Chemistry were taken in undergrad). I was able to 
                  study for and take the MCAT. My score was not fantastic, but it was good enough to get in!
                </li>
                <li>
                  I spent 2 years working in medicine after finishing my master’s degree. I felt that it was crucial for me to know 
                  what I was getting myself into. I started out as an Emergency Medicine Scribe. After a year in the ER, I moved on as 
                  a patient care technician (PCT/ Nurse’s Assistant) in a Cardiovascular ICU.
                </li>
                <li>
                  I’m entering medical school as an “older” married woman. I know the average medical student is 26-years-old, so maybe 
                  I’m not that much “older,” but I certainly feel old compared to the 22 years entering fresh out of college!
                </li>
              </ol>

              <p>
                Well, that’s all she wrote for this intro post. Maybe you are curious about life in medical school. Maybe you are considering 
                a career change and want to know what that’s like. Join me on my journey through medical school.
              </p>
              
              <p>
                See you next time on my&nbsp;
                <NavLink to="/blog">
                  <span>Blog</span>
                </NavLink>!
                <br />
                -AML
              </p>

              <hr />

              <h3 className="text-center mb-3">See it in action</h3>
              <Row>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/css">
                    <Fa icon="css3" className="pink-text" />
                    <span>CSS</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/components">
                    <Fa icon="cubes" className="blue-text" />
                    <span>Components</span>
                  </NavLink>
                </Col>
                <Col md="4" className="text-center home-feature-box">
                  <NavLink to="/advanced">
                    <Fa icon="code" className="green-text" />
                    <span>Advanced</span>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
