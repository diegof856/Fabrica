import quotesImg from "../../assets/quote-up.png";
import globeImg from "../../assets/globe.svg";
import character from "../../assets/character.svg";
//components
import Star from "./subcomponents-hero/StartComponent";
import Gear from "./subcomponents-hero/GearComponent";
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden">
      <div className="d-flex flex-column align-items-start py-1 px-3 gap-1 w-75">
        <img src={quotesImg} alt="Imagem de Aspas" className="img-fluid quotes-hero" />
        <p className="poppins-medium text-white mb-0 affirmative-text">O design de produto excepcional, a gente garante o sucesso do seu site.</p>
      </div>
      <div className="d-flex px-4 justify-content-center">

        <img src={globeImg} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-globe" />

        <img src={character} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-character" />

      </div>
      <div className="d-flex ">
        <Gear />
        <Star />
      </div>

    </section>
  )
}

export default FirstHero