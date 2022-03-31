import './App.css';
import Store from './components/Store';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Button, Text} from './components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
          <div className='container'>
            <Store />
          </div>
    </ThemeProvider>
  );
}

export default App;
