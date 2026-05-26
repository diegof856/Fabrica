import quotesImg from "../../../../assets/quote-up.png";
import globeImg from "../../../../assets/globe.svg";
import character from "../../../../assets/character--lg.svg";
//components
import Gear from "../GearComponent";
import StartComponent from "../StartComponent";
const SectionComponentLargePrimaryHero = () => {
  return (
    <div className="row g-3">
      {/* Coluna Esquerda */}
      <div className="col-6 d-flex flex-column justify-content-center y-content-center align-items-center py-1 gap-3 px-3 mb-5">
        <h5 className="urbanist-semibold text-white text-center mb-0 fs-4">
          "Nós somos a <span className="color-blue-text">Nazatech</span>, inovação e desenvolvimento para todos."
        </h5>
        <div className="d-flex">
          <div className="d-flex flex-column align-items-start py-1 px-3 gap-1 w-75">
            <img src={quotesImg} alt="Imagem de Aspas" className="img-fluid quotes-hero" />
            <p className="poppins-medium text-white mb-0 affirmative-text fs-6">O design de produto excepcional, a gente garante o sucesso do seu site.</p>
          </div>
          <StartComponent />
        </div>

      </div>
      {/* Coluna Direita  */}
      <div className="col-6 d-flex flex-column">
        <div className="d-flex px-4 justify-content-center">

          <img src={globeImg} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-globe" />

          <img src={character} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-character" />

        </div>
        <div className="d-flex ">
          <Gear />
        </div>
      </div>
    </div>
  )
}

export default SectionComponentLargePrimaryHero