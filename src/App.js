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
      <Button>Styled Button</Button>
      <Text variant={'h1'}>Checkout -</Text>
      <Text variant={'h2'}>Checkout -</Text>
      <Text variant={'h3'}>Checkout</Text>
    </ThemeProvider>
  );
}

export default App;
