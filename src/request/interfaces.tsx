export interface ITasks {
  id: number;
  done: boolean;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface getTasksPropsPut {}

export type getTasksPropsOut = ITasks[];

export type addTaskPropsPut = createTaskPropsPut;

export type addTaskPropsOut = createTasksPropsOut;

export type completeTaskPropsPut = createTaskPropsPut;

export type completeTaskPropsOut = createTasksPropsOut[];

export type deleteTaskPropsPut = createTaskPropsPut;

export type deleteTaskPropsOut = createTasksPropsOut[];

export interface createTasksPropsOut {
  task: ITasks;
}

export interface createTaskPropsPut {
  title?: string;
  id?: number;
}
