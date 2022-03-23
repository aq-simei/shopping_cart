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
}) {
  const selectedCountry = CountryStatesData.countries.find((country) => {
    return country.country === currentCountry;
  });

  const currentStates = selectedCountry?.states || [];

  console.log({ currentStates });
  // const filterArray = () => {
  //   countries.find((country) => {
  //     country.country === current;
  //   });
  // };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="state-controlled-select-label">State</InputLabel>
        <Select
          labelId="state-controlled-select-label"
          id="state-controlled-select-label"
          value={currentState}
          label="state"
          onChange={onChangeCurrentState}
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
    </div>
  );
}
