import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addTask,
  completeTask,
  deleteTask,
  getTasks,
} from "../../redux/todo-reducer";
import { ITasks } from "../../request/interfaces";
import { getDate } from "../../utils/dateFormatter";
import CustomInput from "../input/CustomInput";
import ToDoList from "../toDoList/ToDoList";
import { DateStyle, NumberStyle, ToDoBlockStyle, ToDoUp } from "./style";

const ToDoBlock: FC = () => {
  const [date, setDate] = useState("");
  const [sortedTasks, setSortedTasks] = useState([]);
  const dispatch = useDispatch();

  const tasks: any = useSelector(({ todo }: RootState) => todo.tasks);

  useEffect(() => {
    setDate(getDate().toString());
  }, []);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    setSortedTasks(
      tasks.sort(function (a: ITasks, b: ITasks) {
        if (a.done > b.done) {
          return 1;
        }
        if (a.done < b.done) {
          return -1;
        }
      })
    );
  }, [tasks]);

  return (
    <ToDoBlockStyle>
      <ToDoUp>
        <DateStyle>{date}</DateStyle>
        <NumberStyle>Tasks: {sortedTasks.length}</NumberStyle>
        <CustomInput
          title="Enter task"
          saveInput={(inputValue) => dispatch(addTask(inputValue))}
        />
      </ToDoUp>

      <ToDoList
        tasks={sortedTasks}
        complete={(id: number) => dispatch(completeTask(id))}
        deleteTask={(id: number) => dispatch(deleteTask(id))}
      />
    </ToDoBlockStyle>
  );
};

export default ToDoBlock;
