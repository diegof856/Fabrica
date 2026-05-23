import diego from "../../../assets/Team_photos/Diego.jpg"
import klismans from "../../../assets/Team_photos/Klismans.jpg"
import { RiUserLine } from "react-icons/ri";
//context
import { useContext } from "react";
import { CheckImageContext } from "../../../context/CheckImageContext"
export const TeamComponent = () => {
    const { renderImg } = useContext(CheckImageContext);
      const info = [
    { photo: klismans, name:"Klimsnas Nazário",title: "Technical Writer (TW)",
     qualification_1: "Documentação Técnica", 
        qualification_2: "Arquitetura da Informação",qualification_3: "UX Writing",
        qualification_4: "Simplificação de Complexidade"
    },
     { photo: diego, name:"Diego Felipe",title: "Software Engineer",
     qualification_1: "Lógica e Estrutura de Dadosr", 
        qualification_2: "Desenvolvimento Backend",qualification_3: "Arquitetura de Software",
        qualification_4: "Integração de APIs"
    },
     { photo: RiUserLine, name:"Wanderllan Santos",title: "Designer",
     qualification_1: "UX", 
        qualification_2: "Website Design",qualification_3: "Prototipagem e Wireframing",
        qualification_4: "Design Responsivo"
    },
     { photo: RiUserLine, name:"João Victor",title: "Quality Assurance",
     qualification_1: "Testes Automatizados", 
        qualification_2: "Testes de Usabilidade",qualification_3: "Identificação e Análise de Bugs",
        qualification_4: "Garantia de Critérios de Aceite"
    },
  ]

  return (
   <article>
<ul className="list-unstyled">
    {info.map((obj,index)=> (
        <li key={index} className="mb-3">
           <div className="avatar-wrapper">
  <div className="avatar-inner">
    {renderImg(obj.photo, { size: 80, alt: "Foto do integrante da equipe" })}
  </div>
</div>
            <div>

            </div>
        </li>
    )) }
</ul>

   </article>
  )
}
