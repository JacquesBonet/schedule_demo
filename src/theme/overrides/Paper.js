// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Paper() {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiCard-root': {
            padding: 5,
          },
        },
      }
    }
  };
}
