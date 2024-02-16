import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setfilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="filterText"
        value={filterText}
        onChange={(e) => setfilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phonenumber}</span>
          </li>
          
        ))}
        <b id="total_contact">Total contact:{filtered.length}</b>
      </ul>
    </div>
  );
}

export default List;
