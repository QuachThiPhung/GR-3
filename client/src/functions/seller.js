import axios from "axios";

export const getProductsByCountCurrentUser = async (count, authtoken) => 
  await axios.get(`${process.env.REACT_APP_API}/products-created/${count}`, {
    headers: {
      authtoken,
    },
  });