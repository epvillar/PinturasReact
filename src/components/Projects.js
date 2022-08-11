import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg12 from "../assets/img/project-img12.jpg";
import projImg13 from "../assets/img/project-img13.jpg";
import projImg14 from "../assets/img/project-img14.jpg";
import projImg15 from "../assets/img/project-img15.jpg";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/project-img18.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Monet",
      description: "Impresionismo",
      imgUrl: projImg1,
    },
    {
      title: "Renoir",
      description: "Impresionismo",
      imgUrl: projImg2,
    },
    {
      title: "Manet",
      description: "Impresionismo",
      imgUrl: projImg3,
    },
    {
      title: "Degas",
      description: "Impresionismo",
      imgUrl: projImg4,
    },
    {
      title: "Pisarro",
      description: "Impresionismo",
      imgUrl: projImg5,
    },
    {
      title: "Cézanne",
      description: "Impresionismo",
      imgUrl: projImg6,
    },
  ];

  const projects2 = [
    {
      title: "Sisley",
      description: "Impresionismo",
      imgUrl: projImg7,
    },
    {
      title: "Morisot",
      description: "Impresionismo",
      imgUrl: projImg8,
    },
    {
      title: "Cassat",
      description: "Impresionismo",
      imgUrl: projImg9,
    },
    {
      title: "Caillebotte",
      description: "Impresionismo",
      imgUrl: projImg10,
    },
    {
      title: "Bazille",
      description: "Impresionismo",
      imgUrl: projImg11,
    },
    {
      title: "Matisse",
      description: "Impresionismo",
      imgUrl: projImg12,
    },
  ];

  
  const projects3 = [
    {
      title: "Monet",
      description: "Impresionismo",
      imgUrl: projImg13,
    },
    {
      title: "Renoir",
      description: "Impresionismo",
      imgUrl: projImg14,
    },
    {
      title: "Manet",
      description: "Impresionismo",
      imgUrl: projImg15,
    },
    {
      title: "Degas",
      description: "Impresionismo",
      imgUrl: projImg16,
    },
    {
      title: "Cézanne",
      description: "Impresionismo",
      imgUrl: projImg17,
    },
    {
      title: "Matisse",
      description: "Impresionismo",
      imgUrl: projImg18,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": ""}>
                <h2>El impresionismo</h2>
    
                <p>Impresionismo es un estilo que se origina en Francia, en la 
                  segunda mitad del siglo XIX. Sus seguigores rechazaban el academicismo
                  y el romanticismo de la ´poca. Proponían una nueva mirada más cercana
                  a la realidad. Se caracteriza por su experimentacón
                  con la iluminación, consideraban al manejo de la luz 
                  crucial para alcanzar belleza y balance en la pintura. Para ello 
                  abandonaron los talleres y salieron al exterior, su modelos fueron la
                  calle, el edificio, el paisaje, las personas...</p>
                <p>Sus exponentes más destacados incluyen a Monet, Renoir, Manet, Degas,
                  Pissarro, Cézanne, Sisley, Morisot,Cassat, Caillebotte, Bazille, Matisse...
                </p>
            
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
