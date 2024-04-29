"use client";

import React, { useEffect, useState } from "react";

function MainContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(true );
    });
    observer.observe(document.querySelector(".img-main") as Element);
  }, []);

  return (
    <main className="flex p-2">
      <section
        className={`container p-2 mx-auto flex relative lg:p-10 ${
          isVisible ? "show" : "hidd"
        }`}
      >
        <div className="flex flex-col">
          <h1 className="font-paytone tracking-wide text-[1.4rem] leading-[2rem] md:text-3xl lg:text-5xl m-0 mb-5 text-[#1C1C1C] ">
            OBTENHA <br /> EVOLUÇÃO FINANCEIRA,
            <br />
            SEM O CLICHÊ DE "GURUS"<br />NO MERCADO DE AFILIADOS
          </h1>
          <p className="lg:text-base  text-sm ">
            A correria diária rouba seu tempo e paz, aumentando uma culpa
            silenciosa. <br /> Pare e pergunte: o que perco ao estar sempre
            ocupado? <br />Não deixe que o tempo seja apenas um ladrão de oportunidades! <br /> Nosso eBook revela estratégias eficazes para impulsionar sua renda. 
          </p>
          <button className="w-56 h-10 mt-10 bg-green-400 border-none shadow-2xl font-paytone ">
            ADQUIRA JÁ
          </button>
          <p className="tracking-widest text-xs">
            de<span className="text-red-950 line-through">49,90 R$ </span>por 29,90 R${" "}
          </p>
        </div>
        <div></div>
      </section>
      <div className={`img-main ${
          isVisible ? "show" : "hidd"
        }`}>
          
        </div>
    </main>
  );
}

export default MainContent;
