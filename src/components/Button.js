import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.softBlue};
  color: ${({ theme }) => theme.colors.backgroundColor};
  width: ${({ theme }) => theme.space[8]};
  height: ${({ theme }) => theme.space[5]};
  border-radius: ${({ theme }) => theme.radii[2]};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.softGrey};
  };

  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.lightBlue};
  };
`
export default Button;
