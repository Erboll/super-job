import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
const url = "https://startup-summer-2023-proxy.onrender.com/2.0/";
console.log(process.env);
const authAxios = axios.create({
  baseURL: url,
  headers: {
    "x-secret-key": process.env.REACT_APP_API_KEY,
    "X-Api-App-Id": process.env.REACT_APP_SECRET_KEY,
  },
});

function App() {
  const fetchdata = async () => {
    const result = await authAxios.get("/vacancies/?t=4&count=100");
    console.log(result.data);
  };
  fetchdata();
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
