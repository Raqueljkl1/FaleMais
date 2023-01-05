import { Field, FormikHandlers } from "formik";
import React from "react";
import { IphonePlan } from "../utils/Data";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";

interface dropdownProps {
  array: IphonePlan[],
  name: string,
  handleChange?: any
  className?: string
}

export default function GenericDropDown({ array, name, handleChange, className }:dropdownProps) {
  return (
    <Field
      as="select"
      name={name}
      component={Select}
      onChange={handleChange}
      className={className}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      {array.map((item, index) => <MenuItem key={index} value={item.value}>{item.label}</MenuItem>)}
    </Field>
  );
}
