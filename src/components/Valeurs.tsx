import './../style/_valeurs.sass'

function Valeurs(){
    return(
        <div id="valeurs"className="container-valeurs">
            <div className='title-valeurs'><h1>Nos valeurs</h1></div>
            <div className='container-cards'>
                <div className='card'>
                    <img src="/icons/coffee-icon.svg" alt="icone de cafe" />
                    <h2>Passionné de Café</h2>
                    <p>Notre équipe est passionnée par l'art de 
                        préparer le café. Chaque grain est 
                        soigneusement sélectionné pour offrir une expérience gustative 
                        exceptionnelle. Nous nous engageons à vous offrir des saveurs riches 
                        et uniques dans chaque tasse.</p>
                </div>
                <div className='card'>
                    <img src="/icons/cat-icon.svg" alt="icone de chat" />
                    <h2>Bien-être des Chats</h2>
                    <p>Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. 
                        Nous offrons un environnement sûr et confortable à nos chats résidents, où ils
                        peuvent interagir avec nos clients et recevoir toute l'attention et l'affection 
                        qu'ils méritent.</p>
                </div>
                <div className='card'>
                    <img src="/icons/plant-icon.svg" alt="icone plante" />
                    <h2>Bien-être des Chats</h2>
                    <p>Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. 
                        Nous offrons un environnement sûr et confortable à nos chats résidents, où ils
                        peuvent interagir avec nos clients et recevoir toute l'attention et l'affection 
                        qu'ils méritent.</p>
                </div>
            </div>
        </div>
    )
}

export default Valeurs