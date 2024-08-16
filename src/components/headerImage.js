import React, { memo, useEffect } from "react";
import { useState } from "react";
import ImageHeader from "../assets/image/image_header.webp";

function HeaderImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-image">
      <img
        className="js-parallax"
        src={ImageHeader}
        alt="header"
        loading="lazy"  // Lazy load özelliğini ekledik
        style={{
          transform: `translateY(${scrollY * 0.3}px)`, // Efekti ayarlayın
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </div>
  );
}

export default memo(HeaderImage);
