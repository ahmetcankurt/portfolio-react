import React, { useState, memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faBook, faFileText } from '@fortawesome/free-solid-svg-icons';

// İkon ve metin verilerini içeren bir dizi
const navItems = [
  { id: 'about-tab-id', icon: faUser, text: 'HAKKIMDA' },
  { id: 'ozgecmis-tab-id', icon: faBookOpen, text: 'ÖZGECMİŞ' },
  { id: 'yetenekler-tab-id', icon: faBook, text: 'YETENEKLER' },
  { id: 'projects-tab-id', icon: faFileText, text: 'PROJELER' }
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState('about-tab-id');

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <aside className="col-12 col-md-12 col-lg-2 sticky-sidebar ">
      <div className="sidebar box">
        <ul className="nav js-tabs">
          {navItems.map((item) => (
            <li className="nav__item" key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleNavClick(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} size="2x" /> {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default memo(Sidebar);
