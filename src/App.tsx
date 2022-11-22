import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ViewPort from './ViewPort/ViewPort';
import Layout from './Layout';
export const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ViewPort>
          <Layout />
        </ViewPort>
      </ThemeProvider>
    </>
  );
}

export default App;
