// ==============================|| OVERRIDES - BUTTON ||============================== //

import {alpha} from "@mui/material/styles";

export default function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '3%',
          boxShadow: `0px 0px 15px ${alpha(theme.palette.primary.dark, 0.15)}`,
          padding: 25,
        },
      }
    }
  };
}
