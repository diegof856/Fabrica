import type { TeamMember } from "../../../interfaces/TeamMember";
interface QualificationsProps {
  obj: TeamMember;
  index: number;
  isIntersecting: boolean;
}
const QualificationsTeamComponent = ({ obj, index, isIntersecting }: QualificationsProps) => {
  return (
   <div className="text-white qualification-section-width">
          <h4 className="poppins-semibold  color-blue-text text-paragraph-size m-0">{obj.name}</h4>
          <h2 className="poppins-bold mb-1 fs-6">{obj.title}</h2>
       {[0, 1, 2, 3].map((i) => (
  <div key={i} className="d-flex flex-column">
    <p className="poppins-semibold text-paragraph-size m-0">
   {obj[`qualification_${i + 1}` as keyof TeamMember] as string}
    </p>
    <div className="line-track">
      <span
        className={`line ${obj.levels[i]}`}
        style={{ animationDelay:isIntersecting? `${i * 0.5 + 1.2 + (index * 0.2)}s`:'0' }}
      ></span>
    </div>
  </div>
))}
      
             
            </div>
  )
}

export default QualificationsTeamComponent