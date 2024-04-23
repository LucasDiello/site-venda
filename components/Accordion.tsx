import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import wpp from "@/public/wpp.png";
import arrowWpp from "@/public/arrowWpp.png";

export default function SimpleAccordion() {
  return (
    <section className="linear-bg3 text-[#FFF] p-10 flex">
      <div className=" flex container mx-auto justify-between items-center space-x-10  flex-wrap">
        <div className="space-y-5 lg:w-2/5 w-full">
        <h1 className="text-5xl font-paytone  text-[#FFF] tracking-wider">
          Perguntas Frequentes:
        </h1>
          <Accordion className="border-accordion   ">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-[#FFF]"
            >
              <Typography className="text-paytone font-bold text-sm">
                POSSO ENTRAR COMO AFILIADO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Você pode fazer um pedido diretamente no nosso site, escolhendo
                os produtos que deseja e seguindo para o checkout.
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
              <Typography className="text-paytone font-bold text-sm">
                EM QUANTO TEMPO TEREI RESULTADO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Você pode cancelar um pedido entrando em contato com a nossa
                equipe de suporte.
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
              <Typography className="text-paytone font-bold text-sm">
                A COMPRA É 100% CONFIÁVEL?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Sim, você pode fazer um pedido por telefone. Ligue para o nosso
                número de suporte e fale com um dos nossos representantes.
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
              <Typography className="text-paytone font-bold text-sm">
                PRECISO TER 1 COMPUTADOR PARA COMEÇAR?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-[#1a1a1a] pt-8">
              <Typography className="text-[#FFF] tracking-wider font-sans leading-10">
                Sim, você pode fazer um pedido pessoalmente. Visite a nossa loja
                e fale com um dos nossos representantes.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      <div className=" flex flex-col h-full">
        <h1 className="text-5xl font-paytone mt-[39.84px] text-[#FFF] tracking-wider m-0">
          Ficou com alguma dúvida? 
        </h1>
        <p className=" text-xs mb-16 m-0 tracking-widest font-bold font-paytone">Entre em contato!</p>
        <div className="flex ">
          <div className=" w-full">
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
