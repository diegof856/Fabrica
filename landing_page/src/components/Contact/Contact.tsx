import "./Contact.css"
import ContactLarge from "./subcomponents-contact/ContactLarge"
import ContactMedium from "./subcomponents-contact/ContactMedium"
import ContactSmall from "./subcomponents-contact/ContactSmall"
const Contact = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
      <div className="d-md-none">
        <ContactSmall />
      </div>
       <div className="d-none d-md-block d-lg-none">
        <ContactMedium />
      </div>
      <div className="d-none d-lg-block">
        <ContactLarge />
      </div>
    </section>
  )
}

export default Contact