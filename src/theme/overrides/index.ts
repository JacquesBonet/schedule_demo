// third-party
import { merge } from 'lodash';

// project import
import Badge from './Badge';
import Button from './Button';
import Card from './Card';
import CardContent from './CardContent';
import Checkbox from './Checkbox';
import Chip from './Chip';
import IconButton from './IconButton';
import InputLabel from './InputLabel';
import LinearProgress from './LinearProgress';
import Link from './Link';
import ListItemIcon from './ListItemIcon';
import OutlinedInput from './OutlinedInput';
import Tab from './Tab';
import Tabs from './Tabs';
import Typography from './Typography';
import ListItemButton from "./ListItemButton";
import ListItemText from "./ListItemText";
import CalendarPicker from "./CalendarPicker";
import Paper from "./Paper";
import PickersCalendarHeader from "./PickersCalendarHeader";
import PickersDay from "./PickersDay";
import {Theme} from "@mui/material/styles";


// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
    return merge(
        Badge(theme),
        Button(theme),
        CalendarPicker(),
        Card(theme),
        CardContent(),
        Checkbox(theme),
        Chip(theme),
        IconButton(theme),
        InputLabel(theme),
        LinearProgress(),
        Link(),
        ListItemButton(theme),
        ListItemIcon(),
        ListItemText(theme),
        OutlinedInput(theme),
        Paper(),
        PickersCalendarHeader(theme),
        PickersDay(theme),
        Tab(theme),
        Tabs(),
        Typography()
    );
}
