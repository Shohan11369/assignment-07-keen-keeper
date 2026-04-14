import React, { useState, useMemo } from "react";
import useFriendsData from "../../hooks/useFriendsData";
import { HashLoader } from "react-spinners";
import {
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoVideocamOutline,
  IoPeopleOutline,
} from "react-icons/io5";

const TimeLine = () => {
  const { friends, loading } = useFriendsData();
  const [filterType, setFilterType] = useState("All");

 
  const allInteractions = useMemo(() => {
    if (!friends) return [];
    return friends.reduce((acc, friend) => {
      const friendInteractions = (friend?.interactions || []).map((interaction) => ({
        ...interaction,
        friendName: friend.name,
        friendPicture: friend.picture,
      }));
      return [...acc, ...friendInteractions];
    }, []);
  }, [friends]);

  
  const processedInteractions = useMemo(() => {
    let result = [...allInteractions];

    
    if (filterType !== "All") {
      result = result.filter((item) => {
        if (filterType === "Calls") return item.type === "Call";
        if (filterType === "Texts") return item.type === "Text";
        if (filterType === "Video") return item.type === "Video" || item.type === "Video";
        return true;
      });
    }

    
    return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [allInteractions, filterType]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader color="#2f5d50" />
      </div>
    );

  return (
    <div className="bg-slate-50 min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Timeline</h1>

        {/* filter option */}
        <div className="mb-6">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2 outline-none shadow-sm w-48 cursor-pointer"
          >
            <option value="All">Filter timeline (All)</option>
            <option value="Calls">Calls</option>
            <option value="Texts">Texts</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* timeline list*/}
        <div className="space-y-4">
          {processedInteractions.length > 0 ? (
            processedInteractions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-50 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-gray-100">
                    {item.type === "Call" && (
                      <IoCallOutline className="text-slate-600" />
                    )}
                    {item.type === "Text" && (
                      <IoChatbubbleEllipsesOutline className="text-slate-600" />
                    )}
                    {item.type === "Video" && (
                      <IoVideocamOutline className="text-slate-600" />
                    )}
                    {(item.type === "Meetup" || item.type === "Meeting") && (
                      <span className="text-xl">🤝</span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-700">
                      {item.type}{" "}
                      <span className="text-gray-400 font-medium italic">with</span>{" "}
                      {item.friendName}
                    </h4>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">
                     
                      {new Date(item.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE*/}
                <div className="text-gray-300">
                  <IoPeopleOutline className="text-lg" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">No interactions found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;