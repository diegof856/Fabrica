import Nav from "../../components/Header/Nav"

const Header = () => {
  return (
    
    <section className="d-flex flex-column justify-content-center align-items-center w-100">
      
      <div className="d-flex justify-content-center justify-content-lg-between align-items-center px-4 py-2 my-2 w-100 sticky-top bg-dark gap-4 z-3 " >
       
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