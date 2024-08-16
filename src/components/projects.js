import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import YapayZeka from "./artificialIntelligence/index";

import TrawelinImage from "../assets/image/Trawelin.jpeg"
import RotaImage from "../assets/image/rotaImage.jpeg"
import ScreenshotImage from "../assets/image/screenshot.png"
import MNISTImage from "../assets/image/MNIST.png"

const projects = [
  {
    date: "01 Jan",
    image: TrawelinImage,
    alt: "PiSoft Project",
    title: "PiSoft",
    description: "React js ile düzenlenebilir değiştirilebilir web tabanlı program yazılımı, Antalya Beyaz Dünya'da gerçekleştirildi.",
    aos: "fade-up-right",
    hasComponent: false,
  },
  {
    date: "09 Sep",
    image:  RotaImage,
    alt: "Softalya Internship",
    title: "Softalya",
    description: "Uçuş ve operasyon görevlileri için havayolu personeli ve turistlerin kara taşımacılığına yönelik web tabanlı program yazılımı, Antalya Teknokent'te gerçekleştirildi.",
    aos: "fade-up-left",
    hasComponent: false,
  },
  {
    date: "Demo",
    image:  ScreenshotImage,
    alt: "Softalya Internship",
    title: "React JS ile Web Sitesi Tasarımı",
    description: "React JS ile kolayca web sitenizi oluşturun! Yakında sizlerle...",
    aos: "fade-up-right",
    hasComponent: false,
  },
  {
    date: "Hobi & Yapay Zeka",
    image:  MNISTImage,
    alt: "Softalya Stajı",
    title: "React JS ile El Yazısı Tanıma",
    description: "React JS kullanarak el yazısını tanıyan bir uygulama. Bir sayı (0-9) çizin ve modelin tahminini görün!",
    aos: "fade-up-left",
    hasComponent: true,
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    if (project.hasComponent) {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div
      id="projects-tab-id"
      className="box box-content mb-5"
      data-aos="fade-up-right"
      data-aos-duration="2500"
    >
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">
          Projeler
        </h1>
      </div>

      <div className="news-grid">
        {projects.map((project, index) => (
          <article
            key={index}
            className="news-item box"
            data-aos={project.aos}
            data-aos-duration="1500"
            onClick={() => openModal(project)}
          >
            <div className="news-item__image-wrap overlay overlay--45">
              <img
                className="cover lazyload"
                src={project.image}
                alt={project.alt}
              />
            </div>
            <div className="news-item__caption">
              <h2 className="title title--h4">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal} centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedProject.description}</p>
              {selectedProject.hasComponent && <YapayZeka />}
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Projects;
