import React from "react";
import "./Cards.css";
const Cards = (props) => {
  const { name, age, gender, dob, phone, picture, email, nat } = props;

  return (
    <div className="cards">
      <div className="cardHead">
        <img
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          src={picture.large}
        />
        <div className="cardMainData">
          <h4>{name}</h4>
          <p>
            {age}, {gender}
          </p>
        </div>
      </div>
      <hr />
      <div className="carddata">
        <table>
          <tr>
            <td>
              <strong>DOB:</strong>
            </td>
            <td className="details">{dob.split("T")[0]}</td>
          </tr>
          <tr>
            <td>
              <strong>Phone:</strong>
            </td>
            <td className="details">{phone}</td>
          </tr>
          <tr>
            <td>
              <strong>Email:</strong>
            </td>
            <td className="details">{email}</td>
          </tr>
          <tr>
            <td>
              <strong>Nationality:</strong>
            </td>
            <td className="details">{nat}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Cards;
