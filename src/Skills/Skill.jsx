// import React from 'react'

// const Skill = () => {
//   return (
//     <section id="skills" className="min-h-screen py-20">
//     <div className=''>
//       <h1 className='text-3xl font-bold text-center my-10'>My Skills</h1>
//       <h2 className='text-2xl m-5 font-serif'>Frontend Skills</h2>
//       <div className='flex justify-center text-5xl'>Website Coming Soon...</div>
//     </div>
//     </section>
//   )
// }

// export default Skill

import React, { useState, useEffect } from "react";

const Skill = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="min-h-screen py-20">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">My Skills</h1>
        <h2 className="text-2xl m-5 font-serif">Frontend Skills</h2>

        <div className="flex justify-center text-5xl font-bold text-blue-600">
          Website Coming Soon{dots}
        </div>
      </div>
    </section>
  );
};

export default Skill;

