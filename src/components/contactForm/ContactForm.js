import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

// - Step 4 - render 3 controlled elements, one for each piece of contact data
// - Step 4 - phone pattern is UK Regex
  return (
    <form onSubmit={handleSubmit}>
    <label>
    <input
    type="text"
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    placeholder="Contact Name"
    aria-label="Contact Name"
    />
    </label>
    <br />
    <label>
    <input
    type="tel"
    name="phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    required
    pattern="^\+?(?:\d\s?){10,12}$"
    placeholder="Phone Number - UK"
    aria-label="Phone Number - UK"
    />
    </label>
    <br />
    <label>
    <input
    type="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Email Address"
    aria-label="Email Address"
    />
    </label>
    <br />
    <input type="submit" value="Add New Contact" aria-label="Add New Contact"/>
    </form>
  );
};


