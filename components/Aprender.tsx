"use client"

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ImHappy2 } from 'react-icons/im';

import freeEbook from '@/public/ebook-free.png'; 

function Aprender() {
    const [email, setEmail] = useState('');
    const [received, setReceived] = useState(false);
    const [subscribeToNews, setSubscribeToNews] = useState(false);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email) {
            alert('Digite um email válido');
            return;
        }

        const templateParams = {
            from_name: email,
            to_name: 'LM TECH',
            message: 'Quero receber o EBOOK FREE!!!!!',
            email: email,
            receive: subscribeToNews
        };

        emailjs.send("service_ggwyit9", "template_2zkw1ko", templateParams, "gj7jBwSbrvWom1JL7")
            .then(function(response) {
                setReceived(true);
            });
    };

    return (
        <section id='para-voce' className='mt-28 lg:mt-0 relative z-50 lg:static'>
            <div className='flex'>
                <div className='container mx-auto flex justify-center items-center flex-col'>
                    <div className='img-arrow hidden lg:flex' />
                    <h1 className='text-2xl md:text-3xl lg:text-5xl font-paytone text-[#1C1C1C] tracking-wider'>DOMINE SUA MENTE!</h1>
                    <div className='text-center lg:text-lg text-sm p-4 lg:p-0 '>
                        <p>Descubra os segredos para alcançar o equilíbrio financeiro e pessoal em nosso eBook <span className='font-bold'>exclusivo.</span></p>
                        <p>Antes de dominar suas finanças. Como presente especial, oferecemos <br className='hidden lg:block' /><span className='font-bold tracking-wider'>gratuitamente</span> um guia para cultivar seu equilíbrio pessoal.</p>
                        <div className='w-full text-start flex flex-col justify-end items-end
                          mt-10'>
                            {!received ? (
                                <>
                                <div>

                                    <label>Receber</label>
                                    <input
                                        autoComplete="on"
                                        className=' lg:w-60 h-7 ml-5'
                                        placeholder='exemplo@gmail.com'
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className='mb-5 lg:mb-0 h-8 border-none bg-green-400 relative z-50 right-[62px]' onClick={sendEmail}>
                                        ENVIAR
                                    </button>
                                </div>
                                <div className='mt-5'>

                                    <input
                                        type="checkbox"
                                        checked={subscribeToNews}
                                        onChange={() => setSubscribeToNews(!subscribeToNews)}
                                        />
                                    <label htmlFor="subscribeToNews" className="ml-2 text-xs">
                                        Desejo receber novidades por e-mail <br /> para continuar recebendo conteúdos exclusivos.
                                    </label>
                                        </div>
                                </>
                            ) : (
                                <p className='text-xs text-[#346cee] font-bold'>
                                    Seu pedido está em análise! <br /> Logo enviaremos para você!!! <ImHappy2 />
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-28 linear-bg'>
                <div className=' container mx-auto flex-wrap flex justify-around gap-y-10'>
                    <div className=' flex flex-col justify-start'>
                        <h1 className='text-end text-2xl text-[#1C1C1C] font-paytone'>ENCONTRE O EQUILÍBRIO</h1>
                        <img className='h-80 object-cover' src={freeEbook.src} alt="" />
                        <p className='mt-0 text-end'><span className='line-through'>de 39,00 R$</span> por<span className='font-bold'>  00 R$</span></p>
                    </div>
                    <div className='h-80 lg:bg-[#D9D9D9] linear-bg5 w-[250px] p-4 text-[#1C1C1C]'>
                        <h3>Dominando a Arte da Autoconsciência</h3>
                        <p className='lg:text-lg text-sm text-start lg:leading-7 leading-10'>
                            Dominar a arte da autoconsciência não só melhora sua relação consigo mesmo, mas também melhora suas interações sociais, sua carreira e sua saúde mental.
                        </p>
                    </div>
                    <div className='h-[350px] lg:bg-[#D9D9D9] linear-bg5 w-[250px] p-4 text-[#1C1C1C]'>
                        <h3>Gestão de Tempo e Produtividade</h3>
                        <p className='lg:text-lg text-sm text-start lg:leading-7 leading-10'>
                            A gestão de tempo e a produtividade são habilidades essenciais tanto no ambiente de trabalho quanto na vida pessoal. Elas ajudam a maximizar o uso do nosso tempo.
                        </p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <div className='h-96 lg:bg-[#D9D9D9] linear-bg5 w-[250px] p-4 text-[#1C1C1C]'>
                            <h3>Equilibrando seus hobbies</h3>
                            <p className='tracking-wide lg:text-lg text-sm text-start lg:leading-7 leading-10'>
                                Equilibrar hobbies com outras responsabilidades, como trabalho, estudos e vida familiar, pode ser um desafio, mas é essencial para manter uma vida saudável e satisfatória.
                            </p>
                        </div>
                        <button className='mt-4 h-10 w-32 border-none rounded-sm bg-green-400'>ADQUIRE JÁ</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aprender;
