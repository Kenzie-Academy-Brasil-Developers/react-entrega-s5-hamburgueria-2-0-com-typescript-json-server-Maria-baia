import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: '#168821',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: '#f5f5f5',
      borderWidth: 2,
    },
    '& label.Mui-focused': {
      color: '#333333',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#e60000',
      },
    },
  });