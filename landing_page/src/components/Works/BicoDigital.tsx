import BicoDigitalLarge from "./subcomponents-works/BicoDigitalLarge"
import BicoDigitalSmall from "./subcomponents-works/BicoDigitalSmall"

const BicoDigital = () => {
  return (
    <section className="d-grid row-cols-1 w-100 overflow-hidden px-4 mt-4">
      <div className="d-md-none">
        <BicoDigitalSmall />
      </div>
      <div className="d-none d-md-block">
        <BicoDigitalLarge />
      </div>
    </section>
  )
}

export default BicoDigital