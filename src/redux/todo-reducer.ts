import { Dispatch } from "redux";
import {
  addTaskRequest,
  completeTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
} from "../request/api";
import { ITasks } from "../request/interfaces";

const SET_TASKS = "SET_TASKS";
const SET_ADDED_TASK = "SET_ADDED_TASK";
const DELETE_TASK = "DELETE_TASK";

const initialState = {
  tasks: [] as ITasks[],
};

export type initialStateType = typeof initialState;

type actionsTypes = {
  type: string;
  tasks: ITasks[];
  addedTask: ITasks;
  id: number;
};

const settingsReducer = (
  state = initialState,
  action: actionsTypes
): initialStateType => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case SET_ADDED_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.addedTask],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task: ITasks) => +task.id !== +action.id),
        ],
      };
    default:
      return state;
  }
};

type TasksType = {
  type: typeof SET_TASKS;
  tasks: ITasks[];
};
export const setTasks = (tasks: ITasks[]): TasksType => ({
  type: SET_TASKS,
  tasks,
});

export const getTasks = (): any => async (dispatch: Dispatch<TasksType>) => {
  const response: any = await getTasksRequest({});
  dispatch(setTasks(response));
};

type addedTaskType = {
  type: typeof SET_ADDED_TASK;
  addedTask: ITasks;
};

export const setAddedTask = (addedTask: ITasks): addedTaskType => ({
  type: SET_ADDED_TASK,
  addedTask,
});

export const addTask =
  (title: string): any =>
  async (dispatch: Dispatch<addedTaskType>) => {
    const response: any = await addTaskRequest({ title });
    dispatch(setAddedTask(response.task));
  };

export const completeTask =
  (id: number): any =>
  async (dispatch: any) => {
    await completeTaskRequest({ id });
    dispatch(getTasks());
  };

type deleteTaskType = {
  type: typeof DELETE_TASK;
  id: number;
};

export const deleteTaskAction = (id: number): deleteTaskType => ({
  type: DELETE_TASK,
  id,
});

export const deleteTask =
  (id: number): any =>
  async (dispatch: Dispatch<deleteTaskType>) => {
    await deleteTaskRequest({ id });
    dispatch(deleteTaskAction(id));
  };

export default settingsReducer;
