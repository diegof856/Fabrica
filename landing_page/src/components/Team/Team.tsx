//components
import TeamSmall from "../Team/subcomponents-team/TeamSmallComponent";
import TeamLarge from "../Team/subcomponents-team/TeamLargeComponent"
//css
import "./Team.css"
const Team = () => {
  return (
    <section id="Equipe" className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
<<<<<<< HEAD
     <div className="d-md-none">
                <TeamSmall/>
            </div>
              <div className="d-none d-md-block">
                <TeamLarge />
            </div>
=======
      <div className="d-md-none">
        <TeamSmall />
      </div>
      <div className="d-none d-md-block">
        <TeamLarge />
      </div>
>>>>>>> main
    </section>
  )
}

export default Team