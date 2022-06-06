import { Dispatch } from "redux";
import {
  completeTaskQuery,
  createTaskQuery,
  deleteTaskQuery,
  getTasksQuery,
} from "../request/queries";
import { ITasks } from "../request/interfaces";
import { graphRequest } from "../request/request";

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
  const tasks = await graphRequest(getTasksQuery());
  dispatch(setTasks(tasks));
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
    const response = await graphRequest(createTaskQuery(title));
    dispatch(setAddedTask(response));
  };

export const completeTask =
  (id: number): any =>
  async (dispatch: Dispatch<any>) => {
    const success = await graphRequest(completeTaskQuery(id));
    if (success) dispatch(getTasks());
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
    const success = await graphRequest(deleteTaskQuery(id));
    if (success) dispatch(deleteTaskAction(id));
  };

export default settingsReducer;
