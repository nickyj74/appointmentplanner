import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

// - Step 3 - keep track of three local state values & duplicates
export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

// - Step 3 - only add contact if not duplicate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  // - Step 3 - check for contact name duplicates
  useEffect(() => {
    const duplicateName = () => {
      const found = contacts.find((contacts) => contacts.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (duplicateName()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

// - Step 3 - render a contact form Line 49 & render a TileList Line 59
  return (
    <div>
      <section>
        <h2>
        Add Contact
        {duplicate ? " - Name Already in Use" : ""}
        </h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={setPhone}
        email={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
