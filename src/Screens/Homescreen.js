import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Homescreen.css";
import Cards from "../Components/Cards/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
import SelectSearch from "react-select-search";
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-select";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { useHistory, useLocation } from "react-router-dom";
// import { getUsers, getMaleUsers } from "../Api/Api";
import InfiniteScroll from "react-infinite-scroll-component";

const options = [
  { value: "male", label: "male" },
  { value: "female", label: "female" },
];
const Homescreen = () => {
  let history = useHistory();
  const search = useLocation().search;
  const genderParams = new URLSearchParams(search).get("gender");
  const natParams = new URLSearchParams(search).get("nat");
  console.log(natParams, "Asdasdasdadadas");
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState("");
  const [nat, setNat] = useState("");
  console.log(nat, "hello");

  const objectArray = [
    { value: "us", label: "USA" },
    { value: "dk", label: "DK" },
    { value: "fr", label: "France" },
    { value: "gb", label: "GB" },
  ];

  const baseUrl = "https://randomuser.me/api/?results=12";
  const getUsers = async (newUrl) => {
    await Axios.get(newUrl)
      .then((res) => {
        setCardData((prev) => [...prev, ...res.data.results]);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        window.alert("Api Error, Pleae reload!!");
      });
  };
  useEffect(() => {
    if (gender || nat) {
      setCardData([]);
    }
  }, [gender, nat, genderParams, natParams]);

  useEffect(() => {
    if (gender) {
      history.push(`/?gender=${gender.value}`);
    }
    let nation = "";
    if (nat) {
      nat.map((value, i) => {
        if (i === 3) {
          nation = nation.concat(value.value);
        } else {
          nation = nation.concat(value.value + ",");
        }
      });
      if (gender) {
        history.push(`/?gender=${gender.value}&nat=${nation}`);
      } else {
        history.push(`/?nat=${nation}`);
      }
    }

    const newUrl = `${baseUrl}&page=${page}&gender=${
      gender ? gender.value : genderParams
    }&nat=${nation ? nation : natParams}`;
    console.log(newUrl, "this is new url");
    const loadUsers = async () => {
      setLoading(true);
      getUsers(newUrl);
      setLoading(false);
    };
    loadUsers();
  }, [page, gender, nat]);

  const fetchData = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="Filter">
        <Select
          onChange={setGender}
          value={gender}
          placeholder="Select Gender"
          options={options}
        />
        <div style={{ marginLeft: "2rem" }}>
          <ReactMultiSelectCheckboxes
            onChange={setNat}
            style={{ padding: "2rem" }}
            options={objectArray}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={cardData && cardData.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
      >
        {
          <div className="showusers">
            {cardData &&
              cardData.map((data, i) => {
                return (
                  <Cards
                    key={i}
                    name={data.name.first}
                    age={data.dob.age}
                    gender={data.gender}
                    dob={data.dob.date}
                    phone={data.phone}
                    picture={data.picture}
                    email={data.email}
                    nat={data.nat}
                  />
                );
              })}
            {loading && <h1>Loading...</h1>}
          </div>
        }
      </InfiniteScroll>
    </>
  );
};

export default Homescreen;
