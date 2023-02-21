// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function PickersCalendarHeader() {

  return {
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 50,
        },
        label: {
          color: '#2c56c4',
          fontWeight: 600
        },
        switchViewButton: {
          visibility: 'hidden'
        }
      }
    }
  };
}
