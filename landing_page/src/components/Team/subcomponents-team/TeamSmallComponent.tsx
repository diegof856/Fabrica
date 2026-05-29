//components
import { TeamComponent } from "../subcomponents-team/TeamComponent"

const TeamSmallComponent = () => {
  return (
    <div>
          <article className="text-white ">
        <h2 className="poppins-semibold m-0 text-center">Nossa Equipe</h2>
        <p className="poppins-regular text-formatting mt-2 small">Nossa equipe desenvolve soluções digitais completas com tecnologia de ponta e design inovador, entregando qualidade, confiança e resultados para impulsionar o crescimento do seu negócio.</p>
      </article>
      <TeamComponent />
    </div>
  )
}

export default TeamSmallComponent