import smallGear from "../../../assets/gear_small.svg";
import bigGear from "../../../assets/gear_big.svg";
const GearComponent = () => {
  return (
   <div className="d-flex gears">
       <div className="d-flex justify-content-end ">
        <img src={smallGear} alt="imagem pequena de uma engrenagem" className="small-gear"  />
       </div>
       <div className="d-flex ms-3">
          <img src={bigGear} alt="imagem grande de uma engrenagem"  className="big-gear"/>
       </div>
  </div>
  )
}

export default GearComponent