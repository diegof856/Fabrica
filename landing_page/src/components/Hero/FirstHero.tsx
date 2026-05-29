import SectionComponentSmallPrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentSmallPrimaryHero";
import SectionComponentLargePrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentLargePrimaryHero";
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
    <section id="Inicio" className="d-grid grid-cols-1 grid-cols-lg-2 w-100 overflow-hidden gap-4 align-items-center px-4">
    <div className="d-md-none">
        <SectionComponentSmallPrimaryHero />
      </div>
      <div className="d-none d-md-block">
 <SectionComponentLargePrimaryHero/>
      </div>

    </section>
  )
}

export default FirstHero