import React, { memo } from "react";

function About() {
  return (
    <div id="about-tab-id" className="box box-content active mb-4" data-aos="fade-left" data-aos-duration="2500">
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          Hakkımda
        </h1>
        <p>
          Merhaba, ben Ahmet. 2 yıldır freelance React JS geliştiricisiyim.
          HTML, CSS ve JavaScript ile arayüzler oluşturuyorum. Teknolojiye
          meraklıyım ve sürekli öğrenmeye açığım. Temiz kod yazmayı prensip
          ediniyorum. Amacım, projelerde etkileyici çözümler sunarak kendimi
          geliştirmek.
        </p>
      </div>
    </div>
  );
}

export default memo(About);
