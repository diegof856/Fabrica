//components
//Header
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FirstHero from "./components/Hero/FirstHero";
import SecondHero from "./components/Hero/SecondHero";
import Service from "./components/Service/Service"
import Team from "./components/Team/Team";
import BicoDigital from "./components/Works/BicoDigital";

import { CheckImageProvider } from "./context/CheckImageContext";
function App() {


  return (
    <>
    <CheckImageProvider>
     <Header/>
     <FirstHero/>
    <SecondHero/>
     <Team/>
    <Service/>
    <BicoDigital/>
    <Contact/>
    <Footer/>
    </CheckImageProvider>
    </>
  )
}

export default App
