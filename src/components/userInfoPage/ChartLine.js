import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts';

const data = [
  {
    name: "1'44",
    라이더비율: 0.02,
    amt: 2400,
  },
  {
    name: "1'50",
    라이더비율: 0.24,
    amt: 2210,
  },
  {
    name: "1'56",
    라이더비율: 2.49,
    amt: 2290,
  },
  {
    name: "2'02",
    라이더비율: 2.00,
    amt: 2000,
  },
  {
    name: "2'08",
    라이더비율: 2.19,
    amt: 2181,
  },
  {
    name: "2'20",
    라이더비율: 1.45,
    amt: 2500,
  },
  {
    name: "2'26",
    라이더비율: 1.10,
    amt: 2100,
  },
];

const ChartLine = () => { 
  return (
    <>
      <LineChart width={500} height={300} data={data} margin={{ top: 50, right: 50, left: 50, bottom: 2 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="라이더비율" stroke="#0077ff" yAxisId={0} />
      </LineChart>
    </>
  );
}

export default ChartLine;