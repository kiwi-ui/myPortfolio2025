import { Badge, Button, Card, Container, Image } from "react-bootstrap"
import Works from "../../data/works";
import { FaBootstrap, FaHtml5, FaLaravel, FaReact } from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { BsFiletypeScss } from 'react-icons/bs';
import { RiFirebaseFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

const Work = () => {
  const iconMap = {
  FaReact: <FaReact />,
  IoLogoIonic: <IoLogoIonic />,
  FaBootstrap: <FaBootstrap />,
  FaLaravel: <FaLaravel />,
  SiMysql: <SiMysql />,
  FaHtml5: <FaHtml5 />,
  BsFiletypeScss: <BsFiletypeScss />,
  RiFirebaseFill: <RiFirebaseFill />,
};
  return (
    <section>
        <Container className='text-center text-black py-5 px-3'>
          {Works.map((job, index) => (
            <div key={job.id} className={`${index == Works.length - 1 ? "" : "border-bottom border-secondary"} mb-4`}>
                <p className="mb-0 fw-medium" style={{fontSize: "2rem"}}>{job.title}</p>
                <u className="underline d-block fw-lighter opacity-50" style={{textUnderlineOffset: "0.7rem"}}>{job.subtitle}</u>
                <Link className="text-decoration-none" to={job.link} target="_blank">
                    <Image 
                      fluid className="w-100 mt-4 border border-2 border-black rounded-2" 
                      src={job.image} 
                      alt="Card image" rounded
                    />
                </Link>
                
                <div className="py-4">
                    <p className='fs-5'>
                      {job.description}
                    </p>
                </div>

                { job.technologies.map((tech, index) => (
                    <Badge key={index} className="badge mx-2 mb-4 fs-2 rounded-5">{iconMap[tech]}</Badge>
                ))}
            </div>
          ))}
        </Container>
    </section>
  )
}

export default Work
