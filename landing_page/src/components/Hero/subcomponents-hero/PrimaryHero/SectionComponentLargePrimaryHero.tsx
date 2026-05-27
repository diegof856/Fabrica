import globeImg from "../../../../assets/globe.svg";
import character from "../../../../assets/character--lg.svg";

//components
import Gear from "../GearComponent";
import ArrowSvgLeft from "../../../../HelperSvg/ArrowSvgLeft";
import ArrawSvgRight from "../../../../HelperSvg/ArrawSvgRight";
import GearBodyPrimaryHero from "../../../../HelperSvg/GearBodyPrimaryHeroSvg";
import GearBodySmallPrimaryHeroSvg from "../../../../HelperSvg/GearBodySmallPrimaryHeroSvg";
import GearBodyBluePrimaryHeroSvg from "../../../../HelperSvg/GearBodyBluePrimaryHeroSvg";
import ThreeStarBodyComponent from "../../ThreeStarBodyComponent"
import TwoStarBodyComponent from "../../TwoStarBodyComponent";
const SectionComponentLargePrimaryHero = () => {
  return (
    <div className="row g-3 position-relative overflow-hidden">
    <ThreeStarBodyComponent/>
    <TwoStarBodyComponent/>
  <div className="bg-svg-element svg-gear-large">
    <GearBodyPrimaryHero/>
  </div>
  <div className="bg-svg-element svg-gear-small">
    <GearBodySmallPrimaryHeroSvg/>
  </div>
 <div className="bg-svg-element svg-gear-blue">
  <GearBodyBluePrimaryHeroSvg/>
</div>


      {/* Coluna Esquerda */}
      <div className="position-relative col-6 d-flex flex-column justify-content-center y-content-center align-items-center py-1 gap-3 px-3 mb-5" style={{zIndex: 1}}>
       <div className="position-absolute position-arrow-left translate-middle-y ps-3">
    <ArrowSvgLeft/>
  </div>
        <h5 className="urbanist-semibold text-white text-center mb-0 fs-2">
          "Nós somos a <span className="color-blue-text urbanist-semibold">Nazatech</span>, inovação e desenvolvimento para todos."
        </h5>
       <div className="position-absolute position-arrow-right translate-middle-y pe-3">
    <ArrawSvgRight/>
  </div>

      </div>
      {/* Coluna Direita  */}
      <div className="col-6 d-flex flex-column" style={{zIndex: 1}}>
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