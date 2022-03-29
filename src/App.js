import './App.css';
import Store from './components/Store';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.lightGrey};
  width: ${({ theme }) => theme.space[8]};
  height: ${({ theme }) => theme.space[5]};
  border-radius: ${({ theme }) => theme.radii[2]}
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='container'>
        <Store />
      </div>
      <Button>Styled Button</Button>
    </ThemeProvider>
  );
}

export default App;
