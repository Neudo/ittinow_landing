import React from 'react';
import Container from "./Container";
import Cta from "./Cta";

function Events() {
    return (
        <Container>
            <div className="flex items-center flex-col justify-between">
                <h1 className="text-5xl font-bold mb-4">Accédez aux évènements du moment.</h1>
                <p>Vous êtes restaurateur ? Boostez votre visibilité en publiant vos événements sur notre plateforme ! Qu'il s'agisse de soirées à thème, de dégustations exclusives ou de promotions spéciales, notre application vous permet de toucher une audience large et diversifiée, passionnée par la découverte de nouveaux établissements. Rejoignez-nous et faites connaître vos événements en quelques clics !</p>
                <Cta text={"Connexion"}/>
            </div>
        </Container>
    );
}

export default Events;
