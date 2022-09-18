import { useEffect, useState } from "react";

import BreedListingStyles from "./BreedListingPage.module.css";

import { BreedCard } from "../../components";

import { getAllBreedsList } from "../../services";

const BreedListing = () => {
  const [allBreeds, setAllBreeds] = useState({});

  useEffect(() => {
    getAllBreedsList(setAllBreeds);
  }, []);

  return (
    <div className={BreedListingStyles.mainContainer}>
      {Object.keys(allBreeds).map((breed, index) => (
        <BreedCard breed={breed} subBreed={allBreeds[breed]} key={index} />
      ))}
    </div>
  );
};

export { BreedListing };
