import globeImg from "../../../../assets/globe.svg";
import character from "../../../../assets/character--lg.svg";

//components
import Gear from "../GearComponent";
import Sentence from "../../../../HelperSvg/SentenceSvg";
import StarThree from "../../../../HelperSvg/Stars/StarThreeBlueSvg";
import GearBlueSvg from "../../../../HelperSvg/GearBlueSvg";
import GearLgSvg from "../../../../HelperSvg/GearLgSvg";
import GearSmallSvg from "../../../../HelperSvg/GearSmallSvg";
import StarTwoBlueVariantTwoSvg from "../../../../HelperSvg/Stars/StarTwoBlueVariantTwoSvg";
import StarTwoBlue from "../../../../HelperSvg/Stars/StarTwoBlueSvg"
import StarTwoBlueVariantThreeSvg from "../../../../HelperSvg/Stars/StarTwoBlueVariantThreeSvg";

const SectionComponentLargePrimaryHero = () => {
  return (
    <div className="row g-3 position-relative overflow-hidden">
      <StarThree className="svg-starthree position-absolute" />
      <StarThree className="svg-starthree-variant-lg position-absolute" />
      <GearLgSvg className="svg-gear-lg position-absolute" />
      <GearLgSvg className="svg-gear-lg-variant position-absolute" />
      <GearBlueSvg className="svg-gear-blue position-absolute" />
      <GearBlueSvg className="svg-gear-blue-two-lg position-absolute" />
      <GearSmallSvg className="svg-gear-sm position-absolute" />
      <StarTwoBlue className="svg-star-two position-absolute" />
      <StarTwoBlueVariantTwoSvg className="svg-startwo-variant-two position-absolute " />
      <StarTwoBlueVariantThreeSvg className="svg-startwo-variant-three position-absolute" />
      <StarTwoBlueVariantThreeSvg className="svg-startwo-variant-three-postion-gear position-absolute" />
      <StarTwoBlueVariantThreeSvg className="svg-startwo-variant-three-postion-lg position-absolute" />

      {/* Coluna Esquerda */}
      <div className="col-6 d-flex flex-column justify-content-center y-content-center align-items-center py-1 gap-3 px-3 mb-5" style={{ zIndex: 1 }}>
        <Sentence />


      </div>
      {/* Coluna Direita  */}
      <div className="col-6 d-flex flex-column" style={{ zIndex: 1 }}>
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