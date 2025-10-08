import React from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import ratingImg from "../../assets/icon-ratings.png";
import dawnImg from "../../assets/icon-downloads.png";
import reviewImg from "../../assets/icon-review.png";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

function formatNumberRound(num) {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 });
  return formatter.format(num);
}

  const app = apps.find((app) => String(app.id) === id);
  if (loading) return <p>loading</p>;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  const reversedRatings = [...ratings].reverse()
  console.log(reversedRatings)
  return (
    <div className="my-20">
      <div className="grid grid-cols-4 gap-10">
        <img className="col-span-1" src={image} alt="" />
        <div className="col-span-3">
          <h2 className="font-bold text-[32px]">{title}</h2>
          <p className="font-normal text-[20px] mb-[60px]">
            Developed by{" "}
            <span className="text-gradient font-semibold ">{companyName}</span>{" "}
          </p>
          <div className="flex gap-6 mb-[30px]">
            <div>
              <img src={dawnImg} alt="" />
              <p className="font-normal text-[16px] min-w-[150px] my-2">Downloads</p>
              <h2 className="font-extrabold text-[40px]">{formatNumberRound(downloads)}</h2>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p className="font-normal text-[16px] min-w-[150px] my-2">Average Ratings</p>
              <h2 className="font-extrabold text-[40px]">{ratingAvg}</h2>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p className="font-normal text-[16px] min-w-[150px] my-2">Total Reviews</p>
              <h2 className="font-extrabold text-[40px]">{formatNumberRound(reviews)}</h2>
            </div>
          </div>
          <button className="btn">Install Now ({size} MB)</button>
        </div>
      </div>
      {/* bar chart */}
      <div className="w-full h-60 my-10"><ResponsiveContainer  width="100%" height="100%">
          <BarChart
            data={reversedRatings}
         
            layout="vertical"
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <XAxis type="number" stroke="#627382"
              fontSize={12}
              tickLine={false}
              axisLine={false}  />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#627382"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar
              dataKey="count"
              fill="#FF8811"
            />
          </BarChart>
        </ResponsiveContainer></div>
      <div>
        <h2 className="font-semibold text-2xl">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
