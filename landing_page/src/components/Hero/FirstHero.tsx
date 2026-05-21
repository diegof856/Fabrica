import quotesImg from "../../assets/quote-up.png";
import globeImg from "../../assets/globe.svg";
import character from "../../assets/character.svg";
import smallGear from "../../assets/gear_small.svg";
import bigGear from "../../assets/gear_big.svg";
import star from "../../assets/Star.svg";
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden">
     <div className="d-flex flex-column align-items-start py-1 px-3 gap-3 w-75">
        <img src={quotesImg} alt="Imagem de Aspas" className="img-fluid" />
        <p className="poppins-medium text-white mb-0 small">O design de produto excepcional, a gente garante o sucesso do seu site.</p>
     </div>
     <div className="d-flex px-4 justify-content-center">
     
<img src={globeImg} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-globe" />
   
  <img src={character} alt="imagem que representa o globo terrestre com uma lampada no centro" className="hero-character"/>
       
     </div>
     <div className="d-flex ">
     <div className="">
      <img src={smallGear} alt="imagem pequena de uma engrenagem" className="small-gear"  />
     </div>
     <div>
        <img src={bigGear} alt="imagem grande de uma engrenagem"  className="big-gear"/>
     </div>
     <div className="d-flex text-white flex-column ">
     <div>
       <img src={star} alt="Estrela de certificação de qualidade"className="hero-star" />
        <img src={star} alt="Estrela de certificação de qualidade" className="hero-star"/>
          <img src={star} alt="Estrela de certificação de qualidade" className="hero-star"/>
            <img src={star} alt="Estrela de certificação de qualidade" className="hero-star" />
              <img src={star} alt="Estrela de certificação de qualidade" className="hero-star" />
     </div>
              <div className="d-flex flex-column">
  <p className="urbanist-bold">Qualidade</p>
              <p className="poppins-regular">Experince</p>
              </div>
            
     </div>
     </div>
        
        </section>
  )
}

export default FirstHero