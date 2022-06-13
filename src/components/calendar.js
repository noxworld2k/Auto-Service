import React, { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';

function Calendar() {
    const [availability, setAvailability] = useState([])

    const Calendar = CalendarTemplate({
        availability,
        setAvailability,
        primaryColor: "#CCCCCC",
        secondaryColor: "#EEEEEE",
        primaryFontColor: "#444444",
        fontFamily: "Roboto",
        fontSize: 14,
        startTime: "8:00",
        endTime: "22:00"
    });

    return (
        <div>
            <Calendar />
        </div>
    );
}

export default Calendar;