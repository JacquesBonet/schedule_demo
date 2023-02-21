// material-ui
import {createTheme} from '@mui/material/styles';

// third-party
import {presetPalettes} from '@ant-design/colors';

// project import
import ThemeOption from './theme';
import {PaletteMode} from "@mui/material";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode: PaletteMode) => {
  const colors = presetPalettes;

  const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f0f3f5',
    '#e3e8ee',
    '#d9d9d9',
    '#bfbfbf',
    '#4a4a4A',
    '#404556',
    '#3e4c55',
    '#141414',
    '#000000'
  ];
  const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
  const greyConstant = ['#fafafb', '#e6ebf1'];

  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const bluePrimary = [
    '#ffffff',
    '#f6f7fb',
    '#eef1f5',
    '#ecedef',
    '#a0d0fd',
    '#3280fa',
    '#2075fd',
    '#1555f5',
    '#0a45f5',
    '#0524fc',
    '#0012ea'
  ];

  colors.blue = bluePrimary

  const paletteColor = ThemeOption(colors);

  return createTheme({
    palette: {
      mode,
      common: {
        black: '#000',
        white: '#fff'
      },
      ...paletteColor,
      text: {
        primary: paletteColor.grey[700],
        secondary: paletteColor.grey[500],
        disabled: paletteColor.grey[400]
      },
      action: {
        disabled: paletteColor.grey[300]
      },
      divider: paletteColor.grey[200],
      background: {
        paper: paletteColor.grey[0],
        default: paletteColor.grey.A50
      }
    }
  });
};

export default Palette;
