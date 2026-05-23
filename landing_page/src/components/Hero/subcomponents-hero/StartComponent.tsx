import star from "../../../assets/Star.svg";

const StartComponent = () => {
  return (
   <div className="d-flex text-white flex-column star_texts">
     <div className="d-flex justify-content-center align-items-center mb-2 ms-4">
       <img src={star} alt="Estrela de certificação de qualidade"className="hero-star" />
        <img src={star} alt="Estrela de certificação de qualidade" className="hero-star"/>
          <img src={star} alt="Estrela de certificação de qualidade" className="hero-star"/>
            <img src={star} alt="Estrela de certificação de qualidade" className="hero-star" />
              <img src={star} alt="Estrela de certificação de qualidade" className="hero-star" />
     </div>
              <div className="d-flex flex-column">
  <p className="urbanist-bold paragraph-text-quality text-center">Qualidade</p>
              <p className="poppins-regular paragraph-text-experience text-end">Experiencia</p>
              </div>
            
     </div>
  )
}

export default StartComponent