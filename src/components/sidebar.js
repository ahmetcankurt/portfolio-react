import React, { useState, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faBook, faFileText } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { id: 'about-tab-id', icon: faUser, text: 'HAKKIMDA' },
  { id: 'ozgecmis-tab-id', icon: faBookOpen, text: 'ÖZGECMİŞ' },
  { id: 'yetenekler-tab-id', icon: faBook, text: 'YETENEKLER' },
  { id: 'projects-tab-id', icon: faFileText, text: 'PROJELER' }
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about-tab-id');

  const handleNavClick = (e, id) => {
    e.preventDefault(); // Sayfa yenilemesini engelle
    setActiveSection(id);
    scrollToSection(id); // İlgili bölüme kaydır
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="col-12 col-md-12 col-lg-2 sticky-sidebar">
      <div className="sidebar box">
        <ul className="nav js-tabs">
          {navItems.map((item) => (
            <li className="nav__item" key={item.id}>
              <a
                href={`#${item.id}`} // href yine burada kalabilir ama kullanılmayacak
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.id)} // e'yi geçir
                style={{ cursor: 'pointer' }} // İşaretleyici olarak göster
              >
                <FontAwesomeIcon icon={item.icon} size="2x" className="my-1" /> {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
