import React, { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import ImageAdmin from "../assets/image/imageAdmin.webp";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ahmetcankurt07", icon: faLinkedin },
  { href: "https://github.com/ahmetcankurt", icon: faGithub },
  { href: "https://www.instagram.com/ahmetcankurt07", icon: faInstagram },
  { href: "mailto:myahmetcankurt@gmail.com", icon: faGoogle }
];

const contactInfo = [
  { label: "E-mail", value: "myahmetcankurt@gmail.com", href: "mailto:myahmetcankurt@gmail.com" },
  { label: "Telefon", value: "0532 333 ** **" },
  { label: "DOĞUM TARİHİ", value: "1999" },
  { label: "Adres", value: "Antalya, TR" }
];

function Header() {
  return (
    <header className="header box" >
      <div className="header__left">
        <div className="header__photo">
          <img
            className="header__photo-img"
            src={ImageAdmin}
            alt="Ahmet Cankurt"
            loading="lazy"
          />
        </div>
        <div className="header__base-info">
          <h4 className="title titl--h4">Ahmet CANKURT</h4>
          <div className="status">Web Developer</div>
          <ul className="header__social">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="header__right">
        <ul className="header__contact">
          {contactInfo.slice(0, 2).map((info, index) => (
            <li key={index}>
              <span className="overhead">{info.label}</span>
              {info.href ? (
                <a
                  className="overhead"
                  style={{
                    textDecoration: "none",
                    color: "#5e6e80",
                    textTransform: "none",
                  }}
                  href={info.href}
                >
                  {info.value}
                </a>
              ) : (
                info.value
              )}
            </li>
          ))}
        </ul>
        <ul className="header__contact">
          {contactInfo.slice(2).map((info, index) => (
            <li key={index}>
              <span className="overhead">{info.label}</span> {info.value}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default memo(Header);
