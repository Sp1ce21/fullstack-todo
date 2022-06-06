const Todo = require("../models/todo.ts");

module.exports = {
  async getTasks() {
    try {
      return await Todo.findAll();
    } catch (error) {
      console.log(error);
    }
  },
  async createTask({ task }) {
    try {
      return await Todo.create({
        title: task.title,
        done: false,
      });
    } catch (e) {
      throw new Error("Title is required");
    }
  },
  async completeTask({ id }) {
    try {
      const task = await Todo.findByPk(id);
      task.done = true;
      await task.save();
      return true;
    } catch (error) {
      throw new Error("Id is required");
      return false;
    }
  },
  async deleteTask({ id }) {
    try {
      const tasks = await Todo.findAll({
        where: { id },
      });
      await tasks[0].destroy();
      return true;
    } catch (error) {
      throw new Error("Id is required");
      return false;
    }
  },
};
