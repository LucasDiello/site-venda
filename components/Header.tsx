import React from 'react'

function Header() {
  return (
    <header className='bg-blue-400'>
        <div className='container mx-auto flex justify-between items-center '>
            <div><h1 className='text-4xl'>LM</h1></div>
            <ul className='flex list-none space-x-14 font-medium tracking-wide'>
                <li>Sobre</li>
                <li>Contato</li>
                <li>O que irá aprender</li>
            </ul>
        </div>
    </header>
  )
}

export default Header