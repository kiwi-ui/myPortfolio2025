import { Container } from "react-bootstrap"
import { FaBootstrap, FaReact } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="">
        <Container className="py-4">
            <div className="d-flex justify-content-center gap-2">
                <a href="http://" target="_blank" rel="noopener noreferrer">Home</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" aria-disabled>•</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" aria-disabled>•</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>

            <div className="text-center text-secondary">
                <p className="text-center py-3 mb-0 fs-6">
                    Copyright © 2024 JGTHMS Ltd (12588054) registered in England and Wales.
                    Registered Office Address: First Floor, Telecom House, 125-135 Preston Road, Brighton, East Sussex, United Kingdom, BN1 6AF
                </p>
                <p className="mb-0">Made with ❤️ by Yusni Anggara</p>
                <div className="d-flex justify-content-center gap-3 fs-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaBootstrap /></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><FaReact /></a>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
