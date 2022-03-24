import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CountryStatesData from "../../assets/country_states.json";

const countries = CountryStatesData.countries;

export default function CountrySelector({
  currentCountry,
  onChangeCurrentCountry,
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
      <InputLabel id="country-controlled-select-label">Country</InputLabel>
      <Select
        name="country"
        labelId="country-controlled-select-label"
        id="country-controlled-select-label"
        value={currentCountry || ""}
        label="country"
        onChange={onChangeCurrentCountry}
      >
        {countries.map((country) => {
          return (
            <MenuItem key={country.country} value={country.country}>
              {country.country}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
