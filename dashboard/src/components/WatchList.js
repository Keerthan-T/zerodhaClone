import React, { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";



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

      <ul className="list">
        {watchlist.map((stock, index) => {
          return (<WatchlistItem stock={stock} key={stock.name ?? index} />)

        })}
      </ul>
    </div>
  );
};

export default WatchList;
const WatchlistItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>

        </div>
      </div>
      {showWatchlistActions && <WatchlistActions uid={stock.name} />}
    </li>
  );
};
// {showWatchlistActions && (
//         <div className="actions">
//           <button type="button" aria-label={`Buy ${stock.name}`}>Buy</button>
//           <button type="button" aria-label={`Sell ${stock.name}`}>Sell</button>
//         </div>
//       )}
const WatchlistActions = ({ uid }) => {
  return (
    <span className="actions">
      <span style={{ display: "flex", alignItems: "center", gap: "1px" }}>
        <Tooltip title="buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="sell (s)"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>



        <Tooltip title="analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="chart (c)"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="action center" style={{textAlign: "center"}}>Chart</button>
        </Tooltip>

        <Tooltip title="more"
          placement="top"
          arrow
          TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>


        
      </span>
    </span>

  );
};
