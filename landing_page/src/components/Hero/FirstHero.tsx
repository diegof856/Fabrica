import quotesImg from "../../assets/quote-up.png";
import globeImg from "../../assets/globe.svg";
import character from "../../assets/character.svg";
const FirstHero = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden">
     <div className="d-flex flex-column align-items-start py-1 px-3 gap-3">
        <img src={quotesImg} alt="Imagem de Aspas" className="img-fluid" />
        <p className="poppins-medium text-white mb-0">O design de produto excepcional, a gente garante o sucesso do seu site.</p>
     </div>
     <div className="d-flex gap-2 px-3 justify-content-center">
        <img src={globeImg} alt="imagem que representa o globo terrestre com uma lampada no centro" className="img-fluid w-50" />
         <img src={character} alt="imagem que representa o globo terrestre com uma lampada no centro" className="img-fluid w-50"/>
     </div>
        
        </section>
  )
}

export default FirstHero