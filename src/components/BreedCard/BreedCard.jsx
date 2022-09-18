import BreedCardStyles from "./BreedCard.module.css";
import {useNavigate} from "react-router-dom";

const BreedCard = ({breed, subBreed}) => {

    const navigate = useNavigate();

    const clickHandler = ()=>{
     if(Array.isArray(subBreed) && subBreed.length === 0){
        return alert("no sub breed");
     }

     navigate("/breeddetails/" + breed + "/" + subBreed[Math.floor((Math.random()*subBreed.length))])
    }
   
    return ( 

        <div className={BreedCardStyles .allBreedContainer} onClick= {clickHandler}>
            <p className={BreedCardStyles .breedName}>{breed}</p>
        </div>

     );
}
 
export {BreedCard};
