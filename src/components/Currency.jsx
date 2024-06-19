import { TextField } from "@mui/material";
import { ButtonMUI, useCurrencyHook } from "../exprts&imports/index";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import "../index.scss";

function CurrencyConvertor() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const currencyInfo = useCurrencyHook(from);

  const options = Object.keys(currencyInfo);

  function convert() {
    setConvertedAmount(amount * currencyInfo(to));
  }

  return (
    <div className="mainCurrency flex justify-center items-center h-screen">
      <div className="currencyContainer flex rounded-xl shadow-md p-8 m-5">
        <div className="bg-gray-200 rounded-md p-4 flex  items-center gap-2">
          <TextField
            style={{ width: "30%" }}
            id="outlined-basic"
            label="From"
            type="number"
            variant="outlined"
          />
          <Box style={{ width: "70%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Currency Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                >
                <MenuItem>Ten</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </div>
        <ButtonMUI icon="swap" click={swap} text="Swap" />
        <div className="bg-gray-200 rounded-md p-4 flex items-center gap-2">
          <TextField
            style={{ width: "30%" }}
            id="outlined-basic"
            label="To"
            variant="outlined"
            type="number"
            disabled
          />
          <Box style={{ width: "70%" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Currency Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem>Ten</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <ButtonMUI click={convert} icon="convert" text="Convert" />
      </div>
    </div>
  );
}

export default CurrencyConvertor;
