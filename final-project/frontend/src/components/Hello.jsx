import React, { useState } from "react";
import HomeButton from "./buttons/Home-Button";

const Hello = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track errors if any

  // Function to handle the button click and fetch data from the backend
  const handleFetchData = () => {
    setLoading(true); // Set loading to true while data is being fetched
    setError(null); // Clear any previous errors

    fetch("http://localhost:3002/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data from response
      })
      .then((result) => {
        setData(result); // Store the result in the state
      })
      .catch((error) => {
        setError(error.message); // Set error message if fetch fails
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the fetch is complete
      });
  };

  return (
    <div>
      <header>
        <h1 style={{ color: "cornflowerblue" }}>SECRET TUNNNELLLL</h1>
      </header>
      <br />

      <button
        style={{ color: "black", fontSize: "20px" }}
        onClick={handleFetchData}
      >
        {loading ? "Loading..." : "🧀 SECRET SECRET SECRET 🧀 "}
      </button>
      <br />
      <br />
      <br />
      <br />

      {/* Show loading message while fetching */}
      {loading && <p>Loading data...</p>}

      {/* Show error message if any error occurs */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Display data once it's fetched */}
      {data.length > 0 && (
        <div>
          <pre style={{ color: "orange", fontSize: "35px" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
          <div>
            <br />
            <p style={{ fontSize: "30px" }}>
              ....Okay, go back to {" "}
            </p>
            <br />
            <HomeButton />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hello;

// import dotenv from "dotenv";

// dotenv.config();

// const client = new MongoClient(process.env.MONGODB_URI);

// const errorResponse = (error) => {
//   console.error("FAIL", error);
//   return { message: "Internal Server Error" };
// };

// const sayHello = async () => {
//   try {
//     await client.connect();
//     const collection = client.db().collection("one");
//     const result = await collection.find({}).toArray();

//     return result;
//   } catch (error) {
//     return errorResponse(error);
//   } finally {
//     await client.close();
//   }
// };

// export default sayHello;
