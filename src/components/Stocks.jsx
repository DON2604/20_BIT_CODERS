import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const Stocks = () => {
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [originalPrice, setOriginalPrice] = useState([]);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (numberOfDays !== null) {
          const response = await fetch(
            `https://hackfest-7r3c.onrender.com/predict/${numberOfDays}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          const closePrices = data.original_data.map((entry) => entry.Close);
          setPredictedPrice(data.predicted_price);
          setOriginalPrice(closePrices);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [numberOfDays]);

  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-800">
      <div className="items-center bg-gradient-to-r from-indigo-800">
        <form onSubmit={handleSubmit}>
          <label>Number of days:</label>
          <input
            type="number"
            placeholder="type here"
            value={numberOfDays}
            onChange={handleNumberOfDaysChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {predictedPrice !== null && (
        <div>
          <p>Predicted Price: {predictedPrice}</p>
        </div>
      )}

      <LineChart
        xAxis={[{ data: originalPrice.map((price, index) => index) }]}
        series={[{ data: originalPrice }]}
        width={1500}
        height={700}
      />
    </div>
  );
};

export default Stocks;
