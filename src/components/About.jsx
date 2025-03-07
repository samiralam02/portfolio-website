/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */

import React from 'react';
import logo from "../../public/images/logo.svg"

const aboutItems = [
    {
      label: 'Project done',
      number: 4 
    }
  ];

const About = () => {
    return (
        <section 
        id='about'
        className='section'
        >

            <div className="container">
                <div className='text-justify bg-zinc-800/50 p-7 rounded-2xl
                md:p-12 reveal-up'>
                    <p className='text-zinc-300 mb-4 md:mb-8 
                    md:text-xl md:max-w-[60ch]'>
                     Welcome! I'm Samir Alam, a web developer with a growing foundation in building visually stunning and highly functional websites. I blend creativity with technical skills to craft modern digital experiences that are both efficient and engaging.
                    </p>

                    <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                      {
                        aboutItems.map(({label,number}, key) =>(
                          <div key={key}>
                            <div className='flex items-center md:mb-2'>
                              <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                              <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                            </div>

                            <p className='text-sm text-zinc-400'>{label}</p>

                          </div>
                        ))
                      }

                      <img 
                      src={logo} 
                      alt="Logo"
                      width={30}
                      height={30}
                      className="ml-auto md:w-[40px] md:h-[40px] "
                      />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;
