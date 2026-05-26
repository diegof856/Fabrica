//components
import { TeamComponent } from "./subcomponents-team/TeamComponent"
//css
import "./Team.css"
const Team = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
      <article className="text-white ">
        <h2 className="poppins-semibold m-0 text-center">Nossa Equipe</h2>
        <p className="text-paragraph-size poppins-regular text-formatting mt-2">Nossa equipe desenvolve soluções digitais completas com tecnologia de ponta e design inovador, entregando qualidade, confiança e resultados para impulsionar o crescimento do seu negócio.</p>
      </article>
      <TeamComponent />
    </section>
  )
}

export default Team