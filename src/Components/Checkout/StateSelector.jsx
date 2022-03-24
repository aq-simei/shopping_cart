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

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="state-controlled-select-label">State</InputLabel>
        <Select
          name="state"
          label="State/Province/Region"
          labelId="state-controlled-select-label"
          id="state-controlled-select-label"
          value={currentState}
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
