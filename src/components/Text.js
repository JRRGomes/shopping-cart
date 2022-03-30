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
  const alignTypes = {
    center: 'center',
    left: 'left',
    right: 'right',
  }
  return alignTypes[align] || 'left'
}

const Text = styled.text`
  display: block;
  font-size: ${(props) => getFontSize(props)};
  text-align: ${(props) => getAlign(props)};
  margin-block-end: ${({ theme }) => theme.space[3]};
  line-height: ${({ theme }) => theme.space[4]};
`

export default Text
