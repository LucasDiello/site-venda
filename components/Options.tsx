import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaCheck, FaGhost, FaLaptopHouse } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";
import price from "@/public/price.png";

function Options() {
  return (
    <section className="linear-bg3 ">
      <div className="container mx-auto  pt-20">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-paytone text-[#FFF] tracking-wider text-center m-0">
          Veja se você se encaixa!!
        </h1>
        <p className="text-center lg:text-xs text-[10px] m-4 text-[#FFF]">
          Aqui são algumas opções que oferecemos
        </p>
      </div>
      <div>
        <div className="container mx-auto mt-28 text-[#FFF]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-28">
            <div className="bg-[#232323] flex flex-col  p-16 box-opt">
              <div className="flex justify-between items-center">
                <h1>Não sabe como começar?</h1>
                <VscDebugStart className="text-[#a8cbe4]" size={40} />
              </div>
              <p className="text-sm tracking-wider text-gray-300 ">
                Se você está se sentindo perdido no início da jornada, nossos
                especialistas estão aqui para orientá-lo passo a passo.
              </p>
            </div>
            <div className="bg-[#232323] flex-col p-16 box-opt flex ">
              <div className="flex justify-between items-center">
                <h1>
                  Quer fazer vendas <br /> sem se expor?
                </h1>
                <FaGhost className="text-[#a8cbe4]" size={40} />
              </div>
              <p className="text-sm tracking-wider text-gray-300 ">
                Se a ideia de vender sem estar no centro das atenções te atrai,
                temos estratégias inovadoras para você alcançar seus objetivos.
              </p>
            </div>
            <div className="bg-[#232323] flex-col p-16 box-opt flex ">
              <div className="flex justify-between items-center">
                <h1>Não quer sair de casa?</h1>
                <FaLaptopHouse className="text-[#a8cbe4]" size={40} />
              </div>
              <p className="text-sm tracking-wider text-gray-300 ">
                Se você prefere a comodidade do lar, nós trazemos soluções que
                se encaixam perfeitamente na sua rotina.
              </p>
            </div>
            <div className="bg-[#232323] flex-col p-16 box-opt flex ">
              <div className="flex justify-between items-center lg:items-start">
                <h1>
                  Quer aprender a investir, mas não <br /> tem dinheiro?
                </h1>
                <BsGraphUp size={40} className="lg:pt-5 text-[#a8cbe4]" />
              </div>
              <p className="text-sm tracking-wider text-gray-300 ">
                Se você deseja entrar no mundo dos investimentos, mesmo sem
                capital inicial, separamos metódos para os 2 modos de investir,
                com e sem dinheiro.
              </p>
            </div>
            <div className="hidden lg:flex lg:flex-col p-16 justify-center items-center">
              <button className="w-56 h-20 button-92">Adquira já</button>
            </div>
            <div className="bg-[#232323] flex-col p-16 box-opt flex  lg:col-start-3">
              <div className="flex justify-between items-center lg:items-start">
                <h1>
                  Aproveitar seu <br />
                  tempo livre para <br /> construir um futuro
                  <br /> melhor?
                </h1>
                <MdOutlineAccessTime
                  size={40}
                  className="lg:pt-5 text-[#a8cbe4]"
                />
              </div>
              <p className="text-sm tracking-wider text-gray-300 ">
                Se você deseja transformar seu tempo livre em oportunidades para
                construir um futuro próspero, nós fornecemos os recursos e
                suporte necessários para alcançar seus objetivos de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="flex items-center justify-center tracking-wider font-paytone bg-[#a8cbe4] lg:text-5xl md:text-3xl text-xl  text-[#FFF] mt-16 absolute lg:w-2/3 w-5/6 h-20">
          VEJA NOSSA PROMOÇÃO
        </h1>
      </div>
      <div className="mt-28  bg-[#FFF] w-full pb-20 ">
        <div className="container mx-auto flex">
          <div className="pt-24 flex justify-center items-center w-full space-x-24 flex-wrap">
            <div className="mb-10 lg:mb-0">
                <h1 className="text-5xl  font-paytone  text-[#1C1C1C] tracking-wider text-center m-0">BENEFÍCIOS</h1>
                <ul className="list-none p-0 space-y-6 mt-10 text-gray-500">
                    <li>Conteúdo exclusivo <FaCheck color="#1C1C1C" className="ml-10" /></li>
                    <li>Atendimento personalizado <FaCheck color="#1C1C1C" className="ml-10"/></li>
                    <li>Descontos exclusivos <FaCheck color="#1C1C1C" className="ml-10"/></li>
                    <li>Recursos de marketing <FaCheck color="#1C1C1C" className="ml-10"/></li>
                    </ul> 
            </div>
            <div className="flex flex-col lg:!ml-20 !m-0 p-4 lg:p-0 ">
              <p className="text-xl line-through text-gray-500 tracking-wider font-semibold">
                De 49,90 por
              </p>
              {/* <span className="md:hidden ">
                <h1 className="text-5xl font-paytone text-[#1C1C1C] tracking-wider ">
                  R$ 29,90
                </h1>
              </span> */}
            <div className="flex flex-col">
              <img className="flex w-full" src={price.src} alt="" />
              <button className="border-none h-16 w-full mt-10 bg-blue-600">
                ADQUIRA JÁ
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options;
