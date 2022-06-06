import axios from "axios";
import { IGraphRequest } from "./interfaces";

export const graphRequest = async ({ query, name }: IGraphRequest) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/graphql`,
    { query },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data[name];
};
