import React from 'react';
import CtaHeader from "./CtaHeader";
import logo from '../assets/logo.svg'

function Header() {
    return (
        <div
            className="absolute bottom-2 left-[50%] gap-3 flex text-black translate-x-[-50%] bg-amber-50 p-4 rounded-lg">
            <img src={logo} alt="Logo"/>
            <ul className="flex gap-3 font-bold items-center">
                <li><a href="#list">Faites votre liste</a></li>
                <li><a href="#">Les évènements</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
            <div className="pl-5 flex gap-3 text-white">
                <CtaHeader text={"Espace pro"} color={"primary"} link={"#"}/>
                <CtaHeader text={"Télécharger"} color={"secondary"} link={"#"}/>
            </div>
        </div>
    );
}

export default Header;
