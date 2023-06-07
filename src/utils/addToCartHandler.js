import axios from "axios";

export const addToCartHandler = async (products, dataDispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `/api/user/cart`,
      { products },
      {
        headers: {
          authorization: encodedToken,
        },
      });
      if(status===201){
        dataDispatch({
          type: "SET_CART",
          payload: data?.cart,
        });
      }
    
      
   
  } catch (error) {
    console.error(error);
  }
};