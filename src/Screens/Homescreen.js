import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Homescreen.css";
import Cards from "../Components/Cards/Cards";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Multiselect } from "multiselect-react-dropdown";
import { useHistory } from "react-router-dom";
import { getUsers } from "../Api/Api";
import InfiniteScroll from "react-infinite-scroll-component";

const Homescreen = () => {
  let history = useHistory();
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState({
    objectArray: [
      { key: "Male", cat: "Gender" },
      { key: "Female", cat: "Gender" },
    ],
    selectedValues: [{ key: "Male", cat: "Gender" }],
  });
  const [natOption, setNatOption] = useState({
    objectArray: [
      { key: "US", cat: "nationality" },
      { key: "DK", cat: "nationality" },
      { key: "FR", cat: "nationality" },
      { key: "GB", cat: "nationality" },
    ],
    selectedValues: [{ key: "US", cat: "nationality" }],
  });
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUser = await getUsers(page);
      console.log(newUser, "newuser");
      setCardData((prev) => [...prev, ...newUser]);
      setLoading(false);
    };
    loadUsers();
    // try {
    //   Axios.get("")
    //     .then((res) => {
    //       setCardData(res.data.results);
    //       console.log(res.data.results);
    //     })
    //     .catch((err) => {
    //       window.alert("Fetching api data failed");
    //       window.location.reload();
    //     });
    // } catch (error) {
    //   window.alert("Incorrect api");
    //   window.location.reload();
    // }
  }, [page]);

  const fetchData = () => {
    setPage((prev) => prev + 1);
  };

  const onSelect = (selectedList, selectedItem) => {
    setOption({ ...option, selectedValues: selectedList });
    console.log(selectedItem);
    const filteredCardGender = [];
    console.log(option.selectedValues, "selected values");
    cardData.map((data) => {
      if (
        selectedItem.cat === "Gender" &&
        selectedItem.key === "Male" &&
        data.gender === "male"
      ) {
        filteredCardGender.push(data);
        history.push(`/gender=${data.gender}`);
      }
      if (
        selectedItem.cat === "Gender" &&
        selectedItem.key === "Female" &&
        data.gender === "female"
      ) {
        filteredCardGender.push(data);
        history.push(`/gender=${data.gender}`);
      }
      // if (value.cat === "nationality" && value.key === data.nat) {
      //   filteredCard.push(data);
      // }
    });
    // setCardData(filteredCard);
    console.log(filteredCardGender, "all data");
  };
  const natOnSelect = (selectedList, selectedItem) => {
    setNatOption({ ...natOption, selectedValues: selectedList });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          marginLeft: "16%",
          marginTop: "1%",
        }}
      >
        <Multiselect
          placeholder="Gender"
          selectionLimit={1}
          options={option.objectArray}
          groupBy="cat"
          displayValue="key"
          selectedValues={option.selectedValues} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          // onRemove={onRemove} // Function will trigger on remove event
        />
        <div style={{ marginRight: "2rem" }}></div>
        <Multiselect
          placeholder="Nationality"
          options={natOption.objectArray}
          groupBy="cat"
          displayValue="key"
          selectedValues={natOption.selectedValues} // Preselected value to persist in dropdown
          onSelect={natOnSelect} // Function will trigger on select event
          // onRemove={onRemove} // Function will trigger on remove event
        />
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
                  />
                );
              })}
            {loading && <h1 style={{ marginLeft: "120%" }}>Loading...</h1>}
          </div>
        }
      </InfiniteScroll>
    </>
  );
};

export default Homescreen;
