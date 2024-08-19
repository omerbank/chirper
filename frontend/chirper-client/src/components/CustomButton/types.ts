export type CustomButtonOptions = {
  variant: 'text' | 'outlined' | 'contained';
  size: 'small' | 'medium' | 'large';
  textColor: string;
  backgroundColor: string;
  hoverColor: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type CustomButtonProps = { options: CustomButtonOptions };
