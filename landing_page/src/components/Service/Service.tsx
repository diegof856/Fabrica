//css
import "./Service.css"
//components
import ServicoComponent from "./subcomponents-service/ServicoComponent"
const Service = () => {
  return (
   <section className="d-grid row-cols-1 w-100 overflow-hidden px-4">
    <article className="text-white ">
        <h2 className="poppins-semibold m-0 text-center">Nossos Serviços</h2>
        <p className="text-paragraph-size poppins-regular text-formatting">Desenvolvemos soluções digitais completas para impulsionar o seu negócio com tecnologia de ponta e design inovador.</p>
    </article>

    <ServicoComponent/>
   
   </section>
  )
}

export default Service