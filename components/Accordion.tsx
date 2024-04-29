"use client"

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import wpp from "@/public/wpp.png";
import arrowWpp from "@/public/arrowWpp.png";

export default function SimpleAccordion() {
  return (
    <section className="linear-bg3 text-[#FFF] lg:p-10 flex " id="contato">
      <div className=" flex container mx-auto lg:justify-between justify-center items-center lg:space-x-10  flex-wrap">
        <div className="space-y-5 lg:w-2/5 w-full p-4 lg:p-0">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-paytone  text-[#FFF] tracking-wider">
          Perguntas Frequentes:
        </h1>
          <Accordion className="border-accordion   ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-[#FFF]"
            >
              <Typography className="text-paytone font-bold text-xs">
                POSSO ENTRAR COMO AFILIADO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Sim, você pode se tornar um afiliado. Entre em algum desses nossos links e saiba mais.

              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-accordion  bg-inherit">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              className="bg-[#FFF]"
            >
              <Typography className="text-paytone font-bold text-xs">
                EM QUANTO TEMPO TEREI RESULTADO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Isso acaba sendo relativo de acordo com o seu esforço e dedicação.
                Algumas pessoas conseguem resultados em poucos dias, outras em
                poucos meses, mas o que torna você diferente é a sua dedicação e como você
                irá aplicar o que foi ensinado.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-accordion  bg-inherit">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
              className="bg-[#FFF]"
            >
              <Typography className="text-paytone font-bold text-xs">
                A COMPRA É 100% CONFIÁVEL?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Sim, a compra é 100% segura. Utilizamos a plataforma de pagamento
                Hotmart, que é uma das maiores plataformas de pagamento do Brasil.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-accordion  bg-inherit">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
              className="bg-[#FFF]"
            >
              <Typography className="text-paytone font-bold text-xs">
                PRECISO TER 1 COMPUTADOR PARA COMEÇAR?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Não necessariamente, você pode começar com um celular e uma
                conexão com a internet, mas caso você tenha um computador, é
                melhor ainda, pois você terá mais recursos para trabalhar.
                
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      <div className=" flex flex-col">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-paytone mt-[39.84px] text-[#FFF] tracking-wider m-0">
          Ficou com alguma dúvida? 
        </h1>
        <p className=" text-xs lg:mb-16 m-0 tracking-widest font-bold font-paytone">Entre em contato!</p>
        <div className="flex ">
          <div className=" w-full hidden md:flex">
            <img className="w-52" src={arrowWpp.src} alt="" />
          </div>
          <div className="flex flex-col w-full">
        <img className="w-80 object-cover" src={wpp.src} alt="" />
        <button className="border-none w-80  bg-green-400 h-10 ">
          Contato
        </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
