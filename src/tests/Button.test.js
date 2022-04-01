import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import { ThemeProvider } from 'styled-components';
import theme from '../theme'

it('renders button correctly', () => {
const button = renderer
.create(<ThemeProvider theme={theme}><Button>my button</Button></ThemeProvider>).toJSON();
expect(button).toMatchSnapshot();
})
