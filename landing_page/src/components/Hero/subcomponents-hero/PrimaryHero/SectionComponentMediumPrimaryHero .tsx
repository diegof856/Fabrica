import globeImg from "../../../../assets/globe.svg";
import character from "../../../../assets/character--lg.svg";

//components
import Gear from "../GearComponent";
import SentenceMd from "../../../../HelperSvg/SentenceMdSvg";
import StarThree from "../../../../HelperSvg/StarThreeBlueSvg";
import GearBlueSvg from "../../../../HelperSvg/GearBlueSvg";
import GearLgSvg from "../../../../HelperSvg/GearLgSvg";
import GearSmallSvg from "../../../../HelperSvg/GearSmallSvg";
import StarTwoBlueVariantTwoSvg from "../../../../HelperSvg/StarTwoBlueVariantTwoSvg";
import StarTwoBlue from "../../../../HelperSvg/StarTwoBlueSvg"
const SectionComponentLargePrimaryHero = () => {
  return (
    <div className="row g-3 position-relative overflow-hidden">


      {/* Coluna Esquerda */}
      <div className="col-6 d-flex flex-column justify-content-center y-content-center align-items-center py-1 gap-3 px-3 mb-5" style={{zIndex: 1}}>
        <StarThree/>
        <GearLgSvg/>
        <GearBlueSvg/>
        <GearSmallSvg/>
        <StarTwoBlue/>
        <StarTwoBlueVariantTwoSvg/>
      <SentenceMd/>
   

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