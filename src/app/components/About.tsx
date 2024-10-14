// components/About.tsx
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="my-5 mt-5">
      <Container >
        <h1 className="text-center mb-4">About Me</h1>
        <Row className="align-items-center ">
          <Col md={6}>
            <Image
              src="/Portfolio/sunil.JPEG" // Your image path here
              alt="Profile Picture"
              width={300}
              height={300}
              className="img-fluid rounded-pill mx-auto d-block w-50 h-50 my-5"
            />
          </Col>
          <Col md={6}>
            <p>
              Hi, I’m sunil kumar pandit, a passionate software developer with experience in building
              modern web applications. I specialize in technologies like React, Next.js, and
              Node.js, and I enjoy creating seamless user experiences. In addition to my technical
              skills, I’m also a continuous learner who loves solving complex problems and exploring
              new technologies.
            </p>
            <p>
              In my spare time, I enjoy contributing to open-source projects, writing tech blogs,
              and staying updated on the latest industry trends. Let’s build something amazing
              together!
            </p>
           
          </Col>
          <Col md={6} className="align-items-center mt-5 ms-auto">
          <a href="/cv.pdf" download className="btn btn-success btn-lg">
              <FaDownload className="me-2" /> Download CV
            </a>
          </Col>
        </Row>
       
      </Container>
    </section>
  );
};

export default About;
