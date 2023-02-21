import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import {FlexBox} from "../../components/layouts/flex/Flex";
import Date from 'src/components/date/Date'
import Time from 'src/components/time/Time'
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";

const Calendar = () => {
  const [dateValue, setDateValue] = useState<Dayjs>(dayjs('2022-04-07'));
  const [timeValue, setTimeValue] = useState<number>(8);

  return (
    <FlexBox x='center' y='center'>
      <Card>
        <CardHeader title='Schedule Response'/>
        <CardContent>
          <FlexBox x='justify-between'>
            <Date onChange={(newValue) => setDateValue(newValue || dayjs())} value={dateValue}/>
            <Time onChange={(newValue) => setTimeValue(newValue)} value={timeValue}/>
          </FlexBox>
          <FlexBox x='flex-start'>
            <Button variant='contained'>
              Schedule
            </Button>
            <Button type='reset' variant='outlined'>
              Cancel
            </Button>
          </FlexBox>
        </CardContent>
      </Card>
    </FlexBox>
  )
}

export default Calendar
