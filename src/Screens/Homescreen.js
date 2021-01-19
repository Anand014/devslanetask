import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Homescreen.css";
import InfiniteScroll from "react-infinite-scroller";
import Cards from "../Components/Cards/Cards";
import { Multiselect } from "multiselect-react-dropdown";
import { useHistory } from "react-router-dom";

const Homescreen = () => {
  let history = useHistory();
  const [cardData, setCardData] = useState();
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
    try {
      Axios.get("https://randomuser.me/api/?results=100&nat=us,dk,fr,gb")
        .then((res) => {
          setCardData(res.data.results);
          console.log(res.data.results);
        })
        .catch((err) => {
          window.alert("Fetching api data failed");
          window.location.reload();
        });
    } catch (error) {
      window.alert("Incorrect api");
      window.location.reload();
    }
  }, []);

  console.log(cardData, "data");

  const loadFunc = () => {
    //scroll 10
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
        history.push(`/${selectedItem.key}`);
      }
      if (
        selectedItem.cat === "Gender" &&
        selectedItem.key === "Female" &&
        data.gender === "female"
      ) {
        filteredCardGender.push(data);
        history.push(`/${selectedItem.key}`);
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
        pageStart={0}
        threshold={10}
        loadMore={loadFunc}
        hasMore={true || false}
        //   loader={
        //     <div className="loader" key={0}>
        //       Loading ...
        //     </div>
        //   }
      >
        {
          <div className="showusers">
            {cardData ? (
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
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        }
      </InfiniteScroll>
    </>
  );
};

export default Homescreen;
