//images
import globeConnection from "../../assets/Connected-world.svg";
//css
import "./SecondHero.css";
const SecondHero = () => {
    return (
        <section className="d-grid row-cols-1 w-100 overflow-hidden text-white py-4 px-4">
            <article>
                <div> <h3 className="second-hero-text-blue poppins-semibold">Bem-vindo à Nazatech</h3>
                </div>
                <div className="texts-development-innovations-connections">
                    <h2 className="poppins-bold ">Desenvolvendo</h2>
                        <h2 className="poppins-bold ">Soluções inovadoras,</h2>
                        <h2 className="poppins-bold ">conexões reais.</h2>
                </div>
                <div>
                    <p className="poppins-regular text-formatting text-paragraph-size">Tecnologia voltada para o futuro do trabalho e da economia colaborativa. Sempre acreditando que a tecnologia deve servir para aproximar pessoas e facilitar o dia a dia.</p>
                </div>

            </article>
            <article className="d-flex w-100">
<img src={globeConnection} alt="imagem de um globo e pessoas se conectando entre si" className="img-fluid" />
            </article>
        </section>
    )
}

export default SecondHero