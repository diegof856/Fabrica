import Carga_descarga from "../../assets/Works/Bico_digital/Carga_descarga.png";
import Encanador from "../../assets/Works/Bico_digital/Encanador.jpg";
import TrocaLampada from "../../assets/Works/Bico_digital/Troca-lampada.png";
const BicoDigital = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
      <article className="text-white ">
        <h2 className="poppins-semibold m-0 text-center">BicoDigital</h2>
        <p className="text-paragraph-size poppins-regular text-formatting mt-2">Desenvolvemos uma plataforma para você conseguir aquela grana extra.</p>
      </article>
      <article className="text-white">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="color-blue-text poppins-bold fs-5">100+ Trabalhos em Sua região</h2>
          <p className="text-paragraph-size poppins-regular text-formatting mt-2 ">
            Encontre o Trabalho ideal para você e faça uma renda extra.
          </p>
        </div>
        <div className="row justify-content-center align-items-center g-1 ">
          <div className="col-4">
            <img
              src={Carga_descarga}
              alt="Imagem que representa um homem descarregando alguma carga"
              className="img-fluid"
            />
          </div>

          <div className="col-4">
            <img
              src={Encanador}
              alt="Imagem que representa um encanador exercendo o seu trabalho"
              className="img-fluid"
            />
          </div>

          <div className="col-4">
            <img
              src={TrocaLampada}
              alt="Imagem que representa uma pessoa trocando uma lampada"
              className="img-fluid"
            />
          </div>

        </div>
      </article>
    </section>
  )
}

export default BicoDigital