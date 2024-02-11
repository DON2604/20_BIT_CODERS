import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart'; 
const Stocks = () => {
  return (
    
    <>
    <div className="items-center bg-gradient-to-r from-indigo-800">
    <form>
    <label >Number of days:</label>
    <input type='number' placeholder='type here'></input>
    </form></div>

    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
    </>
  );
}

export default Stocks