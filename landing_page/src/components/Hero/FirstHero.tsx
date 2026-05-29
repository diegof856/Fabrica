import SectionComponentSmallPrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentSmallPrimaryHero";
import SectionComponentLargePrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentLargePrimaryHero";
import SectionComponentMediumPrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentMediumPrimaryHero "
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
    <section className="d-grid grid-cols-1 grid-cols-lg-2 w-100 overflow-hidden gap-4 align-items-center">
    <div className="d-md-none">
        <SectionComponentSmallPrimaryHero />
      </div>
      <div className="d-none d-md-block d-lg-none">
        <SectionComponentMediumPrimaryHero />
      </div>
    <div className="d-none d-lg-block">
        <SectionComponentLargePrimaryHero />
      </div>
     
    </section>
  )
}

export default FirstHero