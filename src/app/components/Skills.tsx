// components/Skills.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaAngular, FaPython, FaBeer, FaGit, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiPostgresql, SiGraphql, SiTypescript, SiApachecordova } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="my-5">
      <Container>
        <h1 className="text-center mb-4 mt-5">Skills</h1>
        <Row className="g-4">
        <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaJs size={50} className="text-warning mb-3" />
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>Experience: 3 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaReact size={50} className="text-primary mb-3" />
                <Card.Title>React</Card.Title>
                <Card.Text>Experience: 3 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <SiNextdotjs size={50} className="text-dark mb-3" />
                <Card.Title>Next.js</Card.Title>
                <Card.Text>Experience: 1 Year</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaAngular size={50} className="text-danger mb-3" />
                <Card.Title>Angular</Card.Title>
                <Card.Text>Experience: 3 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaHtml5 size={50} className="text-danger mb-3" />
                <Card.Title>HTML5</Card.Title>
                <Card.Text>Experience: 3 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaNodeJs size={50} className="text-success mb-3" />
                <Card.Title>Node.js</Card.Title>
                <Card.Text>Experience: 1 Year</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaPython size={50} className="text-primary mb-3" />
                <Card.Title>Python</Card.Title>
                <Card.Text>Experience: 1 Year</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaGitAlt size={50} className="text-dark mb-3" />
                <Card.Title>Git</Card.Title>
                <Card.Text>Experience: 2 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <SiApachecordova size={50} className="text-dark mb-3" />
                <Card.Title>Cordova</Card.Title>
                <Card.Text>Experience: 2 Years</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          
          {/* Add more cards for other skills */}
        </Row>
        
      </Container>
    </section>
  );
};

export default Skills;
