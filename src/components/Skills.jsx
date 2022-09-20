import React from 'react'
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";


const Skills = () => {
    return (
        <section id="skills" className='w-full h-screen bg-[#0a192f]'>
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <p className=" sm:text-4xl text-3xl font-medium title-font inline border-b-4 border-pink-600 text-gray-300 mb-4">
                Skills &amp; Technologies
              </p>
              <p className='py-4 text-gray-300'>// These are the technologies I've worked with</p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500 ">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      Javascript
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      ReactJS
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      NextJS
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      Node
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      GraphQl
                    </span>
                  </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-110 duration-500">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                    <span className="title-font font-medium text-gray-300">
                      Mongo DB
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </section>
      );
}

export default Skills