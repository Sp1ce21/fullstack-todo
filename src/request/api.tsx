import { AuthorizedRequest, request } from "../shared/lib/request";
import * as interfaces from "./interfaces";

export const getTasksRequest = ({
  token,
}: AuthorizedRequest<interfaces.getTasksPropsPut>): Promise<interfaces.getTasksPropsOut> =>
  request(
    {
      url: `/todo`,
      method: "GET",
    },
    token
  );

export const addTaskRequest = ({
  token,
  title,
}: AuthorizedRequest<interfaces.addTaskPropsPut>): Promise<interfaces.addTaskPropsOut> =>
  request(
    {
      url: `/todo`,
      method: "POST",
      body: { title },
    },
    token
  );

export const completeTaskRequest = ({
  token,
  id,
}: AuthorizedRequest<interfaces.completeTaskPropsPut>): Promise<interfaces.completeTaskPropsOut> =>
  request(
    {
      url: `/todo/${id}`,
      method: "PUT",
    },
    token
  );

export const deleteTaskRequest = ({
  token,
  id,
}: AuthorizedRequest<interfaces.deleteTaskPropsPut>): Promise<interfaces.deleteTaskPropsOut> =>
  request(
    {
      url: `/todo/${id}`,
      method: "DELETE",
    },
    token
  );
