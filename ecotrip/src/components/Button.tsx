import { NavButton } from "./styled/StyledButtons";

interface IButtonProps {
  children: JSX.Element;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <>
      <NavButton onClick={onClick}>{children}</NavButton>
    </>
  );
};
