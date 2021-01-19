import React, { useEffect, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const [option, setOption] = useState({
    plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    objectArray: [
      { key: "Male", cat: "Gender" },
      { key: "Female", cat: "Gender" },
      { key: "us", cat: "nationality" },
      { key: "dk", cat: "nationality" },
      { key: "fr", cat: "nationality" },
      { key: "gb", cat: "nationality" },
    ],
    selectedValues: [
      { key: "Male", cat: "Gender" },
      { key: "us", cat: "nationality" },
    ],
  });
  useEffect(() => {});

  return (
    <>
      <nav className="navbar">
        <header className="navbarHeader">Devslane Task</header>
        <div className="navbarSelect">
          <Multiselect
            placeholder="Filter"
            options={option.objectArray}
            groupBy="cat"
            displayValue="key"
            selectedValues={option.selectedValues} // Preselected value to persist in dropdown
            // onSelect={onSelect} // Function will trigger on select event
            // onRemove={onRemove} // Function will trigger on remove event
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
