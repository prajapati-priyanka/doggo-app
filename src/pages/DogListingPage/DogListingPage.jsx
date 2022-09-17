import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import DogListingStyles from "./DogListingPage.module.css";
import axios from "axios";
import { DogCard } from "../../components";
import { useDogs } from "../../context";
import {getAllDogsList} from "../../services";

const DogListing = () => {

const {allDogs, setAllDogs} = useDogs();



  useEffect(() => {
    getAllDogsList(setAllDogs);
   
   

  }, []);



  return (
    <div className={DogListingStyles.mainContainer}>
      {Object.keys(allDogs).map((dog, index) => (
        <DogCard dog={dog} key={index}  />
      ))}
    </div>
  );
};

export { DogListing };
