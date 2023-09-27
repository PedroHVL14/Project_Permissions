import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledNavButton } from './styles';

interface NavButtonProps {
  label: string;
  icon: ReactElement;
  path: string;
  variant?: 'contained' | 'outlined';
}

export function NavButton({ label, icon, path, variant = 'contained' }: NavButtonProps){ 
  const navigate = useNavigate(); 

  return (
    <Box>
      <StyledNavButton
        variant={variant}
        color="primary"
        endIcon={icon}
        onClick={() => {
          navigate(path);
        }}>
        {label}
      </StyledNavButton>
    </Box>
  );
};