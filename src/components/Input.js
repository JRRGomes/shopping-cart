import styled from 'styled-components';

const getError = ({ theme, error }) => {
   if (error){
     return theme.colors.errorRed;
   }
  return theme.colors.softGrey
 }

const Input = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-color: ${(props) => getError(props)};
  margin-block-start: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[0]} 0 ${({ theme }) => theme.space[0]};

  &:focus {
    outline: none;
  };

  option {
    color: ${({ theme }) => theme.colors.darkGrey};
  };
`

export default Input
