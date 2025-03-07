/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
        id: 1,
      imgSrc: '/public/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      id: 2,
      imgSrc: '/public/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
        id: 3,
      imgSrc: '/public/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
        id: 4,
      imgSrc: '/public/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
        id: 5,
      imgSrc: '/public/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
        id: 6,
      imgSrc: '/public/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      id: 7,
      imgSrc: '/public/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
        id: 8,
      imgSrc: '/public/images/mysqllogo.svg',
      label: 'MySQL',
      desc: 'Database'
    }
  ];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">Tools & Technologies I Work With</h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">These are the tools and technologies I use to build modern, scalable, and efficient web applications from frontend to backend and cloud infrastructure.
                </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                    {
                        skillItem.map(({id,imgSrc,label,desc}) =>(
                            <SkillCard
                             key={id}
                             imgSrc={imgSrc}
                             label={label}
                             desc={desc}
                             classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
}

export default Skill;
