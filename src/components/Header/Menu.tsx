import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/_menu.sass';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="menu">
        <div className="menu-container">
          <div className="menu-logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="menu-burger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#presentation" onClick={closeMenu}>Qui sommes-nous ?</a></li>
            <li><a href="#valeurs" onClick={closeMenu}>Nos Valeurs</a></li>
            <li><a href="#reservation" onClick={closeMenu}>Réservez !</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
