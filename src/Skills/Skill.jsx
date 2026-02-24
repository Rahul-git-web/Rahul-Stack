import React from 'react'
import Reveal from '../Components/Reveal';
import HTML from "../assets/html.webp";
import CSS from "../assets/css.webp";
import JAVASCRIPT from "../assets/js.webp";
import REACT from "../assets/react.webp";
import TAILWIND from "../assets/tailwind.png";

const Skill = () => {
  return (
    <Reveal>
    <section id="skills" className="min-h-screen py-10">
    <div className=''>
      <h1 className="text-4xl md:text-5xl px-6 font-bold mb-8 text-amber-400 transition-all duration-500 hover:scale-90">MY SKILL</h1>
      <h2 className='text-violet-700 text-3xl text-center font-serif transition-all duration-500 hover:scale-90'>FRONTEND SKILL</h2>

      <div className='flex justify-center items-center mt-10 gap-7'>
        <img className='w-20 h-20 object-cover rounded-full border-2 border-purple-500/30 transition-all duration-300 hover:scale-80' src={HTML} alt="HTML" />
        <img className='w-20 h-20 object-cover rounded-full border-2 border-purple-500/30 transition-all duration-300 hover:scale-80' src={CSS} alt="CSS" />
        <img className='w-20 h-20 object-cover rounded-full border-2 border-purple-500/30 transition-all duration-300 hover:scale-80' src={JAVASCRIPT} alt="JAVASCRIPT" />
         <img className='w-20 h-20 object-cover rounded-full border-2 border-purple-500/30 transition-all duration-300 hover:scale-80' src={REACT} alt="SCRIPT" />
          <img className='w-20 h-20 object-cover rounded-full border-2 border-purple-500/30 transition-all duration-300 hover:scale-80' src={TAILWIND} alt="TAILWIND" />

      </div>

      
      
    </div>
    </section>
    </Reveal>
  )
}

export default Skill



