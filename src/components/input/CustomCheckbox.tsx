import React, { FC } from "react";
import { CheckboxStyle } from "./style";

interface ICustomCheckBox {
  checked: boolean;
  complete: () => void;
}

const CustomCheckbox: FC<ICustomCheckBox> = ({ checked, complete }) =>
  checked ? <div /> : <CheckboxStyle onClick={complete} />;

export default CustomCheckbox;
