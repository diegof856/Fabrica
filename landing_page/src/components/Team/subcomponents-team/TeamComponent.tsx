//img
import diego from "../../../assets/Team_photos/Diego.jpg"
import klismans from "../../../assets/Team_photos/Klismans.jpg"
import { RiUserLine } from "react-icons/ri";

// Hooks necessários
import { useContext, useEffect, useState, useRef } from "react";
import { CheckImageContext } from "../../../context/CheckImageContext"

//interfaces
import type { TeamMember } from "../../../interfaces/TeamMember";
//components
import QualificationsTeamComponent from "./QualificationsTeamComponent";
export const TeamComponent = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLUListElement>(null);
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
      photo: RiUserLine, name: "Wanderllan Santos", title: "Designer",
      qualification_1: "UX",
      qualification_2: "Website Design", qualification_3: "Prototipagem e Wireframing",
      qualification_4: "Design Responsivo",
      levels: ["line-lg", "line-full", "line-sm", "line-md"]
    },
    {
      photo: RiUserLine, name: "João Victor", title: "Quality Assurance",
      qualification_1: "Testes Automatizados",
      qualification_2: "Testes de Usabilidade", qualification_3: "Identificação e Análise de Bugs",
      qualification_4: "Garantia de Critérios de Aceite",
      levels: ["line-md", "line-sm", "line-full", "line-lg"]
    },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <article>
      <ul ref={containerRef} className="list-unstyled">
        {info.map((obj, index) => (
          <li key={index} className={`mb-3 d-flex gap-2 align-items-center ${isIntersecting ? 'animate-item' : 'initial-state'}`} style={{ animationDelay: isIntersecting ? `${index * 0.15}s` : '0s' }}>
            <div className="avatar-wrapper">
              <div className="avatar-inner">
                {renderImg(obj.photo, { size: 80, alt: "Foto do integrante da equipe" })}
              </div>
            </div>
            <QualificationsTeamComponent
              obj={obj}
              index={index}
              isIntersecting={isIntersecting}
            />
          </li>
        ))}
      </ul>

    </article>
  )
}
