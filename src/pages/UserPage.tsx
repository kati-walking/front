import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin,{DateClickArg} from '@fullcalendar/interaction';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';



export default function UserPage(){
    const thisMonth = () => {
        const today = new Date();
        return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
            2,
            "0"
        )}`;
    };
    const navigate = useNavigate();
    const handleDateClick = useCallback((arg:DateClickArg)=>{
        //alert(arg.dateStr);
        navigate('/MailList')
    },[]);
    return(
        <FullCalendar
            plugins={[dayGridPlugin,interactionPlugin]}
            initialView = "dayGridMonth"
            locales={allLocales}
            locale = "ja"
            events={[
                {title:"events",date:`${thisMonth()}-01`},
            ]}
            dateClick = {handleDateClick}
        />
    )
}