// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //


export default function ListItemText() {

  return {
    MuiListItemText: {
      styleOverrides: {
        root: {
          minWidth: 24,
          width: '100%',
          transition: 'padding-left .25s ease-in-out',
        },
      }
    }
  };
}
