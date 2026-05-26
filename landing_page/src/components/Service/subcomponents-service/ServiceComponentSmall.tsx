//components
import ServicoComponent from "./ServiceComponent"

const ServiceComponentSamll = () => {
  return (
    <div>
        <article className="text-white d-flex flex-column justify-content-center">
        <h2 className="poppins-semibold m-0 text-center">Nossos Serviços</h2>
        <p className="text-paragraph-size poppins-regular text-formatting mx-auto">Desenvolvemos soluções digitais completas para impulsionar o seu negócio com tecnologia de ponta e design inovador.</p>
    </article>

    <ServicoComponent/>
    </div>
  )
}

export default ServiceComponentSamll