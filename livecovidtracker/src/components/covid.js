import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  // use effect hook

  const getCovidData = async () => {
    // using fetch to call the json data, it returns a promise menas it will be resolve() or reject()
    try {
      const response = await fetch("https://data.covid19india.org/data.json", {
        mode: "cors",
      });
      const actualData = await response.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      getCovidData();
    };
  }, []); // empty bracket means only runs when first time page is loaded

  return (
    <>
      <section>
        <h1>Live Data</h1>
        <h2>Faaiz Covid Tracker</h2>
        <ul>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span> COUNTRY
                </p>
                <p className="card__total card__small"> INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>
                  Recovered
                </p>
                <p className="card__total card__small"> {data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>TOTAL</span>
                </p>
                <p className="card__total card__small"> {data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>
                </p>
                <p className="card__total card__small"> {data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>
                </p>
                <p className="card__total card__small">
                  {" "}
                  {data.lastupdatedtime}
                </p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>OUR</span>
                </p>
                <p className="card__total card__small"> INDIA</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
