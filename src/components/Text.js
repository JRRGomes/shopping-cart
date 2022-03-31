import styled from 'styled-components';

const getFontSize = ({ variant, theme }) => {
  const variantTypes = {
    h1: theme.fontSizes[6],
    h2: theme.fontSizes[5],
    h3: theme.fontSizes[4],
  }
  return variantTypes[variant] || theme.fontSizes[3]
}

const getAlign = ({ align }) => {
  return align || 'left'
}

const Text = styled.text`
  display: block;
  font-size: ${getFontSize};
  text-align: ${getAlign};
  margin-block-end: ${({ theme }) => theme.space[3]};
  line-height: ${({ theme }) => theme.space[4]};
`

export default Text
