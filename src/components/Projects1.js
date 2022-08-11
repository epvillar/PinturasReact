import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg20 from "../assets/img/project-img20.jpg";
import projImg21 from "../assets/img/project-img21.jpg";
import projImg22 from "../assets/img/project-img22.jpg";
import projImg23 from "../assets/img/project-img23.jpg";
import projImg24 from "../assets/img/project-img24.jpg";
import projImg25 from "../assets/img/project-img25.jpg";
import projImg26 from "../assets/img/project-img26.jpg";
import projImg27 from "../assets/img/project-img27.jpg";
import projImg28 from "../assets/img/project-img28.jpg";
import projImg29 from "../assets/img/project-img29.jpg";
import projImg30 from "../assets/img/project-img30.jpg";
import projImg31 from "../assets/img/project-img31.jpg";
import projImg32 from "../assets/img/project-img32.jpg";
import projImg33 from "../assets/img/project-img33.jpg";
import projImg34 from "../assets/img/project-img34.jpg";
import projImg35 from "../assets/img/project-img35.jpg";
import projImg36 from "../assets/img/project-img36.jpg";
import projImg37 from "../assets/img/project-img37.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects1 = () => {

  const projects = [
    {
      title: "van Gogh",
      description: "Posimpresionismo",
      imgUrl: projImg20,
    },
    {
      title: "Gauguin",
      description: "Posimpresionismo",
      imgUrl: projImg21,
    },
    {
      title: "Cézanne",
      description: "Posimpresionismo",
      imgUrl: projImg22,
    },
    {
      title: "Toulouse-Lautrec",
      description: "Posimpresionismo",
      imgUrl: projImg23,
    },
    {
      title: "Monet",
      description: "Posimpresionismo",
      imgUrl: projImg24,
    },
    {
      title: "Seurat",
      description: "Posimpresionismo",
      imgUrl: projImg25,
    },
  ];

  const projects2 = [
    {
      title: "Matisse",
      description: "Posimpresionismo",
      imgUrl: projImg26,
    },
    {
      title: "Rousseau",
      description: "Posimpresionismo",
      imgUrl: projImg27,
    },
    {
      title: "de Haan",
      description: "Posimpresionismo",
      imgUrl: projImg28,
    },
    {
      title: "van Gogh",
      description: "Posimpresionismo",
      imgUrl: projImg29,
    },
    {
      title: "Gauguin",
      description: "Posimpresionismo",
      imgUrl: projImg30,
    },
    {
      title: "Cézanne",
      description: "Posimpresionismo",
      imgUrl: projImg31,
    },
  ];

  
  const projects3 = [
    {
      title: "Toulouse-Lautrec",
      description: "Poimpresionismo",
      imgUrl: projImg32,
    },
    {
      title: "Monet",
      description: "Posimpresionismo",
      imgUrl: projImg33,
    },
    {
      title: "Seurat",
      description: "Posimpresionismo",
      imgUrl: projImg34,
    },
    {
      title: "Matisse",
      description: "Posimpresionismo",
      imgUrl: projImg35,
    },
    {
      title: "Rousseau",
      description: "Posimpresionismo",
      imgUrl: projImg36,
    },
    {
      title: "de Haan",
      description: "Posimpresionismo",
      imgUrl: projImg37,
    },
  ];


  return (
    <section className="project" id="project1">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn": ""}>
                <h2>El posimpresionismo</h2>
                <p>Posimpresionismo es un estilo de finales del siglo
                XIX y principios del 20. Sus exponentes reaccionaron contra el deseo de 
                reflejar fielmente la naturaleza y presentaron una visión más subjetiva,
                más colorida del mundo. El impacto de la Revolucion Industrial fue clave
                los artistas representaban en sus obras los nuevos avances industriales,
                el ferrocarril, la electricidad... A partir de la exposición de las obras de Cézanne,
                Gaughin y van Gogh en 1910 se popularizó el término posimpresionismo.</p>
                <p>Sus exponentes incluyen a van Gogh, Gauguin, Cézanne, Touluse-Lautrec, 
                  Monet, Seurat, Matisse, Rousseau, Schutzenberger...</p>
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
                    <Tab.Pane eventKey="second">
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

                    <Tab.Pane eventKey="third">
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
