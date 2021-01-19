import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Homescreen.css";
import InfiniteScroll from "react-infinite-scroller";
import Cards from "../Components/Cards/Cards";

const Homescreen = () => {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    try {
      Axios.get("https://randomuser.me/api/?results=100&nat=us,dk,fr,gb")
        .then((res) => {
          setCardData(res.data.results);
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
  return (
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
  );
};

export default Homescreen;
