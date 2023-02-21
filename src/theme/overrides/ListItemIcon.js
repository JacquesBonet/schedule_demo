// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemIcon() {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          borderRadius: 1.5,
          width: 36,
          height: 36,
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: 'secondary.light'
          }
        }
      }
    }
  };
}
