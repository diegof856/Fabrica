import SectionComponentSmallPrimaryHero from "./subcomponents-hero/SectionComponentSmallPrimaryHero";
import SectionComponentLargePrimaryHero from "./subcomponents-hero/SectionComponentLargePrimaryHero";
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
    <section className="d-grid grid-cols-1 grid-cols-lg-2 w-100 overflow-hidden gap-4 align-items-center">
    <div className="d-block d-md-none">
        <SectionComponentSmallPrimaryHero />
      </div>
      <SectionComponentLargePrimaryHero/>
    </section>
  )
}

export default FirstHero