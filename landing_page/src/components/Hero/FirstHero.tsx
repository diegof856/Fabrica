import SectionComponentSmallPrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentSmallPrimaryHero";
import SectionComponentLargePrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentLargePrimaryHero";
import SectionComponentMediumPrimaryHero from "./subcomponents-hero/PrimaryHero/SectionComponentMediumPrimaryHero "
//css
import "./FirstHero.css";
const FirstHero = () => {
  return (
<<<<<<< HEAD
    <section id="Inicio" className="d-grid grid-cols-1 grid-cols-lg-2 w-100 overflow-hidden gap-4 align-items-center px-4">
    <div className="d-md-none">
=======
    <section id="Inicio" className="d-grid grid-cols-1 grid-cols-lg-2 w-100 overflow-hidden gap-4 align-items-center">
      <div className="d-md-none">
>>>>>>> main
        <SectionComponentSmallPrimaryHero />
      </div>
      <div className="d-none d-md-block d-lg-none">
        <SectionComponentMediumPrimaryHero />
      </div>
<<<<<<< HEAD
=======
      <div className="d-none d-lg-block">
        <SectionComponentLargePrimaryHero />
      </div>
>>>>>>> main

    </section>
  )
}

export default FirstHero