import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import BreedDetailsStyles from "./BreedDetailsPage.module.css";

const BreedDetails = () => {
  const [res, setRes] = useState(null);
  const location = useLocation();
  const segments = location.pathname.split("/");
  const breed = segments[segments.length - 2];
  const subBreed = segments[segments.length - 1];

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
      .then((d) => d.json())
      .then((resp) => setRes(resp));
  }, []);
  return (
    <div className={BreedDetailsStyles.subBreedContainer}>
     
      <img
        src={res?.message}
        alt="dog"
        className={BreedDetailsStyles.subBreedImage}
      />
       <h5 className={BreedDetailsStyles.subBreedName}>{subBreed}</h5>
    </div>
  );
};

export { BreedDetails };
