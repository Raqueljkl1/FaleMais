import { Field } from "formik";
import React from "react";


interface inputProps {
  name: string
  placeholder: string
  className?: string
}

export default function GenericInput({ name, placeholder, className }:inputProps) {
  return (
    <Field
      placeholder={placeholder}
      name={name}
      className={className}
    />
  );
}
