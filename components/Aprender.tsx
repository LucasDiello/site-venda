import React from 'react'
import freeEbook from '@/public/ebook-free.png'
import arrow from '@/public/arrow.png'

function Aprender() {
  
  return (
    <section>
      <div className='flex'>
<div className='container mx-auto flex justify-center items-center flex-col'>
      <div className='img-arrow hidden lg:flex' />
    <h1 className='text-5xl  font-paytone  text-[#1C1C1C] tracking-wider'>DOMINE SUA MENTE!</h1>
    <div className='text-center text-lg'>
        <p>Descubra os segredos para alcançar o equilíbrio financeiro e pessoal em nosso eBook <span className='font-bold'>exclusivo.</span></p>
        <p> Antes de dominar suas finanças. Como presente especial, oferecemos <br /><span className='font-bold tracking-wider'>gratuitamente</span> um guia para cultivar seu equilíbrio pessoal.</p>
      <div className='w-full text-end mt-10'>
       <label className=''>
          Receber
         <input className='w-60 h-7 ml-5' placeholder='exemplo@gmail.com' type="email" name="" id="" />
        </label>
        <button className='h-8 border-none bg-green-400 relative right-[62px]'>ENVIAR</button>
      </div>
      </div>
    </div>
</div>
    <div className='mt-28 linear-bg'>
    <div className=' container mx-auto flex-wrap flex justify-around'>
      <div className=' flex flex-col justify-start'>
          <h1 className='text-end text-2xl'>ENCONTRE O EQUILÍBRIO</h1>
        <img className='h-80 object-cover' src={freeEbook.src} alt="" />
        <p className='mt-0 text-end'>de 99,00 R$ por <span className='font-bold'>00 R$</span></p>
      </div>
      <div className='h-80 bg-[#D9D9D9] w-[250px] p-4'>
      <h3>Dominando a Arte da Autoconsciência</h3>
      <p className='text-lg  text-start leading-7' >
      Dominar a arte da autoconsciência não só melhora sua relação consigo mesmo, mas também melhora suas interações sociais, sua carreira...
      </p>
      </div>
      <div className='h-[350px] bg-[#D9D9D9] w-[250px] p-4'>
      <h3>
        Gestão de Tempo e Produtividade
      </h3>
      <p className='text-lg  text-start leading-7'>
A gestão de tempo e a produtividade são habilidades essenciais tanto no ambiente de trabalho quanto na vida pessoal. Elas ajudam a maximizar o uso do nosso tempo.</p>
      </div>
      <div className='flex flex-col items-end'>     
       <div className='h-96 bg-[#D9D9D9] w-[250px] p-4'>
      <h3>
        Equilibrando seus hobbies
      </h3>
      <p className='tracking-wide text-lg text-start leading-7'>
Equilibrar hobbies com outras responsabilidades, como trabalho, estudos e vida familiar, pode ser um desafio, mas é essencial para manter uma vida saudável e satisfatória. </p>
      </div>
      <button className='mt-4 h-10 w-32 border-none rounded-sm bg-green-400'>ADQUIRE JÁ</button>
      </div>

    </div>
    </div>
    </section>
  )
}

export default Aprender