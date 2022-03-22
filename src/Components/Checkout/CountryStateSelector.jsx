import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CountryStatesData from "../../assets/country_states.json";

export default function CountrySateSelector() {
  const [country, setCountry] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const countries = CountryStatesData.countries;

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="country-controlled-select-label">Country</InputLabel>
        <Select
          labelId="country-controlled-select-label"
          id="country-controlled-select-label"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={country}
          label="country"
          onChange={handleChange}
        >
          return(
          {countries.map((country) => {
            return (
              <MenuItem key={country.id} value={country.country}>
                {country.country}
              </MenuItem>
            );
          })}
          )
        </Select>
      </FormControl>
    </div>
  );
}
