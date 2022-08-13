import Axios from "axios";

export const dogFetch = async (setState) => {
 await Axios.get(
    "https://api.thedogapi.com/v1/breeds"
  ).then((response) => {
    setState(response.data);
  });
};
