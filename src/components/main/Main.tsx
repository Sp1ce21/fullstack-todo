import React, { FC } from "react";
import ToDoBlock from "../toDoBlock/ToDoBlock";
import { MainStyle } from "./style";

const Main: FC = () => {
  return (
    <MainStyle>
      <div className="container">
        <ToDoBlock />
      </div>
    </MainStyle>
  );
};

export default Main;
