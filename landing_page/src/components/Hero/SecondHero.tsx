import SmallSecondSection from "./subcomponents-hero/SecondHero/SectionComponentSmallSecondHero";
import LargeSecondHero from "./subcomponents-hero/SecondHero/SectionComponentLgSecondHero";
//css
import "./SecondHero.css";
const SecondHero = () => {
    return (
        <section id="Sobre" className="d-grid row-cols-1 w-100 overflow-hidden text-white py-4 px-4">
            <div className="d-md-none">
                <SmallSecondSection />
            </div>
            <div className="d-none d-md-block">
                <LargeSecondHero />
            </div>
        </section>
    )
}

export default SecondHero