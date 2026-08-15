import "./Contact.css"

const Contact = () => {
  return (
 <section id="Contact" className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
    <article className="text-white">
            <h2 className="poppins-semibold m-0 text-center">Entre em contato conosco</h2>
    <p className="text-paragraph-size poppins-regular text-formatting mt-2 text-white">Entre em contato com nossa equipe e descubra como podemos transformar suas ideias em soluções digitais eficientes e inovadoras. Estamos prontos para ajudar você a alcançar melhores resultados com tecnologia e confiança.</p>
    </article>
    <article className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 contact-form-wrapper">
        <input type="text" className="input-send-message" placeholder="Digite sua mensagem" autoComplete="off"/>
        <input type="button" value="Enviar" className="btn text-white" />
    </article>



 </section>
  )
}

export default Contact