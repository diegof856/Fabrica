import StartBodySvg from "../../HelperSvg/StarBodySvg";
import StartBodySmallSvg from "../../HelperSvg/StarBodySmallSvg";
const StarBodyComponent = () => {
  return (
    <div className="d-flex flex-column bg-svg-element svg-star-three">
 <div className="d-flex justify-content-center gap-5 ">
     <StartBodySvg/>
    <StartBodySmallSvg/>
 </div>
 <div className="d-flex justify-content-center">
   <StartBodySmallSvg/>
 </div>
   
    </div>
  )
}

export default StarBodyComponent