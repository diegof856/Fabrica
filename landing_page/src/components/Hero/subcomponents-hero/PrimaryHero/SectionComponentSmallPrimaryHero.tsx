import globeImg from "../../../../assets/globe.svg";
import character from "../../../../assets/character.svg";
//components
import Gear from "../GearComponent";
import Sentence from "../../../../HelperSvg/SentenceSmSvg";
import StarTwoBlue from "../../../../HelperSvg/Stars/StarTwoBlueSvg";
import StarTwoBlueVariantTwoSvg from "../../../../HelperSvg/Stars/StarTwoBlueVariantTwoSvg";
import StarTwoBlueVariantThreeSvg from "../../../../HelperSvg/Stars/StarTwoBlueVariantThreeSvg";

const SectionComponentSmallHero = () => {
  return (
    <div className="position-relative row g-4 justify-content-center">
      <StarTwoBlue className="svg-star-two position-absolute" />
      <StarTwoBlueVariantTwoSvg className="svg-startwo-variant-two position-absolute " />
      <StarTwoBlueVariantThreeSvg className="svg-startwo-variant-three position-absolute" />
      <StarTwoBlueVariantThreeSvg className="svg-startwo-variant-three-postion-gear position-absolute" />
      <div className="col-12 d-flex flex-column align-items-center">
        <div className="m-0">
          <Sentence />
        </div>
        <div className="d-flex align-items-center justify-content-center position-relative w-100">
          <img
            src={globeImg}
            alt="imagem que representa o globo terrestre com uma lampada no centro"
            className="hero-globe"
          />
          <img
            src={character}
            alt="imagem que representa o boneco"
            className="hero-character img-fluid"
          />
        </div>

      </div>
      <div className="d-flex ">
        <Gear />
      </div>

    </div>
  )
}

export default SectionComponentSmallHero