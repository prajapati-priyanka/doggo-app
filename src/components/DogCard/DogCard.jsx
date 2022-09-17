import DogCardStyles from "./DogCard.module.css";
import {useNavigate} from "react-router-dom";

const DogCard = ({dog,id}) => {

    const navigate = useNavigate();
   
    return ( 

        <div className={DogCardStyles.dogContainer} onClick= {()=> navigate("/dogdetails")}>
            <p className={DogCardStyles.dogName}>{dog}</p>
        </div>

     );
}
 
export {DogCard};