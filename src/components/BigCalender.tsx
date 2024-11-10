"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);
const data = [
  {
    title: "Math Class",
    allDay: false,
    start: new Date(2025, 1, 1, 9, 0), // Feb 1, 2025, 9:00 AM
    end: new Date(2025, 1, 1, 10, 0),  // Feb 1, 2025, 10:00 AM
  },
  {
    title: "English Class",
    allDay: false,
    start: new Date(2025, 1, 1, 10, 30),
    end: new Date(2025, 1, 1, 11, 30),
  },
  {
    title: "Science Class",
    allDay: false,
    start: new Date(2025, 1, 1, 13, 0),
    end: new Date(2025, 1, 1, 14, 0),
  },
  {
    title: "History Lecture",
    allDay: false,
    start: new Date(2025, 1, 2, 9, 0),
    end: new Date(2025, 1, 2, 10, 30),
  },
  {
    title: "Physical Education",
    allDay: false,
    start: new Date(2025, 1, 2, 11, 0),
    end: new Date(2025, 1, 2, 12, 0),
  },
  {
    title: "Art Workshop",
    allDay: false,
    start: new Date(2025, 1, 3, 13, 0),
    end: new Date(2025, 1, 3, 15, 0),
  },
  {
    title: "Music Class",
    allDay: false,
    start: new Date(2025, 1, 4, 9, 0),
    end: new Date(2025, 1, 4, 10, 0),
  },
  {
    title: "Chemistry Lab",
    allDay: false,
    start: new Date(2025, 1, 4, 10, 30),
    end: new Date(2025, 1, 4, 12, 0),
  },
  {
    title: "Math Exam",
    allDay: false,
    start: new Date(2025, 1, 5, 9, 0),
    end: new Date(2025, 1, 5, 11, 0),
  },
  {
    title: "Field Trip",
    allDay: true,
    start: new Date(2025, 1, 6),
    end: new Date(2025, 1, 6),
  },
];


const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      views={["day", "week", "work_week", "month"]}
      view={view}
      style={{ height: "98%" }}
      defaultDate={new Date(2025, 1, 1)} // Set default date within event range

      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      culture="en-GB" // Specify culture to enforce consistent date formatting

    />
  );
};

export default BigCalendar;
