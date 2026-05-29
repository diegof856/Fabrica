import iconWebDesign from "../../../assets/web-design.svg";
import iconAppDesign from "../../../assets/app -design.svg";
import iconGraphicDesign from "../../../assets/graphic-design.svg";
import { RiPagesLine } from "react-icons/ri";
//context
import { useContext } from "react";
import { CheckImageContext } from "../../../context/CheckImageContext"
const ServicoComponent = () => {
  const { renderImg } = useContext(CheckImageContext);
  const info = [
    { icon: iconWebDesign, title: "Web Design", description: "Desenvolvemos sites e plataformas web responsivas, modernas e de alta performance, projetadas para destacar sua marca no ambiente digital." },
    { icon: iconAppDesign, title: "App Design", description: "Projetamos soluções e aplicativos mobile funcionais, unindo design estrutural e navegabilidade de ponta para entregar a melhor experiência na palma da mão." },
    { icon: RiPagesLine, color: "#487cecd5", title: "UI/UX", description: "Desenvolvemos soluções digitais completas para impulsionar o seu negócio com tecnologia de ponta e design inovador." },
    { icon: iconGraphicDesign, title: "Graphic Design", description: "Criamos identidades visuais marcantes e peças gráficas que transmitem a essência, o profissionalismo e a autoridade da sua marca no mercado." },
  ]
  return (
    <article>
      <ul className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 list-unstyled g-3 w-100 m-0 p-0">
        {info.map((obj, index) => (
          <li key={index} className="col mt-3">
            <div className="bg-white p-3 h-100 d-flex flex-column gap-2 rounded">
              <div className="icon-container">
                {renderImg(obj.icon, { className: "icons-services", alt: "icones que representam os serviços da empresa", color: obj.color })}
              </div>
              <h3 className="poppins-semibold m-0 small text-dark">{obj.title}</h3>
              <p className="poppins-regular text-paragraph-size text-dark ">{obj.description}</p>
            </div>

          </li>
        ))}
      </ul>
    </article>
  )
}

export default ServicoComponent