import React from "react";
import Button from "@mui/material/Button";

interface Props {
  style?: React.CSSProperties
  txt?: React.ReactNode;
  onClick?: () => void;
  className: string;
  classNameDiv: string
  type: "submit"
}

const GenericButton: React.FC<Props> = ({
  txt,
  onClick,
  style,
  type,
  className,
  classNameDiv,
}) => {
  return (
    <div className={classNameDiv}>
      <Button
        variant="outlined"
        onClick={onClick}
        type={type || "button"}
        className={className}
        color="success"
      >
        {txt}
      </Button>
    </div>
  );
};
export default GenericButton;
