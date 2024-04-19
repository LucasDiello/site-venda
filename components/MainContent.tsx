import React from 'react'

function MainContent() {
  return (
    <main >
        <div className='img-main'/>
        <section className='container mx-auto flex relative lg:p-20'>
            <div className='flex flex-col'>
                <h1 className='font-paytone tracking-wide text-5xl m-0 mb-5'>OBTENHA <br /> EQUILÍBRIO FINANCEIRO,<br />
AMADURECIMENTO PESSOAL <br />E 
FORTALEÇA SUAS VIRTUDES</h1>
                <p>A correria diária rouba seu tempo e paz, aumentando uma culpa silenciosa. <br /> Pare e pergunte: o que perco ao estar sempre ocupado? <br /> Reconheça o peso, sinta a falta e saiba que é possível resgatar seu equilíbrio.</p>
                <button className='w-56 h-10 mt-10 bg-green-400 border-none shadow-2xl font-medium'>Saiba mais</button>
                <p className='tracking-widest text-xs'>de<span className='text-red-950'> 99,90 R$ </span>por 00,00 R$ </p>
            </div>
            <div></div>
        </section>
    </main>
  )
}

export default MainContent