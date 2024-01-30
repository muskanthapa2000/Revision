import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gettingDataSuccess } from '../redux/action';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts';

function Emisson() {
  const selector = useSelector((store) => store.data);
  console.log(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingDataSuccess());
  }, []);

  // Filter data for 2022 and 2023
  const data2022 = selector.filter((entry) => entry.year === 2022);
  const data2023 = selector.filter((entry) => entry.year === 2023);

  // Combine and filter unique months
  const combinedData = Array.from(new Set([...data2022, ...data2023])).filter(
    (entry, index, self) => self.findIndex((e) => e.month === entry.month) === index
  );

  return (
    <div>
      <h1>HOME</h1>
      <BarChart width={800} height={400} data={combinedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" label={{ value: 'Emissions', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'Revenue', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />

        {/* Bar for 2022 emissions */}
        <Bar dataKey="emissions" fill="#8884d8" name="2022 Emissions" yAxisId="left" />

        {/* Bar for 2023 emissions */}
        <Bar dataKey="emissions" fill="#00ff00" name="2023 Emissions" yAxisId="left" />

        {/* Line for 2022 revenue */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#ff0000"
          yAxisId="right"
          name="2022 Revenue"
        />

        {/* Line for 2023 revenue */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#ff9900"
          yAxisId="right"
          name="2023 Revenue"
        />
      </BarChart>
    </div>
  );
}

export default Emisson;
