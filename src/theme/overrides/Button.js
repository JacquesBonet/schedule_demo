// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      backgroundColor: theme.palette.grey[200]
    }
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          paddingLeft: 15,
          borderRadius: 8,
          minWidth: 100,
          textTransform: 'none',
        },
        contained: {
          ...disabledStyle,
          marginRight: 20,
        },
        outlined: {
          ...disabledStyle,
          color: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.light,
        }
      }
    },
  };
}
