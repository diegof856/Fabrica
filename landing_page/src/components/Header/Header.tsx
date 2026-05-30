import Nav from "../../components/Header/Nav"
import "./Header.css"
const Header = () => {
  return (
    
    <section className="d-flex flex-column justify-content-center align-items-center w-100 sticky-top z-3 bg_header">
      
      <div className="d-flex justify-content-center  align-items-center px-5 py-2 my-2 w-100  gap-5" >
       
        <a className="poppins-bold text-white mb-0 text-decoration-none fs-4" href="#">
          NazaTech
        </a>
  
        <div className="d-none d-lg-flex">
          <Nav />
        </div>

      </div>
      
  
    </section>
  )
}

export default Header