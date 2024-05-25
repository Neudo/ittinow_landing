import React from 'react';
import Container from "./Container";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


function Faq() {
    return (
        <Container id={'faq'}>
            <div className="flex items-center flex-col justify-center">
                <div className="flex flex-col justify-center pb-5">
                    <h1 className="text-6xl font-bold mb-4">FAQ</h1>
                    <p>Des questions ?</p>
                </div>
                <div className="flex flex-col">
               <Accordion>
                   <AccordionSummary id="panel-header" aria-controls="panel-content">
                       Lorem ipsum dolor sit amet, consectetur.
                   </AccordionSummary>
                   <AccordionDetails>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores, autem deserunt dolorum eveniet excepturi fuga in labore quam qui.
                     </AccordionDetails>
               </Accordion>
                <Accordion>
                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                        Lorem ipsum dolor sit amet, consectetur.
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae!
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                        Lorem ipsum dolor sit amet, consectetur.
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae!
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary id="panel-header" aria-controls="panel-content">
                        Lorem ipsum dolor sit amet, consectetur.
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae! Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae!
                        Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae!
                        Aspernatur, autem corporis est facere iste maxime quas ratione recusandae veritatis vitae!
                    </AccordionDetails>
                </Accordion>
                </div>
            </div>
        </Container>
    );
}

export default Faq;
