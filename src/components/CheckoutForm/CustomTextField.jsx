
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // as={TextField}
        name={name}
        control={control}
        label={label}
        render={({ field }) => (
          <TextField
            fullWidth
            label={label}
            required
          />
        )}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
