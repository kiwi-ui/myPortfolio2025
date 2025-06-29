import lavin from '../assets/lavin.png';
import comproDvt from '../assets/compro divition.png';
import comproLavin from '../assets/lavincompro.png';

const Works = [
  {
    id: 1,
    title: "Nusa Jaya",
    subtitle: "BackOffice Application for Car Workshop",
    image: lavin,
    description:
       "A web-based management system for an automotive workshop, enabling efficient handling tasks that nedeed to in a workshop. Built with React and Laravel for a smooth and scalable workflow.",
    technologies: ["FaReact", "IoLogoIonic", "FaBootstrap", "FaLaravel", "SiMysql"],
    link: "https://ws-backoffice.netlify.app"
  },
  {
    id: 2,
    title: "Lavin",
    subtitle: "Company Profile",
    image: comproLavin,
    description:
        "Lavin Technologies is a software development company that is experienced from handling publicly traded companies to personal non-experts in building their online presence for both their business and personal brand.",
    technologies: ["FaHtml5", "BsFiletypeScss"],
    link: "https://lavin.id"
  },
  {
    id: 3,
    title: "Divition",
    subtitle: "Company Profile",
    image: comproDvt ,
    description:
        "Divition's company profile website that highlights the services and capabilities of Divition, a prominent player in its field. The site is crafted to be engaging and informative, offering visitors insights into the company's mission and solutions.",
    technologies: ["FaReact", "FaBootstrap", "RiFirebaseFill"],
    link:'https:divition.my.id'
  }
];

export default Works
