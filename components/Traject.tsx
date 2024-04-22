import React from 'react'
import arrowRigth from '@/public/arrowRigth.png'
import arrowLeft2 from '@/public/arrowLeft2.png'
import world from '@/public/world.png'

function Traject() {
  return (
    <section className='linear-bg2 lg:pb-48'>
        <div className='mt-28 text-center'>
            <h1 className='text-5xl font-paytone text-[#1C1C1C] tracking-wider m-0'>O que você irá aprender?</h1>
            <p className='text-xs m-4'>
                Seguindo esse passo a passo, você irá aprender a escolher o melhor caminho para alcançar o que você tanto deseja!
            </p>
        </div>
        <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-28'>
            <div className='order-1'>
                <h1 className='flex'>
                    Passo 1 <img className='w-72 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur distinctio consequuntur eaque voluptatem ea omnis culpa!
                </p>
            </div>
            <div className='order-2'>
                <h1 className='flex'>
                    Passo 2 <img className='w-72 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur distinctio consequuntur eaque voluptatem ea omnis culpa!
                </p>
            </div>
            <div className='order-3'>
                <h1 className='flex'>
                    Passo 3 <img className='w-72 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />  
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur distinctio consequuntur eaque voluptatem ea omnis culpa!
                </p>
            </div>
            <div className='lg:order-5 order-4'>
                <h1 className='flex'>
                    Passo 4 <img className='w-72 hidden lg:flex ml-10 text-end' src={arrowLeft2.src} alt="Arrow Left 2" />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur distinctio consequuntur eaque voluptatem ea omnis culpa!
                </p>
            </div>
            <div className='lg:order-4 order-5 lg:col-start-2'>
                <h1 className='flex'>
                    Passo 5 <img className='w-72 hidden lg:flex ml-10 text-end' src={arrowLeft2.src} alt="Arrow Left 2" />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur distinctio consequuntur eaque voluptatem ea omnis culpa!
                </p>
            </div>
        </div>
    </section>
  )
}

export default Traject
