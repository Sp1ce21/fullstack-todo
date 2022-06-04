import React, { FC, useState } from "react";
import { Input, InputStyle, Line, Title } from "./style";

interface ICustomInput {
  title: string;
  saveInput: (value: string) => void;
}

const CustomInput: FC<ICustomInput> = ({ title, saveInput }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const changeInput = (
    e: React.KeyboardEvent & React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
    checkKey(e);
  };
  const checkKey = (
    e: React.KeyboardEvent & React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value !== "") {
      setIsError(false);
      if (e.key === "Enter") {
        saveInput(e.target.value);
        setInputValue("");
      }
    } else {
      setIsError(true);
    }
  };
  return (
    <InputStyle>
      <Title isFocus={isFocus}>{title}</Title>
      <Input
        type="text"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={changeInput}
        onKeyPress={checkKey}
      />
      <Line isFocus={isFocus} errors={isError} />
    </InputStyle>
  );
};

export default CustomInput;
