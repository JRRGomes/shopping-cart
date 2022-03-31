import styled from 'styled-components';

const InputLabel = styled.text`
  display: block;
  margin-bottom: -${({ theme }) => theme.space[1]};
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

export default InputLabel
