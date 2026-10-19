import React, { useState } from "react";
import {tootip,grow} from "@mui/material";
import { watchlist } from "../data/data";

i

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list"></ul>
    </div>
  );
};

export default WatchList;
