import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_options, base_URL } from "../../../services/Apiservice";
import "./coindetail.css";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CategoryScale } from "chart.js";

export default function Coindetail() {
  const [coindatail, setcoindatail] = useState([]);

  const { id } = useParams();
  

  const getdata = async () => {
    const res = await fetch(base_URL + "/coin/" + id, {
      options: api_options,
    });
    const data = await res.json();
    setcoindatail(data.data.coin);
    console.log(data.data.coin);
  };

  useEffect(() => {
    getdata();
  }, []);
  const chartratio = [];
  const coindatailSparkline = coindatail?.sparkline ?? []; // Use an empty array if coindatail or sparkline is undefined
  
  coindatailSparkline.forEach(element => {
    chartratio.push(element);
  });

 
  
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const data = {
    labels: labels,
    datasets: [
      {
        label: coindatail?.name ?? '', // Use an empty string if coindatail or name is undefined
        backgroundColor: "rgb(255, 186, 3)",
        borderColor: "rgb(255, 99, 132)",
        data: chartratio,
      },
    ],
    options: {
      responsive:true,
    }
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
