import {ReactNode, useMemo} from 'react';

// material-ui
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider, createTheme, ThemeOptions} from '@mui/material/styles'

// project import
import Palette from './palette';
import componentsOverride from './overrides';
import Typography from './typography'
import CustomShadows from "./shadows";
import {StyledEngineProvider} from "@mui/material";

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

interface Props {
  children: ReactNode
}

const ThemeCustomization = ({children}: Props) => {
  const theme = Palette('light');
  const themeTypography = Typography(`'Helvetica New', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,

      // @ts-ignore
      typography: themeTypography
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeCustomization
