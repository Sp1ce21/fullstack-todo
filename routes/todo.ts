const { Router } = require("express");
const Todo = require("../models/todo.ts");
const router = Router();

// Get tasks list
router.get("/", async (req, res) => {
  try {
    const tasks = await Todo.findAll();
    res.status(200).json(tasks);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Add new task
router.post("/", async (req, res) => {
  try {
    const task = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ task });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Change
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    todo.done = true;
    await todo.save();
    res.status(200).json(todo);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByPk(+req.params.id);
    await todo.destroy();
    res.status(204).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
