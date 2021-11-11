import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonGrey = styled(Button)(() => ({
    color: '#999999',
    backgroundColor: '#f5f5f5',
    '&:hover': {
        color: '#ffffff',
        backgroundColor: '#219653',
    },
}));