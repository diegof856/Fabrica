//components
import ServicoComponent from "../subcomponents-service/ServiceComponent"
const ServiceComponentLarge = () => {
  return (
    <div>
      <article className="text-white d-flex flex-column justify-content-center">
        <h2 className="poppins-semibold m-0 text-center">Nossos Serviços</h2>
        <p className="poppins-regular mx-auto fs-6 text-center">Desenvolvemos soluções digitais completas para impulsionar o seu negócio com tecnologia de ponta e design inovador.</p>
      </article>

      <ServicoComponent />
    </div>
  )
}

export default ServiceComponentLarge