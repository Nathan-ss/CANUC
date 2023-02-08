import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { UseFormSetValue, FieldValues } from "react-hook-form";

export default function Tags({ setValue }: { setValue: UseFormSetValue<FieldValues> }) {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={top100Films.map((option) => option.title)}
        onChange={(event, newValue) => {
          setValue("tag", newValue);
        }}
        freeSolo
        fullWidth
        renderTags={(value: readonly string[], getTagProps) => value.map((option: string, index: number) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}
        renderInput={(params) => <TextField {...params} variant="outlined" label="Tags" placeholder="AddTag" />}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
