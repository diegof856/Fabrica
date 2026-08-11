//css
import "./Service.css"
import ServiceComponentLarge from "./subcomponents-service/ServiceComponentLarge"
import ServiceComponentSamll from "./subcomponents-service/ServiceComponentSmall"
//components

const Service = () => {
  return (
<<<<<<< HEAD
   <section id="Serviços" className="d-grid row-cols-1 w-100 overflow-hidden px-4">
     
    <div className="d-md-none">
                < ServiceComponentSamll/>
            </div>
=======
    <section id="Serviços" className="d-grid row-cols-1 w-100 overflow-hidden px-4">
>>>>>>> main

      <div className="d-md-none">
        < ServiceComponentSamll />
      </div>

      <div className="d-none d-md-block">
        < ServiceComponentLarge />
      </div>
    </section>
  )
}

export default Service