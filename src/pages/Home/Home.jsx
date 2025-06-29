import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import {Link}  from 'react-router-dom';
import cv from '../../assets/cv.pdf';
const Home = () => {
  const professions = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
  const [profession, setProfession] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProfession(profession => (profession + 1) % professions.length);
    }, 1000);

    return () => clearInterval(intervalId); 
  },[])
  
  return (
    <section className="py-4">
        <Container className='text-black px-3'>
            <h1 className='fw-bold mb-0 text-md-start text-center'>Hi, I'm Yusni Anggara, <br/>{professions[profession]}</h1>

            <div className="py-4 text-md-start text-center">
                <p className='fs-4'>
                  I build design systems and code websites for <br/>
                  leaders and brands all around the world. 
                </p>
                <p className='fs-4'>
                  Within my 18 years of experience, my professional work and <br/> 
                  open source contributions have already <br/>
                  impacted millions of people.
                </p>
            </div>
            <div className='d-flex justify-content-md-start justify-content-center gap-3'>
                <Link className="btn btn-lg text-white fw-semibold" to={"/works"}>See my work</Link>
                <a href={cv} className="btn btn-lg text-white fw-semibold" download="CV_YusniAnggara.pdf" >
                    Download CV
                </a>
            </div>
            <div className='py-4'>
                <p className="fs-4 mb-0 fw-medium text-secondary text-center text-md-start">Find Me On</p>
                <div className='d-flex justify-content-md-start justify-content-center gap-3 fs-2'>
                  <a className="" href="https://www.linkedin.com/in/yusni-anggara-92a70b152"><BsLinkedin /></a>
                  <a className="" href="https://github.com/kiwi-ui"><BsGithub /></a>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Home
