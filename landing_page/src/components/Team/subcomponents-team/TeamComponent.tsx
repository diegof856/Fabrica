//img
import diego from "../../../assets/Team_photos/Diego.jpg"
import klismans from "../../../assets/Team_photos/Klismans.jpg"
import joao from "../../../assets/Team_photos/João.png";
import wanderllan from "../../../assets/Team_photos/Wanderllan.jpg.jpeg"
//img

// Hooks necessários
import { useContext } from "react";
import { CheckImageContext } from "../../../context/CheckImageContext"

//interfaces
import type { TeamMember } from "../../../interfaces/TeamMember";
//components
import QualificationsTeamComponent from "./QualificationsTeamComponent";
export const TeamComponent = () => {

  const { renderImg } = useContext(CheckImageContext);
  const info: TeamMember[] = [
    {
      photo: klismans, name: "Klimsnas Nazário", title: "Technical Writer (TW)",
      qualification_1: "Documentação Técnica",
      qualification_2: "Arquitetura da Informação", qualification_3: "UX Writing",
      qualification_4: "Simplificação de Complexidade",
      levels: ["line-sm", "line-md", "line-lg", "line-full"]
    },
    {
      photo: diego, name: "Diego Felipe", title: "Software Engineer",
      qualification_1: "Lógica e Estrutura de Dados",
      qualification_2: "Desenvolvimento Backend", qualification_3: "Arquitetura de Software",
      qualification_4: "Integração de APIs",
      levels: ["line-full", "line-md", "line-sm", "line-lg"]
    },
    {
      photo: wanderllan, name: "Wanderllan Santos", title: "Designer",
      qualification_1: "UX",
      qualification_2: "Website Design", qualification_3: "Prototipagem e Wireframing",
      qualification_4: "Design Responsivo",
      levels: ["line-lg", "line-full", "line-sm", "line-md"]
    },
    {
      photo: joao, name: "João Victor", title: "Quality Assurance",
      qualification_1: "Testes Automatizados",
      qualification_2: "Testes de Usabilidade", qualification_3: "Identificação e Análise de Bugs",
      qualification_4: "Garantia de Critérios de Aceite",
      levels: ["line-md", "line-sm", "line-full", "line-lg"]
    },
  ]
 
  return (
    <article>
      <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {info.map((obj, index) => (
          <li key={index} className={`mb-3 d-flex gap-2 align-items-center `} style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                {renderImg(obj.photo, { size: 80, alt: "Foto do integrante da equipe" })}
              </div>
            </div>
            <QualificationsTeamComponent
              obj={obj}
              index={index}
              isIntersecting={true}
            />
          </li>
        ))}
      </ul>

    </article>
  )
}
