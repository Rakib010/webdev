import React from "react";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Statistics | GadgetHeaven</title>
      </Helmet>
      <Heading
        title="Statistics"
        subtitle="Join a community of tech enthusiasts with over 10,000 satisfied customers and a 4.5-star average rating. With 95% reporting increased convenience and productivity, our gadgets are designed to enhance every experience."
      />
      <div className="mt-20"></div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" />
          <YAxis dataKey="price" />
          <Tooltip/>
          <Area
            type="monotone"
            dataKey="price"
            fill="#CDC1FF"
            stroke="#CB80AB"
          />
          <Bar dataKey="price" barSize={20} fill="#7E60BF" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
