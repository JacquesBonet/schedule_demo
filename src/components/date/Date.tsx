import {FlexBox} from "../../components/layouts/flex/Flex";
import {LocalizationProvider, StaticDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {TextField, useTheme} from "@mui/material";
import dayjs, {Dayjs} from 'dayjs';
import Typography from "@mui/material/Typography";

interface Props {
  onChange: (value: dayjs.Dayjs | null, keyboardInputValue?: string) => void,
  value: dayjs.Dayjs
}

const Date = ({onChange, value}: Props) => {
  const theme = useTheme()

  return (
    <FlexBox column x='flex-start' y='flex-start' mb={-4}>
      <FlexBox x='flex-start' y='center'>
        <Typography variant="body1">Date</Typography>
        <Typography variant="body1" sx={{
          // @ts-ignore
          backgroundColor: theme.palette.primary[100],
          borderRadius: '10%',
          padding: 1,
          paddingLeft:2,
          paddingRight: 2,
          ml: 2
        }}>{value.format("DD/MM/YYYY")}</Typography>
      </FlexBox>
      <FlexBox x='flex-start'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            shouldDisableYear={() => true}
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            onChange={onChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FlexBox>
    </FlexBox>
  )
}

export default Date
