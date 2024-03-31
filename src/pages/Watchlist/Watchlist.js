import React, { useEffect } from "react";
import "./watchlist.css";
import { GlobalContext } from "../../Context/context1";
import { useContext } from "react";
import Card from "../Coinmodel/card-model/Card";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  let data = watchlist;
  useEffect(() => {
    console.log(watchlist);
  });
  return (
    <>
      <div className="container">
        {data && data.length > 0 ? (
          <Card data={data} />
        ) : (
          <>
            <h3>No WishList, go back to Home</h3>
            <button className="outline-none bg-blue-500 py-0.5 px-3 text-white shrink-0">Home</button>
          </>
        )}
      </div>
    </>
  );
}
