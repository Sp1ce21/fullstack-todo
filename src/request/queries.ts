export const getTasksQuery = () => ({
  name: "getTasks",
  query: `
  query {
    getTasks {
      id title done createdAt updatedAt
    }
  }
`,
});

export const createTaskQuery = (title: string) => ({
  name: "createTask",
  query: `
  mutation{
    createTask(task: {title: "${title}"}){
      id title done createdAt updatedAt 
    }
  }
  `,
});

export const completeTaskQuery = (id: number) => ({
  name: "completeTask",
  query: `
  mutation{
    completeTask(id: "${id}")
  }
  `,
});

export const deleteTaskQuery = (id: number) => ({
  name: "deleteTask",
  query: `
  mutation{
    deleteTask(id: "${id}")
  }
  `,
});
