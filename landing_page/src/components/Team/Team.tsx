//components
import TeamSmall from "../Team/subcomponents-team/TeamSmallComponent";
import TeamLarge from "../Team/subcomponents-team/TeamLargeComponent"
//css
import "./Team.css"
const Team = () => {
  return (
    <section id="Equipe" className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
      <div className="d-md-none">
        <TeamSmall />
      </div>
      <div className="d-none d-md-block">
        <TeamLarge />
      </div>
    </section>
  )
}

export default Team