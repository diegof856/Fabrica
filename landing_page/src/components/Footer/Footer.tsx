const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="d-flex flex-column align-items-center text-center w-100 overflow-hidden px-4 mt-4 text-white ">
      <h5 className="poppins-bold small">NazaTech</h5>
      <p className="text-paragraph-size">&copy; {anoAtual} Nazatech. All rights reserved.</p>
    </footer>
  )
}

export default Footer