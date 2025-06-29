import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/Home/Home"
import Work from "./pages/Work/Work"
import "./App.css"
import ThemeButton from "./components/themeButton/themeButton"
function App() {
  return (
    <BrowserRouter>
      <ThemeButton />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Work />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
