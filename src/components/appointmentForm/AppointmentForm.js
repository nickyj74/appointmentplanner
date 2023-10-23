import React from "react";

import { ContactPicker } from "../ContactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

/* - Step 8 - Line 30 - render a form with onSubmit attribute, 
- 3 controlled componenets for name & appointment date and time
- Step 8 - Line 44 - contactpicker componenet with contacts list  */
// - Step 8 - Line 53 - use getTodayString to set min attribute of the date input
  return (
    <form onSubmit={handleSubmit}>
    <label>
      <input 
      type="text"
      name="name"
      value={name}
      onChange={(e) => setTitle(e.target.value)}
      required
      placeholder="Appointment Tag"
      aria-label="Appointment Tag"
      />
      </label>
      <br />
      <label>
      <ContactPicker
      name="contact"
      value={contact}
      contacts={contactsNames}
      onChange={(e) => setContact(e.target.value)}
      />
      </label>
      <br />
      <label>
      <input
      type="time"
      name="time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
      aria-label="Time Picker"
      />
      </label>
      <br />
      <input aria-label="Add Appointment" type="submit" value="Add Appointment" />
      </form>
  );
};

