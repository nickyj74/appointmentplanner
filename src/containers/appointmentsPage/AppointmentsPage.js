import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// - Step 7 - Line 9-11 - Receive three props
// - Step 7 - Line 13-16 - 4 local state variables
export const AppointmentsPage = ({
  appointments,
  addAppointments,
  contacts
}) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  
// - Step 7 - Line 19 - handleSubmit callback function
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

/* - Step 7 - Line 37 onwards 
- add a new appointment form with local state variables 
- and local state variable setter functions */

// - Step 7 - Line 52 - render a Tilelist with appointment array passed via props
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
        contacts={contacts}
        name={name}
        setTitle={setName}
        contact={contact}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
