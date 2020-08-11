import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const createUserOperation = (user) => async (dispatch) => {
  try {
    const result = await axios.post("/users/signup", user);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const loginUserOperation = (user) => async (dispatch) => {
  try {
    const result = await axios.post("/users/login", user);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
