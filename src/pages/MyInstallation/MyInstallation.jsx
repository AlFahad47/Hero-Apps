import React, { useState } from "react";
import { loadList, removeFromlist } from "../../utility/localStorage";
import ratingImg from '../../assets/icon-ratings.png';
import downImg from '../../assets/icon-downloads.png'

const MyInstallation = () => {
  const [installList, setInstallList] = useState(() => loadList());
  const [sortOrder, setSortOrder] = useState("none");
function formatNumberRound(num) {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 });
  return formatter.format(num);
}

  if (!setInstallList.length) return <p>No data Available</p>;

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installList].sort((a, b) => b.size - a.size);
    } else {
      return installList;
    }
  })();

  const handleRemove = id => {
    // remove from localstorage
    removeFromlist(id)
    // for ui instant update
    setInstallList(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div className=" w-11/12 mx-auto">
      <div className="text-center my-20">
        <h2 className="font-bold text-5xl mb-4">Your Installed Apps</h2>
        <p className="font-normal text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="font-semibold text-2xl">(0) Apps Found</h2>

        {/* sort */}

        <label className="form-control w-full max-w-32">
          <select
            className="select select-bordered "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="size-desc">High-Low</option>
            <option value="size-asc">Low-High</option>
          </select>
        </label>
      </div>
      <div>
        {sortedItem.map((p) => (
          <div key={p.id} className="flex justify-between items-center bg-white rounded-sm mb-4 lg:p-4 p-2">
           <div className="flex lg:gap-4 gap-2 items-center">
             <img className="lg:w-20 lg:h-20 md:w-15 md:h-15 w-12 h-12 object-cover rounded-lg" src={p.image} alt="" />
            <div className="flex flex-col">
              <h2>{p.title}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1"><img className="w-4 h-4" src={downImg} alt="" />
                <p className="text-[#00D390] font-medium text-[16px]">{formatNumberRound(p.downloads)}</p></div>
                <div className="flex items-center gap-1"><img className="w-4 h-4"  src={ratingImg} alt="" />
                <p className="text-[#FF8811] font-medium text-[16px]">{p.ratingAvg}</p></div>
                <h2>{p.size}MB</h2>
              </div>
            </div>
           </div>
            <button onClick={() => handleRemove(p.id)} className="btn bg-[#00D390] text-white">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
