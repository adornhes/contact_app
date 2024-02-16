import React from "react";
import { useState } from "react";


function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);

    console.log({ form });
  };
  return (
    <div>
      <div>
        <input
          name="fullname"
          placeholder="Full name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button onClick={onSubmit}>add</button>
      </div>
    </div>
  );
}

export default Form;
