import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";
import ratingImg from "../../assets/icon-ratings.png";
import dawnImg from "../../assets/icon-downloads.png";
import reviewImg from "../../assets/icon-review.png";
import appsErrorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

import { updateList, loadList } from "../../utility/localStorage";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  const [installBtn, setInstallBtn] = useState(false);

  useEffect(() => {
    const list = loadList();
    if (list.some((l) => String(l.id) === id)) {
      setInstallBtn(true);
    }
  }, []);
  const handleClick = () => {
    setInstallBtn(true);
    toast.success(`${title} Installed Successfully!`);

    updateList(app);
  };

  function formatNumberRound(num) {
    const formatter = new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 0,
    });
    return formatter.format(num);
  }

  const app = apps.find((app) => String(app.id) === id);

    // show error no apps found if wrong id
  if (loading) return <Loading/>;

  if (!app) {
    return (
      <div className="lg:m-20 md:m-15 m-10 flex flex-col items-center">
        <img className="lg:w-[460px] md:w-[350px] " src={appsErrorImg} alt="" />
        <h2 className="font-semibold lg:text-5xl md:text-4xl  text-xl  mt-16">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="font-normal lg:text-xl text-sm text-[#627382] mb-4 mt-2 text-center">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to="/" className="btn bg-gradient text-white">
          Back to Home
        </Link>
      </div>
    );
  }



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

  const reversedRatings = [...ratings].reverse();
  console.log(reversedRatings);
  return (
    <div className="my-20">
      <div className="grid grid-cols-4 gap-10 max-w-11/12 mx-auto">
        <img className="col-span-1" src={image} alt="" />
        <div className="col-span-3">
          <h2 className="font-bold text-[32px]">{title}</h2>
          <p className="font-normal text-[20px] mb-[60px]">
            Developed by{" "}
            <span className="text-gradient font-semibold ">{companyName}</span>{" "}
          </p>
          <div className="flex lg:flex-row md:flex-row flex-col gap-6 mb-[30px]">
            <div>
              <img src={dawnImg} alt="" />
              <p className="font-normal text-[16px] lg:min-w-[150px] md:min-w-[150px] my-2">
                Downloads
              </p>
              <h2 className="font-extrabold lg:text-[40px] md:text-[40px] text-[20px]">
                {formatNumberRound(downloads)}
              </h2>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p className="font-normal text-[16px] lg:min-w-[150px] md:min-w-[150px] my-2">
                Average Ratings
              </p>
              <h2 className="font-extrabold lg:text-[40px] md:text-[40px] text-[20px]">{ratingAvg}</h2>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p className="font-normal text-[16px] lg:min-w-[150px] md:min-w-[150px] my-2">
                Total Reviews
              </p>
              <h2 className="font-extrabold lg:text-[40px] md:text-[40px] text-[20px]">
                {formatNumberRound(reviews)}
              </h2>
            </div>
          </div>
          <button
            onClick={handleClick}
            disabled={installBtn}
            className="btn bg-[#00D390] text-white"
          >
            {installBtn ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      {/* bar chart */}
      <div className="max-w-11/12 mx-auto h-60 my-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={reversedRatings}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <XAxis
              type="number"
              stroke="#627382"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="#627382"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="font-semibold text-2xl mb-5">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
