import React from "react";
import dawnImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
const Card = ({ singleData }) => {
  console.log(singleData);
function formatNumberRound(num) {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 });
  return formatter.format(num);
}



  const {
    image,
    title,
    companyName,
    id,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleData || {};
  return (
    <div className="max-w-[348px] bg-white rounded-sm p-4">
      <img className="w-full h-[316px] object-cover mx-auto rounded-lg" src={image} alt="" />
      <h2 className="my-4">{title}</h2>
      <div className="flex justify-between">
        <div className="flex py-1.5 px-2.5 bg-[#F1F5E8] gap-2 justify-center items-center rounded-sm">
          <img src={dawnImg} className="w-4 h-4" alt="" />
          <h2 className="font-medium text-[16px] text-[#00D390]">{formatNumberRound(downloads)}</h2>
        </div>
        <div className="flex py-1.5 px-2.5 bg-[#F1F5E8] gap-2 justify-center items-center rounded-sm">
          <img src={ratingImg} className="w-4 h-4" alt="" />
          <h2 className="font-medium text-[16px] text-[#00D390]">{ratingAvg}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
