// Première section avec le Bienvenue et le contact

import '../../style/_contact.sass'
import Button from '../button'


const Contact = () => {
return(
    <div id="accueil" className="container-contact">
        <div className="text-content">
            <h1 className="title">Bienvenue <br/>Chez Café Neko</h1>
            <h2>L'endroit où le café rencontre les ronronnements</h2>
            <p className="into-text">Bienvenue Dans notre univers où chaque tasse de café est <br/>
            accompagnée d'une dose d'amour félin.
            </p>
            <Button text="Nous contacter" />
        </div>
        
        <div>
            <img src="/images/cat-hero-section.png" alt="photo de chat" />
        </div>
    </div>
)
}

export default Contact