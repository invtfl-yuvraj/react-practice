import React from "react";
import reviews from "./data.js"
import Testimonials from "./components/Testimonials.js";
import { useState } from "react"

const App = () => {


  const [userId, setUserId] = useState(reviews[0].id);

  return <div className="flex flex-col justify-center items-center bg-slate-200 h-screen">

    <h2 className="text-3xl font-bold"> Our Testimonials</h2>
    <div className="h-1 w-40 bg-purple-400 mb-6"></div>

    <Testimonials usersData = {reviews} userId = {userId} setUserId = {setUserId}></Testimonials>
  </div>;
};

export default App;
