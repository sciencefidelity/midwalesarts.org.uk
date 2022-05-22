import React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers'

export const TimeInput = () => {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <TimePicker
        label="Time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
