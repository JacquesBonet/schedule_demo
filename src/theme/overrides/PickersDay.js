// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function PickersDay(theme) {
  return {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: theme.palette.text.secondary,
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.primary,
            fontWeight: 700,
            borderRadius: '20%',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          },
          '&[aria-selected="true"].Mui-selected': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.text.primary,
          },
          '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            borderRadius: '20%',
          }
        }
      }
    }
  };
}
