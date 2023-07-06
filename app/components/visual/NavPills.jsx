"use client";

import { useState } from "react";

export default function NavPills({ context }) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
         setToggleState(index)
    }

  return (
    <ul id="nav-pills" class="nav nav-pills">
      {context.map(({ id, label }) => (
        <li id="nav-pill-item" className="nav-item mx-1" onClick={() => toggleTab(id)}>
          <a id="nav-pill-link" className={toggleState===id ? "nav-link active" : "nav-link"} uid={id}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
