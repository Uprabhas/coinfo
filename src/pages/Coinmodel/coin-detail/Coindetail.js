import React, { useContext,useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api_options, base_URL } from "../../../services/Apiservice";
import "./coindetail.css";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {GlobalContext} from '../../../Context/context1'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


export default function Coindetail() {

  const { addcointowatchlist, watchlist } = useContext(GlobalContext);

  const { id } = useParams();
  const [coindatail, setcoindatail] = useState({}); // Initialize with an object
  let stordcoins = watchlist.find(val => val.uuid === coindatail.uuid);
  const savebtndisabled = stordcoins ? true : false;

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await fetch(`${base_URL}/coin/${id}`, {
          options: api_options,
        });
        const data = await res.json();
        setcoindatail(data.data.coin);
        console.log(data.data.coin);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); 


  const chartratio = coindatail?.sparkline ?? [];
  const labels = Array.from({ length: chartratio.length }, (_, i) => i + 1); // Dynamically generate labels based on chartratio length
  const data = {
    labels: labels,
    datasets: [
      {
        label: coindatail?.name ?? '',
        backgroundColor: "rgb(255, 186, 3)",
        borderColor: "rgb(255, 99, 132)",
        data: chartratio,
      },
    ],
  };
  
  

  return (
    <div>
      <div className="container-fluid">
        <div className="header row">
          <div className="col-md-3 common">
            <p className="coin m-2">
              <span className="icon">
                <img class="report" src={coindatail?.iconUrl} />
              </span>
            </p>
            <div className="title">
              <label className="pr-2">{coindatail?.name}</label>
            </div>
            <div className="sym">
              <label className="pt-1">{coindatail?.symbol}</label>
            </div>
          </div>
          <div className="col-md-2 bold m-4 pt-2">
            <h5>${coindatail?.price}</h5>
          </div>
          <div className="col-md-1 bold m-4 pt-2">
          <button type="button" class="btn btn-secondary" disabled={savebtndisabled} onClick={()=>addcointowatchlist(coindatail)} >save</button>
          </div>
          <div className="col-md-1 bold m-4 pt-2">
          <Link class="active" to="/currency">
          <svg tooltip="currency exchange" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
  <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"/>
</svg>
          </Link>
          </div>
        </div>
        <section>
          <div className="container m-2">
            <Card>
              <CardContent>
                <Line data={data} />
              </CardContent>
            </Card>
          </div>

          <div className="row">
            <Card className="c-info col-md-6 m-2 " sx={{ maxWidth: 600 }}>
              <h3 className="m-2">Value statistics</h3>
              <CardContent className="">
                <Typography variant="body2 row" color=" text.secondary">
                  <label className="b-name col-sm-6 text-start mt-1">
                    price to USD
                  </label>
                  <div className="b-value col-sm-6 text-end">${coindatail?.price}</div>
                </Typography>
                <Typography variant="body2 row" color=" text.secondary">
                  <label className="b-name col-sm-6 text-start mt-1">
                    coin Rank
                  </label>
                  <div className="b-value text-end col-sm-6"> #{coindatail.rank}</div>
                </Typography>
                <Typography variant="body2 row" color=" text.secondary">
                  <label className=" b-name col-sm-5 text-start mt-1">
                    price to {coindatail.symbol}
                  </label>
                  <div className="b-value col-sm-6 text-end">{coindatail.btcPrice} {coindatail.symbol}</div>
                  
                </Typography>
                <Typography variant="body2 row" color=" text.secondary">
                  <label className="b-name col-sm-6 text-start mt-1">
                    Market cap
                  </label>
                  <div className="b-value col-sm-6 text-end">
                    ${coindatail.marketCap}
                  </div>
                </Typography>
                <Typography variant="body2 row" color=" text.secondary">
                  <label className="b-name col-sm-6 text-start mt-1">
                    Fully diluted market cap
                  </label>
                  <div className="b-value col-sm-6 text-end">
                    ${coindatail.fullyDilutedMarketCap}
                  </div>
                </Typography>
                <Typography variant="body2 row" color=" text.secondary">
                  <label className="b-name col-sm-6 text-start mt-1">
                    All-time high
                  </label>
                  <div className="b-value col-sm-6 text-end">
                    ${coindatail?.allTimeHigh?.price}
                  </div>
                </Typography>
              </CardContent>
            </Card>
            <Card className="c-info col-md-6 m-2" sx={{ maxWidth: 600 }}>
              <h4 className="m-2">Coin supply</h4>
              <CardContent>
                <Typography
                  variant="body2 row"
                  color=" text.secondary"
                  gutterBottom
                >
                  <label className="b-name col-sm-6">Circulating</label>
                  <div className="b-value col-sm-6">
                    ${coindatail?.supply?.circulating}
                  </div>
                </Typography>
                <Typography
                  variant="body2 row"
                  sx={{ mb: 1.5 }}
                  color=" text.secondary"
                >
                  <label className="b-name col-sm-6">Total Market</label>
                  <div className="b-value col-sm-6">${coindatail?.supply?.total}</div>
                </Typography>
                <Typography
                  variant="body2 row"
                  sx={{ mb: 1.5 }}
                  color=" text.secondary"
                >
                  <label className="b-name col-sm-6">Max</label>
                  <div className="b-value col-sm-6">${coindatail?.supply?.max}</div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
