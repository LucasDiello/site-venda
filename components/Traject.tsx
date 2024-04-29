import React from 'react'
import arrowRigth from '@/public/arrowRigth.png'
import arrowLeft2 from '@/public/arrowLeft2.png'

function Traject() {
  return (
    <section className='linear-bg2 lg:pb-48' id='aprender'>
        <div className='mt-28 text-center'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-paytone text-[#1C1C1C] lg:tracking-wider m-0'>O QUE VOCÊ IRÁ APRENDER?</h1>
            <p className='lg:text-xs text-[10px] m-4'>
                Seguindo esse passo a passo, você irá aprender a escolher o melhor caminho para alcançar o que você tanto deseja!
            </p>
        </div>
        <div className='container  lg:p-0 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-28'>
            <div className='order-1 p-4'>
                <h1 className='flex'>
                    Passo 1 <img className='w-60 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />
                </h1>
                <p className='text-sm lg:text-base'>
                Entendendendo sobre o mercado de afiliados <br /> desde a história até seus impactos na <br /> economia mundial, Pois é necessário <br /> entender o mercado para poder <br /> atuar nele. 
                </p>
            </div>
            <div className='order-2 p-4'>
                <h1 className='flex'>
                    Passo 2 <img className='w-60 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />
                </h1>
                <p className='text-sm lg:text-base'>
                Após entender o mercado, você irá <br/> aprender sobre programa de afiliados <br /> e como eles funcionam, para que você <br /> possa escolher o melhor para você. <br className='lg:hidden' /> E não ser <br className='hidden lg:flex' /> enganado por falsas promessas.
                </p>
            </div>
            <div className='order-3 p-4'>
                <h1 className='flex'>
                    Passo 3 <img className='w-60 hidden lg:flex ml-10 text-end' src={arrowRigth.src} alt="Arrow Right" />  
                </h1>
                <p className='text-sm lg:text-base'>
                Aprenda a criar um plano de ação, <br /> para que você possa alcançar seus <br /> objetivos de forma mais rápida e <br /> eficiente, pois sem um plano, você <br /> pode se perder no caminho.
                
                </p>
            </div>
            <div className='lg:order-5 order-4 p-4'>
                <h1 className='flex'>
                    Passo 4 <img className='w-60 hidden lg:flex ml-10 text-end' src={arrowLeft2.src} alt="Arrow Left 2" />
                </h1>
                <p className='text-sm lg:text-base'>
                Depois de criar o seu plano de ação, <br /> você irá aprender a escolher os <br /> melhores produtos para promover, por que <br /> escolher o produto certo é essencial <br /> para o sucesso.
                </p>
            </div>
            <div className='lg:order-4 order-5 lg:col-start-2 p-4 mb-28 lg:mb-0'>
                <h1 className='flex'>
                    Passo 5 <img className='w-60 hidden lg:flex ml-10 text-end' src={arrowLeft2.src} alt="Arrow Left 2" />
                </h1>
                <p className='text-sm lg:text-base'>
                Você irá aprender a criar uma estratégia de <br /> marketing promover os produtos escolhidos. <br /> Utilizando as melhores técnicas para alcançar <br className='hidden lg:block' /> o seu público alvo.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Traject
