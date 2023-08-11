import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="text-gray-300 w-full min-h-screen bg-[#0a192f] mb-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-10">
          <p className="sm:text-4xl text-3xl font-medium title-font inline border-b-4 border-pink-600 text-gray-300 mb-4">
            Projects
          </p>
          <p className="py-4 text-gray-300">// These are some of the applications i have built</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative  w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div name='contact'></div>
    </section>
  );
}








// export default function Projects() {
//   return (
//     <section name="projects" className="text-gray-300 w-full min-h-screen bg-[#0a192f] mb-20">
//       <div className="container px-5 py-10 mx-auto text-center lg:px-40">
//         <div className="text-center mb-10">
//           <p className="sm:text-4xl text-3xl font-medium title-font inline border-b-4 border-pink-600 text-gray-300 mb-4">
//             Projects
//           </p>
//           <p className="py-4 text-gray-300">// These are some of the applications i have built</p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {projects.map((project) => (
//             <a
//               href={project.link}
//               key={project.image}
//               className="sm:w-1/2 w-100 p-4">
//               <div className="flex relative">
//                 <img
//                   alt="gallery"
//                   className="absolute inset-0 w-full h-full object-cover object-center"
//                   src={project.image}
//                 />
//                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                   <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//                     {project.subtitle}
//                   </h2>
//                   <h1 className="title-font text-lg font-medium text-white mb-3">
//                     {project.title}
//                   </h1>
//                   <p className="leading-relaxed">{project.description}</p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }