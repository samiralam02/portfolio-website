/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */

import Project1 from "../../public/images/project-1.png"
import Project2 from "../../public/images/project-2.png"
import Project3 from "../../public/images/project-3.png"

const works = [
    {
      "id": 1,
      "imgSrc": Project1,
      "title": "Sikkim Tours & Travel Website",
      "tags": ["PHP", "MySQL", "Frontend & Backend"],
      "projectLink": "http://sikkimtales.42web.io/"
    },
    {
      "id": 2,
      "imgSrc": Project2,
      "title": "To-Do List Web App",
      "tags": ["JavaScript", "Local Storage", "Frontend"],
      "projectLink": "https://samiralam02.github.io/todo-list-app/"
    },
    {
      "id": 3,
      "imgSrc": Project3,
      "title": "My Personal Portfolio",
      "tags": ["React", "Frontend", "Responsive Design"],
      "projectLink": "https://samiralam02.github.io/portfolio-website/"
    }    
    
];

import ProjectCard from "./ProjectCard";

const Work = () => {
    return (
      <section
       id="work"
       className="section">

        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
             Projects I've Built & Worked On
            </h2>

            <div className="grid gap-x-4 gap-y-4  grid-cols-[repeat(auto-fill,minmax(280px,1fr))] ">
              {
                works.map(({id,imgSrc,title,tags,projectLink}) =>(
                    <ProjectCard
                     key={id}
                     imgSrc={imgSrc}
                     title={title}
                     tags={tags}
                     projectLink={projectLink}
                     classes="reveal-up"
                     />
                ))
              }
            </div>
        </div>
       </section>
    );
}

export default Work;
