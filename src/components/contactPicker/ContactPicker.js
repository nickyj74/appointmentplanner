import React from "react";

// - Step 9 - callback function to handle when onChange event is triggered
// - Step 9 - select element set to the callback values 
// - Step 9 - default option with projects given text and value
// - Step 9 - use map() to render an option for each contact

export const ContactPicker = ({ value, name, onChange, contacts }) => {
  return (
    <select aria-label="Contact Picker" value={value} name={name} onChange={onChange}>
    <option value={""} key={-1}>
      No Contact Selected
    </option>
    {contacts.map((contact) => {
      return (
        <option value={contact} key={contact}>
        {contact}
        </option>
      );
    })}
  </select>