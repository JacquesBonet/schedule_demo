import {FlexBox} from "../../components/layouts/flex/Flex";
import {List, ListItemButton, ListItemText, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import PerfectScrollbar from "react-perfect-scrollbar";

interface Props {
  onChange: (selected: number) => void,
  value: number
}

const am = ['12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM']
const pm = ['00:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM']
const ampm = [...am, ...pm]
const Time = ({onChange, value}: Props) => {
  const theme = useTheme()

  return (
    <FlexBox column x='flex-start' y='flex-start'>
      <FlexBox x='flex-start' y='center'>
        <Typography variant="body1">Time</Typography>
        <Typography variant="body1" sx={{
          // @ts-ignore
          backgroundColor: theme.palette.primary[100],
          borderRadius: 2,
          border: `1px solid ${theme.palette.primary.dark}`,
          padding: 1,
          paddingLeft: 2,
          paddingRight: 2,
          ml: 2
        }}>{ampm[value]}</Typography>
      </FlexBox>
      <FlexBox x='center' y='start' height={256} mt={3}>
        <PerfectScrollbar>
          <List component="nav" aria-label="secondary mailbox folder" sx={{marginRight: 1}}>
            {ampm.map((item, idx) => (
              <ListItemButton
                key={idx}
                selected={value === idx}
                onClick={() => onChange(idx)}
                sx={{width: 184, pt: '2px', pb: '2px'}}
              >
                <ListItemText
                  primary={ampm[idx]}
                  primaryTypographyProps={{ fontWeight: value === idx ? 700 : 500, textAlign: 'center' }}
                />
              </ListItemButton>
            ))}
          </List>
        </PerfectScrollbar>
      </FlexBox>
    </FlexBox>
  )
}

export default Time
