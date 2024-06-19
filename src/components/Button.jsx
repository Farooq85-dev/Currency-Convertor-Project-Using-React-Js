import Button from "@mui/material/Button";
import { MdStart } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { MdOutlineSwapCalls } from "react-icons/md";

function ButtonMUI({ text, redirect, icon, click }) {
  return (
    <>
      <Button
        variant="contained"
        onClick={
          redirect ||
          (click === "convert" ? click : undefined) ||
          (click === "swap" ? click : undefined)
        }
        endIcon={
          (icon === "start" && <MdStart />) ||
          (icon === "convert" && <SiConvertio />) ||
          (icon === "swap" && <MdOutlineSwapCalls />)
        }
      >
        {text}
      </Button>
    </>
  );
}

export default ButtonMUI;
