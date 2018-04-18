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
import htmlPic from '../../images/HTML5.png';
import cssPic from '../../images/css.png';
import mongoPic from '../../images/mongodb.png';
import nodePic from '../../images/node.png';
import reactPic from '../../images/react.png';
import reduxPic from '../../images/Redux.png';
// import Projects from './projects';

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
            src={htmlPic}
            className="rounded-circle"
            alt="Cinque Terre"
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
            src={cssPic}
            className="img-circle"
            alt="Cinque Terre"
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
            src={mongoPic}
            className="img-circle"
            alt="Cinque Terre"
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
            src={nodePic}
            className="img-circle"
            alt="Cinque Terre"
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
            src={reactPic}
            className="img-circle"
            alt="Cinque Terre"
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
            src={reduxPic}
            className="img-circle"
            alt="Cinque Terre"
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
