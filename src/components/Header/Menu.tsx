import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/_menu.sass';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour gérer l'ouverture/fermeture du menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          {/* Bouton burger */}
          <div className="menu-burger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Liste des éléments du menu */}
          <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="#presentation" onClick={() => setIsMenuOpen(false)}>Qui sommes-nous ?</Link></li>
            <li><Link to="#valeurs" onClick={() => setIsMenuOpen(false)}>Nos Valeurs</Link></li>
            <li><Link to="/reservation" onClick={() => setIsMenuOpen(false)}>Réservez !</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
