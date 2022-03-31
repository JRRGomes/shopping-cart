import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.softBlue};
  color: ${({ theme }) => theme.colors.backgroundColor};
  min-width: ${({ theme }) => theme.space[7]};
  height: ${({ theme }) => theme.space[5]};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radii[2]};
  margin: ${({ theme }) => theme.space[0]};

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
