// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/invtfl-yuvraj")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);
  //   console.log(data);

  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center bg-red-200 p-10 flex-col gap-4">
      <h2 className="text-2xl font-bold">GitHub Followers : {data.followers}</h2>
      <img src={data.avatar_url} alt="profile-pic" className="rounded-xl" />
    </div>
  );
};

export default Github;
