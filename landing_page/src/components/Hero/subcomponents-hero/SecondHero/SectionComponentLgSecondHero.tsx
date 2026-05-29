//images
import globeConnection from "../../../../assets/Connected-world.svg";
const SectionComponentLgSecondHero = () => {
    return (
        <div className="row g-3">
            <article className="col-6 d-flex flex-column justify-content-center">
                <div> <h3 className="second-hero-text color-blue-text  poppins-semibold">Bem-vindo à Nazatech</h3>
                </div>
                <div className="texts-development-innovations-connections">
                    <h2 className="poppins-bold ">Desenvolvendo</h2>
                    <h2 className="poppins-bold ">Soluções inovadoras,</h2>
                    <h2 className="poppins-bold ">conexões reais.</h2>
                </div>
                <div>
                    <p className="poppins-regular  fs-5">Tecnologia voltada para o futuro do trabalho e da economia colaborativa. Sempre acreditando que a tecnologia deve servir para aproximar pessoas e facilitar o dia a dia.</p>
                </div>

            </article>
            <article className="col-6">
                <img src={globeConnection} alt="imagem de um globo e pessoas se conectando entre si" className="img-fluid" />
            </article>
        </div>
    )
}

export default SectionComponentLgSecondHero