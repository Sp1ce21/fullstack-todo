import React, { FC } from "react";
import { ITasks } from "../../request/interfaces";
import ToDoItem from "../toDoItem/ToDoItem";
import { NoItems, Title, ToDoBlock, ToDoListStyle } from "./style";

interface IToDoList {
  tasks: ITasks[];
  complete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const ToDoList: FC<IToDoList> = ({ tasks, complete, deleteTask }) => {
  return (
    <ToDoBlock>
      <Title>Your tasks</Title>
      <ToDoListStyle>
        {tasks.length ? (
          tasks.map((elem: ITasks) => (
            <ToDoItem
              task={elem}
              key={elem.id}
              complete={(id: number) => complete(id)}
              deleteTask={(id: number) => deleteTask(id)}
            />
          ))
        ) : (
          <NoItems>There are not any tasks, add new one!</NoItems>
        )}
      </ToDoListStyle>
    </ToDoBlock>
  );
};

export default ToDoList;
