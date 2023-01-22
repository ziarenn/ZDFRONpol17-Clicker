import React from "react";

const Form = () => {
  return (
    <form id="contact-form">
      <input placeholder="first name" />
      <input placeholder="last name" />
      <input placeholder="zip code and city" />
      <input placeholder="address" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
