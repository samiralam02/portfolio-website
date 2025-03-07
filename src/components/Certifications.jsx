/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */

import CertificateCard from "./CertificateCard";

const certifications = [
    {
      id: 1,
      imgSrc: '/public/images/aws-certified.png',
      title: 'AWS Cloud Practitioner',
      tags: ['AWS', 'Cloud Computing'],
      certLink: 'https://www.credly.com/badges/8d9707d8-c358-4c10-8abc-3503146973f2/'
    },
    {
      id: 2,
      imgSrc: '/public/images/responsive-webdesign.png',
      title: 'Responsive Web-Design',
      tags: ['frontend', 'webdevelopment'],
      certLink: 'https://www.freecodecamp.org/certification/Samir_Alam/responsive-web-design'
    },
    {
      id: 3,
      imgSrc: '/public/images/pythonprogramming.png',
      title: 'Introduction To Python Programming',
      tags: ['coding', 'Python-basics'],
      certLink: 'https://app.dataquest.io/verify_cert/XY85T3SPMY58FGA4DKCJ/'
    },
    {
      id: 4,
      imgSrc: '/public/images/javascript-basics-cert.png',
      title: 'JavaScript Algorithms and Data Structures',
      tags: ['JavaScript', 'Programming'],
      certLink: 'https://www.hackerrank.com/certificates/f81388fb0dc6'
    }
];


const Certifications = () => {
    return (
        <section
        id="certification"
        className="section"
        >
            <div
            className="container">
                <h2
                className="headline-2 mb-8 reveal-up"
                >
                  My Certifications & Achievements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certifications.map(({ id, imgSrc, title, tags, certLink }) => (
                        <CertificateCard 
                            key={id}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            certLink={certLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>


            </div>

        </section>
    );
}

export default Certifications;
