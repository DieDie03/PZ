import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import moment from "moment";

export const Agenda = () => {

    const [events, setEvents] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/events').then(result => setEvents(ev => [...result.data]));
    }, []);

    const update = e => {
        const id = parseInt(e.event.id);
        const toUpdate = events.find(ev => ev.id === id);
        toUpdate.start = moment(e.event.start).format('YYYY-MM-DD') ;
        toUpdate.end = moment(e.event.end).format('YYYY-MM-DD');
        setEvents(e => e.map(ev => ev.id !== id ? ev : {...toUpdate}));
        axios.put('http://localhost:4000/events/' + id, toUpdate).then(x => {

        }).catch(() => {
            e.revert();
        });
    }

    const add = () => {
        const newEv = { title: 'my event', start: '2021-11-10', end: '2021-11-20' };
        axios.post('http://localhost:4000/events', newEv).then(result => {
            setEvents(ev => [...ev, result]);
        });
    }

    return (
        <>
            <Button onClick={add}>Add</Button>
            <FullCalendar
                plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                droppable={true}
                eventDurationEditable={true}
                eventStartEditable={true}
                eventResize={update}
                eventDrop={update}
            />
        </>
    );
};

export default Agenda;