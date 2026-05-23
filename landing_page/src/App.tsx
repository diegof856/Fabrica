//components
//Header
import Header from "./components/Header/Header";
import FirstHero from "./components/Hero/FirstHero";
import SecondHero from "./components/Hero/SecondHero";
import Service from "./components/Service/Service"
import Team from "./components/Team/Team";
//css
import "./App.css"
import { CheckImageProvider } from "./context/CheckImageContext";
function App() {


  return (
    <>
    <CheckImageProvider>
     <Header/>
     <FirstHero/>
    <SecondHero/>
    <Service/>
    <Team/>
    </CheckImageProvider>
    </>
  )
}

export default App
