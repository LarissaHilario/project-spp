
import { ThemeProvider } from '@mui/material';
import AppRouter from './Routes/AppRouter';
import Theme from '/themes/Theme';
function App() {
  

  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
