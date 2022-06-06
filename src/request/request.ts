import axios from "axios";
import { IGraphRequest } from "./interfaces";

export const graphRequest = async ({ query, name }: IGraphRequest) => {
  const response = await axios.post(
    `https://yourapp.herokuapp.com/api/graphql`,
    { query },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data[name];
};
