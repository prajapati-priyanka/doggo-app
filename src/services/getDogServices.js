import axios from "axios";

const getAllDogsList = async (setAllDogs) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    if (response.status === 200) {
      console.log(response)
    setAllDogs(response.data.message)
    } else {
      throw new Error("Request Failed, Can't get Data");
    }
  } catch (error) {
    console.error(error);
  }
};

export { getAllDogsList };
