import { Link, useParams } from "react-router";
import useFriendsData from "../../hooks/useFriendsData";
import { HashLoader } from "react-spinners";
import { IoCallOutline } from "react-icons/io5";
import { FiMessageSquare, FiVideo } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading, setFriends } = useFriendsData();

  const friend = friends?.find((f) => f.id === parseInt(id));

  const handleAction = (type) => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    // Success Toast
    toast.success(`Successfully logged ${type} interaction!`);

    const newInteraction = {
      type: type,
      bio: `Contacted via ${type.toLowerCase()}`,
      date: today,
    };

    const updatedFriends = friends.map((f) => {
      if (f.id === parseInt(id)) {
        return {
          ...f,
          interactions: [newInteraction, ...(f.interactions || [])],
        };
      }
      return f;
    });

    setFriends(updatedFriends);
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader color="#2f5d50" />
      </div>
    );

  if (!friend)
    return <div className="text-center p-10 font-bold">Friend not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-10 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">friend Details</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* left side */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
              />

              <h2 className="text-2xl font-bold">{friend.name}</h2>

              <div className="flex flex-col items-center gap-2 mt-3">
                <span
                  className={`text-[10px] font-bold px-4 py-1 rounded-full uppercase text-white shadow-sm
                                ${friend.status === "overdue" ? "bg-red-500" : "bg-green-500"}`}
                >
                  {friend.status}
                </span>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-4 py-1 rounded-full uppercase">
                  {friend.tags[0]}
                </span>
              </div>
              <p className="text-gray-500 italic text-sm mt-8 leading-relaxed">
                "{friend.bio}"
              </p>

              {/* Action Buttons */}
              <div className="w-full mt-10 space-y-3">
                <button className="w-full py-3 border border-gray-200 rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all">
                  Snooze 2 Weeks
                </button>
                <button className="w-full py-3 border border-gray-200 rounded-2xl text-sm font-bold hover:bg-gray-50 transition-all">
                  Archive
                </button>
                <button className="w-full py-3 border border-red-100 text-red-500 rounded-2xl text-sm font-bold hover:bg-red-50 transition-all">
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="lg:col-span-8 space-y-6">
            {/* card*/}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
                <h3 className="text-4xl font-black text-slate-700">
                  {friend.days_since_contact}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-wider">
                  Days Since Contact
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
                <h3 className="text-4xl font-black text-slate-700">
                  {friend.goal}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-wider">
                  Goal (Days)
                </p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-gray-50">
                <h3 className="text-xl font-bold text-teal-600 mt-3">
                  {friend.next_due_date}
                </h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase mt-2 tracking-wider">
                  Next Due
                </p>
              </div>
            </div>

            {/* Goal section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-800">Relationship Goal</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Connect every{" "}
                  <span className="font-bold text-black">
                    {friend.goal} days
                  </span>
                </p>
              </div>
              <button className="px-5 py-2 border rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
                Edit
              </button>
            </div>

            {/* Quick section */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
              <h4 className="font-bold text-slate-800 mb-6 uppercase text-xs tracking-widest">
                Quick Check-In
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleAction("Call")}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all gap-2 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    <IoCallOutline />
                  </span>
                  <span className="text-[10px] font-black uppercase text-slate-500">
                    Call
                  </span>
                </button>
                <button
                  onClick={() => handleAction("Text")}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all gap-2 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    <FiMessageSquare />
                  </span>
                  <span className="text-[10px] font-black uppercase text-slate-500">
                    Text
                  </span>
                </button>
                <button
                  onClick={() => handleAction("Video")}
                  className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all gap-2 group"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    <FiVideo />
                  </span>
                  <span className="text-[10px] font-black uppercase text-slate-500">
                    Video
                  </span>
                </button>
              </div>
            </div>

            {/* recent interactions */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-slate-800 uppercase text-xs tracking-widest">
                  Recent Interactions
                </h4>
                <button className="text-[10px] font-black text-slate-400 bg-gray-50 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-all uppercase tracking-tighter">
                  {" "}
                  Full History
                </button>
              </div>

              <div className="space-y-6">
                {friend.interactions && friend.interactions.length > 0 ? (
                  friend.interactions.map((interaction, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start border-b border-gray-50 pb-6 last:border-0"
                    >
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-lg shadow-sm">
                          {interaction.type === "Call" && <IoCallOutline />}
                          {interaction.type === "Text" && <FiMessageSquare />}
                          {interaction.type === "Video" && <FiVideo />}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-700 uppercase tracking-tighter">
                            {interaction.type}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {interaction.bio}
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">
                        {interaction.date}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400 py-4 italic">
                    No interactions yet.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
