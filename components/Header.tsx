"use client"

import React, { useEffect, useState } from 'react'

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(document.querySelector("header") as Element);
  }, []);
  return (
    <header className={`${isVisible ? "show-header" : "hidd-header"}`}>
        <div className='container mx-auto flex justify-between items-center '>
            <div><h1 className='text-4xl'>LM</h1></div>
            <ul className='flex list-none space-x-14 font-medium tracking-wide'>
                <li>Sobre</li>
                <li>Contato</li>
                <li>O que irá aprender</li>
                <li className='flex flex-col'>Para você <span className='text-[9px] text-end'>grátis</span></li>
            </ul>
        </div>
    </header>
  )
}

export default Header