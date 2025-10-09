import React from "react";
import Card from "../../components/Card/Card";
import useApps from "../../hooks/useApps";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  console.log();

  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className=" w-11/12 mx-auto">
      <div className="text-center my-20">
        <h2 className="font-bold text-5xl mb-4">Our All Applications</h2>
        <p className="font-normal text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="font-semibold text-2xl">
          ({searchedApps.length}) Apps Found
        </h2>

        {/* search */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="search Apps"
          />
        </label>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-10">
          {searchedApps.map((singleData) => (
            <Card singleData={singleData}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
