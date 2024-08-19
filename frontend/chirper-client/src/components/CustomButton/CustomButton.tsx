import { Button } from '@mui/material';
import { CustomButtonProps } from './types';

export default function CustomButton({ options }: CustomButtonProps) {
  return (
    <Button
      variant={options.variant}
      size={options.size}
      onClick={options.onClick}
      sx={{
        color: options.textColor,
        background: options.backgroundColor,
        '&:hover': { background: options.hoverColor },
      }}
      disableElevation
    >
      {options.text}
    </Button>
  );
}
