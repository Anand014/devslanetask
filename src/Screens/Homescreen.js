import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Homescreen.css";

const Homescreen = () => {
  return (
    <div className="showusers">
      <div className="cards">
        <div className="cardHead">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <div className="cardMainData">
            <h4>Anand</h4>
            <p>27yrs, Male</p>
          </div>
        </div>
        <hr />
        <div className="carddata">
          <table>
            <tr>
              <td>
                <strong>DOB:</strong>
              </td>
              <td className="details">12/12/1992</td>
            </tr>
            <tr>
              <td>
                <strong>Phone:</strong>
              </td>
              <td className="details">01234567890</td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td className="details">Example@exampe.com</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
