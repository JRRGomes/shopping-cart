import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Store from './components/Store';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';

const App = () => {
  return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className='container'>
            <Store />
          </div>
        </ThemeProvider>
      </>
  );
}

export default App;
