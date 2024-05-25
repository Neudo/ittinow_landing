import React from 'react';
import Container from "./Container";
import Cta from "./Cta";
import iphone from '../assets/images/iphone-12-list.png';

function List() {
    return (
        <Container id={"list"}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col w-[55%] justify-center">
                    <h1 className="text-6xl font-bold mb-4">Connectez-vous afin d’accéder à plus de fonctionnalités</h1>
                    <p>Ajouter des restaurants à vos favoris : Gardez une liste de vos endroits préférés pour les retrouver facilement plus tard.</p>
                    <Cta text={"Connexion"} />
                </div>
                <div className="w-[250px]" >
                    <img src={iphone} alt="iPhone"/>
                </div>
            </div>
        </Container>
    );
}

export default List;
