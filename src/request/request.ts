import axios from "axios";
import { IGraphRequest } from "./interfaces";

const API =
  process.env.NODE_ENV === "production"
    ? "https://yourapp.herokuapp.com/api"
    : process.env.REACT_APP_API_URL;

export const graphRequest = async ({ query, name }: IGraphRequest) => {
  const response = await axios.post(
    `${API}/graphql`,
    { query },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data[name];
};
