/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */
import SkillCard from "./SkillCard";
import tailwindLogo from "../../public/images/tailwindcss.svg"
import css3Logo from "../../public/images/css3.svg"
import jsLogo from "../../public/images/javascript.svg"
import nodeJsLogo from "../../public/images/nodejs.svg"
import expressJsLogo from "../../public/images/expressjs.svg"
import mongoDbLogo from "../../public/images/mongodb.svg"
import reactJsLogo from "../../public/images/react.svg"
import mySqlLogo from "../../public/images/mysqllogo.svg"

const skillItem = [
    {
        id: 1,
      imgSrc: {tailwindLogo},
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      id: 2,
      imgSrc: {css3Logo},
      label: 'CSS',
      desc: 'User Interface'
    },
    {
        id: 3,
      imgSrc: {jsLogo},
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
        id: 4,
      imgSrc: {nodeJsLogo},
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
        id: 5,
      imgSrc: {expressJsLogo},
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
        id: 6,
      imgSrc: {mongoDbLogo},
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      id: 7,
      imgSrc: {reactJsLogo},
      label: 'React',
      desc: 'Framework'
    },
    {
        id: 8,
      imgSrc: {mySqlLogo},
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
