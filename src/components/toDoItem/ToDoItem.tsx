import React, { FC, useEffect, useState } from "react";
import { ITasks } from "../../request/interfaces";
import CustomCheckbox from "../input/CustomCheckbox";
import { Column, DateStyle, DeleteIcon, Row, Task } from "./style";

interface IToDoItem {
  task: ITasks;
  complete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const ToDoItem: FC<IToDoItem> = ({ task, complete, deleteTask }) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    if (task.createdAt) {
      const taskDate: string[] = [...task.createdAt.toString()];
      const taskDateString = taskDate.slice(0, 10).join("");
      const taskDateFormatted = taskDateString.split("-").reverse().join(":");
      setDate(taskDateFormatted);
    }
  }, [task]);
  return (
    <Row>
      <CustomCheckbox checked={task.done} complete={() => complete(task.id)} />
      <Column isDone={task.done}>
        <Task isDone={task.done}>{task.title}</Task>
        <DateStyle>Added: {date}</DateStyle>
      </Column>
      <DeleteIcon onClick={() => deleteTask(task.id)}>Delete</DeleteIcon>
    </Row>
  );
};

export default ToDoItem;
