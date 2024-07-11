"use client"
import React, { useEffect, useState } from 'react';
import  { scrollToSection }  from '@/utils/smooth';
import { AiOutlineUp } from 'react-icons/ai';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(document.querySelector("header") as Element);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <>
    <header className={`${isVisible ? "show-header" : "hidd-header"} text-[#1C1C1C]`} id='top'>
      <div className='container mx-auto flex lg:justify-between items-center justify-center'>
        <h1 className='text-4xl flex flex-col leading-none tracking-widest'>LM <span className='text-[9px] ml-10 text-end lg:hidden tracking-widest'>digital</span></h1>
        <ul className='hidden lg:flex list-none space-x-14 font-medium tracking-wide text-xs lg:items-baseline items-center lg:text-base'>
          <li className='cursor-pointer' onClick={() => scrollToSection("contato")}>Contato</li>
          <li className='cursor-pointer' onClick={() => scrollToSection("aprender")}>O que irá aprender</li>
          <li className='flex flex-col cursor-pointer' onClick={() => scrollToSection("para-voce")}>
            Para você <span className='text-[9px] text-end'>grátis</span>
          </li>
        </ul>
      </div>

    </header>
    <a className="back-top-btn" aria-label="back to top" onClick={() => scrollToSection("top")}>
        <AiOutlineUp />
      </a>
      </>
  );
}

export default Header;
