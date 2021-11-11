import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonGreen = styled(Button)(() => ({
    color: '#ffffff',
    backgroundColor: '#219653',
    '&:hover': {
      backgroundColor: '#27ae60',
    },
}));