export interface ITasks {
  id: number;
  done: boolean;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface getTasksPropsPut {}

export type getTasksPropsOut = createTasksPropsOut;

// export type getCurrentTemplatePropsPut = createTemplatesPropsPut

// export type getCurrentTemplatePropsOut = createTemplatesPropsOut[]


export type addTaskPropsPut = createTaskPropsPut;

export type addTaskPropsOut = createTasksPropsOut;

export type completeTaskPropsPut = createTaskPropsPut;

export type completeTaskPropsOut = createTasksPropsOut[];

export type deleteTaskPropsPut = createTaskPropsPut

export type deleteTaskPropsOut = createTasksPropsOut[]

// export interface createTemplatesPropsPut {
//   currentVendorName?: string
//   template?: ITemplate
//   template_type?: string
// }

export interface createTasksPropsOut {
  // success?: boolean
  // data?: any
  // error?: string
  a: string;
}

export interface createTaskPropsPut {
  title?: string;
  id?: number;
}

// export type uploadFilePropsPut = createUploadFilePropsPut

// export type uploadFilePropsOut = createUploadFilePropsOut[]

// export interface createUploadFilePropsPut {
//   file: any
//   template: string
// }

// export interface createUploadFilePropsOut {
//   // [key: string]: string
//   success?: boolean
// }

// // Settings

// export type getSettingsPropsPut = createSettingsPropsPut
// export type getSettingsPropsOut = createSettingsPropsOut

// export type saveSettingsPropsPut = createSettingsPropsPut
// export type saveSettingsPropsOut = createSettingsPropsOut

// export interface createSettingsPropsPut {
//   pageName?: string
//   settings?: any
// }

// export interface createSettingsPropsOut {
//   // [key: string]: string
//   success?: boolean
// }

// // Automatic import

// export type getTasksPropsPut = createAutomaticPropsPut
// export type getTasksPropsOut = createAutomaticPropsOut

// export type addTaskPropsPut = createAutomaticPropsPut
// export type addTaskPropsOut = createAutomaticPropsOut

// export type deleteTaskPropsPut = createAutomaticPropsPut
// export type deleteTaskPropsOut = createAutomaticPropsOut

// export type updateTaskPropsPut = createAutomaticPropsPut
// export type updateTaskPropsOut = createAutomaticPropsOut

// export type pauseJobPropsPut = createAutomaticPropsPut
// export type pauseJobPropsOut = createAutomaticPropsOut

// export type resumeJobPropsPut = createAutomaticPropsPut
// export type resumeJobPropsOut = createAutomaticPropsOut

// export type startImmediatelyJobPropsPut = createAutomaticPropsPut
// export type startImmediatelyJobPropsOut = createAutomaticPropsOut

// export interface createAutomaticPropsOut {
//   success?: boolean
// }
