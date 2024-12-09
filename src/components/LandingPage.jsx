import React, { useState } from 'react';
import { Mail, Phone, Menu, X } from 'lucide-react';
import background from '../assets/background.svg';
import logo from '../assets/logo.svg';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white  sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2  ">
              <img src={logo} alt="" />
            <span className="text-2xl font-bold text-gray-800">PageAce</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-800">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-800">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-800">
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          {/* Botão de menu móvel */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </header>

      {/* Menu móvel */}
      <div
        className={`fixed inset-0 z-20 bg-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={toggleMenu}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={toggleMenu}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-gray-600 text-lg"
                onClick={toggleMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
      <section className="min-h-screen bg-gradient-to-r from-blue-400  to-blue-600 flex flex-col align-center justify-center md:flex-row items-center ">
          {/* Texto do Hero */}
          <div class="flex flex-col justify-center items-start lg:ml-32 text-left md:w-1/2 mx-10 sm:mx-5">
            <h1 class="text-5xl font-bold text-white mb-6">
              Crie Landing Pages Incríveis com <span className='bg-gradient-to-r from-blue-900 via-blue-700 to-blue-700 bg-clip-text text-transparent'>PageAce</span>
            </h1>
            <p class="text-xl text-white mb-8">Transforme visitantes em clientes com nossas landing pages de alta conversão.</p>
            <button class="flex justify-start">
              <a href="#services" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Comece Agora
              </a>
            </button>
          </div>

        </section>

        {/* Serviços */}
        <section id="services" className="min-h-screen py-24 bg-white flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:scale-105 duration-75">
                <h3 className="text-xl font-semibold mb-4">Design Personalizado</h3>
                <p className="text-gray-600">
                  Criamos landing pages únicas que refletem a identidade da sua marca.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:scale-105 duration-75">
                <h3 className="text-xl font-semibold mb-4">Otimização para Conversão</h3>
                <p className="text-gray-600">
                  Utilizamos as melhores práticas para maximizar suas taxas de conversão.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:scale-105 duration-75">
                <h3 className="text-xl font-semibold mb-4">Responsivo e Rápido</h3>
                <p className="text-gray-600">
                  Nossas páginas são otimizadas para todos os dispositivos e carregam
                  rapidamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section
          id="about"
          className="min-h-screen py-24 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 animate-gradient-x flex items-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Sobre Nós</h2>
            <p className="text-xl text-white text-center max-w-3xl mx-auto">
              A PageAce é especializada em criar landing pages de alto impacto que
              convertem visitantes em clientes. Com anos de experiência e uma equipe
              dedicada, estamos prontos para elevar seu negócio ao próximo nível.
            </p>
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className="min-h-screen py-24 bg-white flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Pronto para começar? Entre em contato conosco por WhatsApp ou e-mail:
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="https://wa.link/xp85xx"
                className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                <Phone className="mr-2" />
                WhatsApp
              </a>
  
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PageAce. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
