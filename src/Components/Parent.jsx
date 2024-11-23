import React, { useEffect, useRef, useState } from "react";
import Child from "./Child";
import Memo from "./Memo";

const Parent = () => {
  let [count, setCount] = useState(0);
  let [data, setData] = useState(false);
  let [users, setUsers] = useState([]);
  let lastUserRef = useRef(null);

  let increament = () => {
    setCount((previoues) => previoues + 1);
    // setData(!false);
  };
  let decrement = () => {
    // setUsers((prevUsers) => prevUsers.pop());

    setCount((previoues) => previoues - 1);
    console.log("sddhgdhsjbdsdfb", users);
  };
  const func = () => {
    if (count > users.length) {
      fetchData();
    } else {
      setUsers(users.pop());
      // setUsers(users.pop());
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${count}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers((prevData) => new Array(...prevData, data));

      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    // finally{
    //   if(!data){
    //   setData(true);
    //   }
    // }

    // console.log(data);
  };

  useEffect(() => {
    if (count === 0) {
      setData(false);
      return;
    }
    // fetchData();
    func()
    if (count === 1) {
      setData(true);
    }
  }, [count]);

  useEffect(() => {
    if (lastUserRef.current) {
      lastUserRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [users]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        textAlign: "center",
      }}
    >
      <div
        className="main-container"

        // style={{border:'2px solid black',height:'100px',width:'100px'}}
      >
        <h1>The count is {count}</h1>

        {/* <button
          style={{ display: data ? "none" : "hay" }}
          onClick={() => {
            if (count > 0) {
              console.log(data);
            }
          }}
        >
          fetch
        </button> */}
      </div>
      <Child increament={increament} decrement={decrement} />
      <div style={{ marginTop: "20px" }}>
        {data
          ? users.map((e, i) => {
              return (
                <div
                  key={i}
                  ref={i === users.length - 1 ? lastUserRef : null}
                  style={{
                    border: "2px solid black",
                    width: "500px",
                    textAlign: "center",
                    marginBottom: "2px",
                  }}
                >
                  <h1>{e.category}</h1>
                  <img src={e.image} alt={e.category} width={"100px"} />
                  <p>
                    Price:-
                    <spane style={{ textDecoration: "line-through #86A1FF" }}>
                      {e.price}
                    </spane>
                  </p>
                </div>
              );
            })
          : "NO Data Available Place clcik on fetch request"}
      </div>
      <Memo />
    </div>
  );
};

export default Parent;
