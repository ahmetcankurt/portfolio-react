import React from "react";
import TrawelinImage from "../assets/image/Trawelin.jpeg";
import RotaImage from "../assets/image/rotaImage.jpeg";
import ScreenshotImage from "../assets/image/screenshot.png";
import MNISTImage from "../assets/image/MNIST.png";
import CoinSweeperImage from "../assets/image/coin-sweper-logo.png";

const projects = [
  {
    date: "01 Jan",
    image: TrawelinImage,
    alt: "PiSoft Project",
    title: "PiSoft",
    description:
      "React js ile düzenlenebilir değiştirilebilir web tabanlı program yazılımı, Antalya Beyaz Dünya'da gerçekleştirildi.",
    path: "/", // Yönlendirme yapacak yol
  },
  {
    date: "09 Sep",
    image: RotaImage,
    alt: "Softalya Internship",
    title: "Softalya",
    description:
      "Uçuş ve operasyon görevlileri için havayolu personeli ve turistlerin kara taşımacılığına yönelik web tabanlı program yazılımı, Antalya Teknokent'te gerçekleştirildi.",
    path: "/", // Yönlendirme yapacak yol
  },
  {
    date: "Demo",
    image: ScreenshotImage,
    alt: "Softalya Internship",
    title: "React JS ile Web Sitesi Tasarımı",
    description:
      "React JS ile kolayca web sitenizi oluşturun! Yakında sizlerle...",
    path: "/", // Yönlendirme yapacak yol
  },
  {
    date: "Hobi & Yapay Zeka",
    image: MNISTImage,
    alt: "Softalya Stajı",
    title: "React JS ile El Yazısı Tanıma",
    description:
      "React JS kullanarak el yazısını tanıyan bir uygulama. Bir sayı (0-9) çizin ve modelin tahminini görün!",
    path: "/yapay-zeka", // Yönlendirme yapacak yol
  },
  {
    date: "Coin Sweeper",
    image: CoinSweeperImage,
    alt: "Coin Sweeper Logo",
    title: "Coin Sweeper",
    description:
      "Coin Sweeper, yukarıdan düşen paraları kutu ile topladığınız eğlenceli bir oyundur. Matter.js kullanılarak gerçekçi fizik hesaplamaları ile zorluk seviyeleri ayarlanmıştır. Hedefiniz, en yüksek skoru elde etmek için düşen paraları toplamak. Daha fazla bilgi ve oyuna erişmek için tıklayınız!",
    path: "https://ahmetcankurt.github.io/coin-sweeper/", // URL olarak belirtildi
  }
  
];

function Projects() {
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
          >
            <div
              onClick={() => {
                if (project.path.startsWith("http")) {
                  window.open(project.path, "_blank"); // URL'ye yeni sekmede git
                }
              }}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }} // İmleci değiştir ve varsayılan stilleri kaldır
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
