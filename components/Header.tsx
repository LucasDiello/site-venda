import React from 'react'

function Header() {
  return (
    <header className=''>
        <div className='container mx-auto flex justify-between items-center '>
            <div><h1 className='text-4xl'>LM</h1></div>
            <ul className='flex list-none space-x-14 font-medium tracking-wide'>
                <li>Sobre</li>
                <li>Contato</li>
                <li className='flex flex-col'>Para você <span className='text-[9px] text-end'>grátis</span></li>
            </ul>
        </div>
    </header>
  )
}

export default Header