// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemButton(theme) {

  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          minWidth: 24,
          width: '100%',
          transition: 'padding-left .25s ease-in-out',
          '&.active': {
            borderRight: `2px solid ${theme.palette.primary.main}`,
          },
        },
      }
    }
  };
}
