import React from 'react';
import Container from "./Container";
import hero from '../assets/images/hero.jpg';
import iphone from '../assets/images/iphone-12-home.png';


function Hero() {
    return (
        <Container id={'list'} >
               <div className="left w-[30%] mr-[5%]">
                   <div className="relative">
                   <img src={hero} alt="Hero" className="rounded-lg w-full"/>
                   <img src={iphone} alt="Iphone mokup" className="rounded-lg absolute right-[-35px] bottom-2 scale-75" />
                   </div>
               </div>
            <div className="right w-[65%] ">
                <h1 className="text-6xl font-bold mb-4 text-balance">Découvrez <br/> de nouveaux restaurants</h1>
                <p className="text-balance w-[85%]">Vous indiquez vos préférences, on vous propose des restaux en fonction de vos goûts. <br/>
                    Explorez des établissements uniques près de chez vous que vous n'auriez peut-être jamais trouvés autrement. <br/>
                    Soyez informé en avant-première des événements spéciaux et des promotions des restaurateurs.</p>
            </div>
        </Container>
    );
}

export default Hero;
