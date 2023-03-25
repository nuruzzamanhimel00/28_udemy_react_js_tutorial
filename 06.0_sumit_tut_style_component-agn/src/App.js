// import './assets/css/dark.css'
import Tutorial from './components/Tutorial.js'
import { GlobalStyle } from './components/styles/Global.style.js';
import {ThemeProvider} from 'styled-components'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme='dark'>

    <Tutorial />
    </ThemeProvider>
    </>
  );
}

export default App;
