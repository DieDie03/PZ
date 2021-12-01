
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Button } from "@mui/material";
import { useState } from "react";
import './Agenda.scss';
import EventFormDialog from "./EventFormDialog/EventFormDialog";

const Agenda = () => 
{

    const [open, setOpen] = useState(false);
    const [datas, setDatas] = useState([{
    }]);

    const onClick = () => {
        setOpen(() => true);
    };

    const onClose = () => {
        setOpen(() => false);
    };

    const onNewEvent= (event) => {
        const calendarEvent = {
            title: event.name,
            start: event.startDate,
            end: event.endDate
        }

        setDatas(datas => [...datas, calendarEvent]);
    }

    const handleDateClick = (date) => {
        console.log(date)
    }

    return (
        <>
            <div className="add-button">
                <Button variant="contained" onClick={() => onClick()}>+</Button>
                <EventFormDialog open={open} 
                                 onClose={() => onClose()}
                                 onNewEvent={(data) => onNewEvent(data)}/>
            </div>
            <div className="calendar">
                <FullCalendar plugins={ [dayGridPlugin, interactionPlugin] } 
                              initialView="dayGridMonth"
                              events={datas}
                              dateClick={handleDateClick}/>
            </div>
        </>
    );
};

export default Agenda;