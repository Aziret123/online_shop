import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType, price, setPrice }) => {
  // console.log(price);
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="phone"
            control={<Radio />}
            label="Телефоны"
          />
          <FormControlLabel
            value="laptop"
            control={<Radio />}
            label="Ноутбуки"
          />
          <FormControlLabel value="watch" control={<Radio />} label="Часы" />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={200000}
        />
      </FormControl>
    </div>
  );
};

export default Filter;
