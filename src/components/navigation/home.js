import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  Button,
  Progress,
  Jumbotron,
} from 'reactstrap';
import Contact from './contact';
import About from './about';
import Projects from './projects';

function Home() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Randy Wilson</h1>
        <p className="lead">Full Stack Web Developer</p>
        <p className="lead" />
      </Jumbotron>

      <div>Skills</div>
      <CardColumns>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/HTML5.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Html</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress animated color="info" value={85} />
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/css.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Bootstrap</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress multi>
              <Progress animated bar value="25" />
              <Progress animated bar color="success" value="25" />
              <Progress animated bar color="warning" value="25" />
              <Progress animated bar color="danger" value="25" />
            </Progress>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/mongodb.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>MongoDB</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress animated color="warning" value={70} />
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/node.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Node</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress animated color="info" value={70} />
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/react.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>React</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress animated color="info" value={75} />
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/Users/MyMacBook/Desktop/portfolio/portfolio-page/src/images/Redux.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Redux</CardTitle>
            <CardSubtitle>Proficiency</CardSubtitle>
            <Progress animated color="info" value={75} />
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </CardColumns>
      <About />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default Home;
