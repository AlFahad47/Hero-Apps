import React, { useState } from "react";
import { loadList, removeFromlist } from "../../utility/localStorage";
import ratingImg from '../../assets/icon-ratings.png';
import downImg from '../../assets/icon-downloads.png'
import { toast } from "react-toastify";
import useApps from "../../hooks/useApps";
import Loading from "../../components/Loading/Loading";

const MyInstallation = () => {
      const { apps, loading , error } = useApps();

  const [installList, setInstallList] = useState(() => loadList());
  const [sortOrder, setSortOrder] = useState("none");
function formatNumberRound(num) {
  const formatter = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 });
  return formatter.format(num);
}

  if (!setInstallList.length) return <p>No data Available</p>;

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installList].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-desc") {
      return [...installList].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installList;
    }
  })();

  const handleRemove = (id,title) => {
    // remove from localstorage
    removeFromlist(id)
    // for ui instant update
    setInstallList(prev => prev.filter(p => p.id !== id))
    //toast
    toast(`${title} has been uninstalled from your device`)
  }
  if(loading) return <Loading/>
  return (
    <div className=" w-11/12 mx-auto">
      <div className="text-center my-20">
        <h2 className="font-bold text-5xl mb-4">Your Installed Apps</h2>
        <p className="font-normal text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between mb-5">
        <h2 className="font-semibold text-2xl">{installList.length} Apps Found</h2>

        {/* sort */}

        <label className="form-control w-full max-w-[165px]">
          <select
            className="select select-bordered "
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Download</option>
            <option value="downloads-desc">High-Low</option>
            <option value="downloads-asc">Low-High</option>
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
            <button onClick={() => handleRemove(p.id,p.title)} className="btn bg-[#00D390] text-white">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
