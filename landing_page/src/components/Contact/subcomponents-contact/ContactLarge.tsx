

const ContactLarge = () => {
  return (
    <div>
      <article className="text-white ">
        <h2 className="poppins-semibold m-0 text-center fs-5">Entre em contato conosco</h2>
        <p className="small poppins-regular text-formatting mt-2 text-center">Transforme suas ideias em soluções digitais com tecnologia e confiança.</p>
      </article>
      <article className="d-flex justify-content-center align-items-center gap-2 py-2 w-100">
        <div className="d-flex justify-content-center align-items-center gap-2 py-2 w-25">
          <input type="text" className="input-send-message" placeholder="Digite sua mensagem" autoComplete="off" />
          <input type="button" value="Enviar" className="btn text-white" />
        </div>

      </article>
    </div>
  )
}

export default ContactLarge