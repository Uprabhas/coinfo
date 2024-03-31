import React, { useContext,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
          <div className="col-md-2 bold m-4 pt-2">
          <button type="button" class="btn btn-secondary" disabled={savebtndisabled} onClick={()=>addcointowatchlist(coindatail)} >save</button>
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
