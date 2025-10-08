import React from "react";
import Card from "../Card/Card";

const Top = ({data}) => {
    // console.log(data)
  return (
    <div className="m-20 flex flex-col items-center">
      <div className="text-center mb-10"><h2 className="font-bold text-5xl mb-4">Trending Apps</h2>
      <p className="font-normal text-xl text-[#627382]">Explore All Trending Apps on the Market developed by us</p></div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-10">
        {
            [...data]
      .sort((a, b) => parseFloat(b.ratingAvg) -parseFloat(a.ratingAvg) )
      .slice(0, 8).map(singleData=><Card key={singleData.id} singleData={singleData}></Card>)
        }
      </div>
      <button className="btn bg-gradient text-white">Show All</button>
    </div>
  );
};

export default Top;
