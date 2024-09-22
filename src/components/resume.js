import { memo } from "react";
import Education from "../assets/image/icon-education.svg";
import Experience from "../assets/image/icon-experience.svg";

function Resume() {
  return (
    <div id="ozgecmis-tab-id" className="box box-content mb-4" data-aos="fade-left" data-aos-duration="2500">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">
          Özgeçmiş
        </h1>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h2 className="title title--h3">
          <img
              className="title-icon"
              src={Education}
              alt="Education"
            />
            Eğitim
          </h2>
          <div className="timeline">
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Akdeniz Üniversitesi
              </h5>
              <span className="timeline__period">2021 — 2023</span>
              <p className="timeline__description">Bilgisayar Programcılığı</p>
            </article>

            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Baraj Mesleki ve Teknik Anadolu Lisesi
              </h5>
              <span className="timeline__period">2016 - 2019</span>
              <p className="timeline__description">
                Bilişim Teknolojileri / Veritabanı
              </p>
            </article>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="title title--h3">
            <img
              className="title-icon"
              src={Experience}
              alt="Experience"
            />
            Tecrübe
          </h2>
          <div className="timeline">
            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Web Developer / PiSoft, Antalya Beyaz Dünya
              </h5>
              <span className="timeline__period">01.2023 - 10.2023</span>
              <p className="timeline__description">
                React js. İle düzenlenebilir değiştirilebilir web tabanlı
                program yazılımı
              </p>
            </article>

            <article className="timeline__item">
              <h5 className="title title--h5 timeline__title">
                Web Developer (Staj) / Softalya, Antalya Teknokent
              </h5>
              <span className="timeline__period">09.2022 - 01.2023</span>
              <p className="timeline__description">
                Uçuş ve operasyon görevlilerinden oluşan havayolu personeli ve
                turistlerin kara taşımacılığı için web tabanlı program yazılımı
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Resume);
