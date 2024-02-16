import React from "react";
import Form from "./form";
import List from "./List";
import { useState, useEffect } from "react";
import "./style.css"

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "ahmet", phonenumber: "123312" },
    { fullname: "mehmet", phonenumber: "12983" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id ="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
