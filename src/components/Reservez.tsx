import { useState } from "react";
import "../style/_reservez.sass";
import Button from "./button";

const Reservez = () => {
  // Créer un état pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    user_lastname: "",
    user_firstname: "",
    user_phone: "",
    user_mail: ""
  });

  // Mettre à jour l'état lorsque l'utilisateur modifie un champ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Traiter ou envoyer les données ici
    console.log("Données soumises :", formData);
  };

  return (
    <div className="container-reservez">
      <div className="content-reservez">
        <h1>Réservez votre table !</h1>
        <p>
          Réservez dès maintenant votre table pour une expérience caféinée
          inoubliable en compagnie de nos adorables chats. Plongez dans
          l'ambiance apaisante de Café Chatouille et laissez-vous séduire par
          nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui
          et préparez-vous à vivre un moment magique de détente et de plaisir.
        </p>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <ul>
            <div className="row">
              <li>
                <label htmlFor="lastname">Nom&nbsp;:</label>
                <input
                  type="text"
                  id="lastname"
                  name="user_lastname"
                  value={formData.user_lastname}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="firstname">Prénom&nbsp;:</label>
                <input
                  type="text"
                  id="firstname"
                  name="user_firstname"
                  value={formData.user_firstname}
                  onChange={handleChange}
                />
              </li>
            </div>

            <div className="row">
              <li>
                <label htmlFor="phone">Téléphone&nbsp;:</label>
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="mail">E-mail&nbsp;:</label>
                <input
                  type="email"
                  id="mail"
                  name="user_mail"
                  value={formData.user_mail}
                  onChange={handleChange}
                />
              </li>
            </div>

            <div className="button-form">
              <Button text="Réserver" />
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Reservez;
