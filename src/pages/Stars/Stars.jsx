import React, { useMemo } from "react";
import useFriendsData from "./../../hooks/useFriendsData";
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts";
import { HashLoader } from "react-spinners";

const Stars = () => {
  const { friends, loading } = useFriendsData();

  const allInteractions = useMemo(() => {
    if (!friends) return [];
    return friends.reduce((acc, friend) => {
      const friendInteractions = (friend?.interactions || []).map(
        (interaction) => ({
          ...interaction,
        }),
      );
      return [...acc, ...friendInteractions];
    }, []);
  }, [friends]);

  // stars
  const starsData = useMemo(() => {
    let text = 0;
    let call = 0;
    let video = 0;

    allInteractions.forEach((item) => {
      if (item.type === "Text") text++;
      else if (item.type === "Call") call++;
      else if (item.type === "Video") video++;
    });

    return [
      { name: "Text", value: text },
      { name: "Call", value: call },
      { name: "Video", value: video },
    ];
  }, [allInteractions]);

  const COLORS = ["#7c3aed", "#1f7a63", "#34d399"];

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader color="#2f5d50" />
      </div>
    );

  return (
    <div className="bg-slate-50 min-h-screen p-6 md:p-10">
      <h1 className="text-2xl font-bold text-black mb-6">
        Friendship Analytics
      </h1>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        {/* pie chart */}

        <h2 className="text-xl font-semibold text-[#2f5d50]">
          By Interaction Type
        </h2>

        <div className="flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              data={starsData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {starsData.map((entry, index) => {
                return <Cell key={`cell-${index}`} fill={COLORS[index]}></Cell>;
              })}
            </Pie>
            <Tooltip />

            <Label
              value={allInteractions.length}
              position="center"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fill: "#334155",
              }}
            />
          </PieChart>
        </div>

        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
            Text
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#1f7a63] rounded-full"></span>
            Call
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
            Video
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
