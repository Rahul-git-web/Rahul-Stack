// import React from "react";

// const About = () => {
//   return (
//     <section id="about">
//       <div className="w-90% h-90%">
//         <h1 className="flex justify-center items-center text-3xl font-bold">
//           About
//         </h1>
//         <div className="">
//           <h3 className="text-3xl font-semibold text-center mt-10 tracking-wide leading-relaxed ">
//             Hey,{" "}
//             <span className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-500 hover:scale-105">
//               Rahul
//             </span>{" "}
//             here. I am a{" "}
//             <span className="inline-block text-green-500 font-semibold transition-all duration-500 hover:scale-105">
//               Web Developer
//             </span>{" "}
//             based in Uttar Pradesh, India
//           </h3>

          

//           <p className="text-xl font-semibold text-center mt-5 tracking-wide leading-relaxed">
//             I specialize in{" "}
//             <span className="text-blue-700 font-medium"> React.js</span>,{" "}
//             <span className="text-blue-700 font-medium">JavaScript (ES6+)</span>
//             , <span className="text-blue-700 font-medium">HTML</span>,{" "}
//             <span className="text-blue-700 font-medium">CSS</span>, and{" "}
//             <span className="text-blue-700 font-medium">Tailwind CSS</span> for
//             creating clean and scalable{" "}
//             <span className="inline-block text-yellow-500 text-2xl font-semibold transition-all duration-500 hover:scale-105">
//               UI designs
//             </span>{" "}
//             . I also have strong knowledge of <br />
//             <span className="inline-block text-yellow-500 text-2xl font-semibold transition-all duration-500 hover:scale-105">
//               {" "}
//               MySQL
//             </span>{" "}
//             for database management and writing efficient SQL queries.
//           </p>

//           <p className="text-l font-semibold text-center mt-5 tracking-wide leading-relaxed">
//             I focus on understanding core concepts deeply — especially React{" "}
//             <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-medium">
//               Hooks
//             </span>{" "}
//             &{" "}
//             <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-md font-medium">
//               Props
//             </span>{" "}
//             and applying them in real-world projects.
//           </p>

//           <p className="text-xl font-semibold text-center mt-5 tracking-wide leading-relaxed">
//             Currently, I am strengthening my full-stack fundamentals, improving
//             my problem-solving skills, and preparing for{" "}
//             <span className="inline-block text-xl text-yellow-500 px-1 py-1 rounded-md font-medium transition-all duration-500 hover:scale-105">
//               {" "}
//               Full-Stack developer
//             </span>{" "}
//             roles.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;







import React from "react";
import useInView from "../../hooks/useInView";

const About = () => {
  const [ref, isVisible] = useInView(0.3);

  return (
    <section
      id="about"
      ref={ref}
      className="relative items-center justify-center px-6 py-10 overflow-hidden"
    >
      <h1
        className={`text-4xl md:text-5xl font-bold mb-8 text-amber-400 transition-all duration-700 hover:scale-90 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        ABOUT ME
      </h1>

      
      <div className="absolute flex -top-37.5 -left-37.5 w-100 h-100 bg-purple-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>

      <div className="absolute -bottom-37.5 -right-37.5 w-100 h-100 bg-indigo-600 rounded-full blur-[150px] opacity-30"></div>

      <div
        className={`relative z-10 max-w-5xl mx-auto text-center text-white transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
     

        <h3 className="text-2xl md:text-3xl font-semibold mt-6 tracking-wide leading-relaxed">
          Hey,{" "}
          <span className="inline-block bg-linear-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text transition-all duration-500 hover:scale-105">
            Rahul
          </span>{" "}
          here. I am a{" "}
          <span className="inline-block text-purple-400 font-semibold transition-all duration-500 hover:scale-105">
            Web Developer
          </span>{" "}
          based in Uttar Pradesh, India
        </h3>

        <p className="text-lg md:text-xl mt-3 text-gray-300 leading-relaxed">
          I specialize in React.js, JavaScript (ES6+), HTML, CSS, and Tailwind CSS
          for creating clean and scalable UI designs. I also have strong knowledge
          of MySQL for database management and writing efficient SQL queries.
        </p>

        <p className="text-lg mt-3 text-gray-400 leading-relaxed">
          I focus on understanding core concepts deeply — especially React Hooks
          & Props and applying them in real-world projects.
        </p>

        <p className="text-lg md:text-xl mt-3 text-gray-300 leading-relaxed">
          Currently, I am strengthening my full-stack fundamentals, improving
          my problem-solving skills, and preparing for Full-Stack developer roles.
        </p>
      </div>
    </section>
  );
};

export default About;