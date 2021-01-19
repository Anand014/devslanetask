import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./Navbar.css";

const Navbar = () => {
  const [option, setOption] = useState({
    options: [
      { name: "Srigar", id: 1 },
      { name: "Sam", id: 2 },
    ],
  });

  return (
    <>
      <nav className="navbar">
        <header className="navbarHeader">Devslane Task</header>
        <div className="navbarSelect">
          <Multiselect
            placeholder="Filter"
            options={option.options} // Options to display in the dropdown
            selectedValues={option.selectedValue} // Preselected value to persist in dropdown
            //   onSelect={onSelect} // Function will trigger on select event
            //   onRemove={onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
