import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CountryStatesData from "../../assets/country_states.json";

export default function StateSelector({
  currentCountry,
  currentState,
  onChangeCurrentState,
  id = "state",
  name = "state",
  label = "State/Province/Region",
}) {
  const selectedCountry = CountryStatesData.countries.find((country) => {
    return country.country === currentCountry;
  });

  const currentStates = selectedCountry?.states || [];
  console.log({ currentStates, currentState });
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
      <InputLabel id="state-controlled-select-label">State</InputLabel>
      <Select
        labelId="state-controlled-select-label"
        id={id}
        name={name}
        value={currentState}
        label={label}
        onChange={onChangeCurrentState}
        disabled={!currentCountry}
      >
        {currentStates.map((state) => {
          return (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
