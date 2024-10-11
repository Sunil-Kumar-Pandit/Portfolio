// components/Experience.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="my-5">
      <Container>
        <h1 className="text-center mb-4">Experience</h1>
        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Associate Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Logic Simplified | Aug 2023 - Present</Card.Subtitle>
                <Card.Text>
                  - Developed scalable web applications using React, Next.js, and Node.js.<br />
                  - Collaborated with cross-functional teams to design and implement new features.<br />
                  - Optimized application performance, reducing load times by 30%.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Associate Developer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Evon Technologies | Apr 2022 - Aug 2023</Card.Subtitle>
                <Card.Text>
                  - Created responsive websites and landing pages using HTML, CSS, and JavaScript.<br />
                  - Integrated modern frontend libraries such as React to enhance UX.<br />
                  - Worked closely with clients to understand their needs and deliver projects on time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Trainee Programmer</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Evon Technologies | Jan 2022 - Apr 2022</Card.Subtitle>
                <Card.Text>
                  - Assisted in the development of web applications using Angular and Node.js.<br />
                  - Performed testing and debugging to ensure software quality.<br />
                  - Contributed to API development and integration with backend services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
