import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_options, base_URL } from "../../../services/Apiservice";
import "./coindetail.css";
import { Line } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="header row">
          <div className="col-md-2 common">
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
          <div className="col-md-2 bold m-4">
            <h5>${coindatail.price}</h5>
          </div>
        </div>
        <section>
          <div className="container m-2">
            <Card >
              <CardContent>
                <Line data={data} />
              </CardContent>
            </Card>
          </div>

          <div className="row">
            <Card className="c-info col-md-6 m-2" sx={{ maxWidth: 600 }}>
              <h4 className="m-2">Coin Info</h4>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  price to USD  ${coindatail.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  coin Rank #{coindatail.rank}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 price to {coindatail.symbol} {coindatail.btcPrice} {coindatail.symbol}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Market cap${coindatail.marketCap}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Fully diluted market cap ${coindatail.fullyDilutedMarketCap}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* All-time high ${coindatail.allTimeHigh.price} */}
                </Typography>
              </CardContent>
            </Card>
            <Card className="c-info col-md-6 m-2" sx={{ maxWidth: 600 }}>
              <h4 className="m-2">Coin supply</h4>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
