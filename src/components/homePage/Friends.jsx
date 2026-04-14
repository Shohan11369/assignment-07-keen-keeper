
import { HashLoader } from "react-spinners";
import useFriendsData from "../../hooks/useFriendsData";
import { Link } from "react-router";

const Friends = () => {
  
    const {friends, loading}= useFriendsData()

  return (
    <div className="bg-slate-50 min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Friends</h2>

        {/* Grid layout */}
        {loading ? (
          <div className="flex justify-center">
            <HashLoader color="#2f5d50"/>
          </div>

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map((friend) => {
              return (
                <Link
                  key={friend.id}
                  to={`/friend/${friend.id}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center transition-all hover:shadow-md"
                >
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src={friend.picture}
                      alt={friend.name}
                      className="w-20 h-20 rounded-full object-cover shadow-sm"
                    />
                  </div>

                  {/* Name - Time */}
                  <div className="text-center mb-3">
                    <h2 className="text-lg font-bold text-gray-700 leading-tight">
                      {friend.name}
                    </h2>
                    <p className="text-gray-400 text-xs mt-1">
                      {friend.days_since_contact}d ago
                    </p>
                  </div>

                  {/* Tags (Work/Family/Hobby) */}
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {friend.tags.map((tag, ind) => (
                      <span
                        key={ind}
                        className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`text-white text-[11px] font-bold px-5 py-1.5 rounded-full shadow-sm 
                  ${
                    friend.status.toLowerCase() === "overdue"
                      ? "bg-red-500"
                      : friend.status.toLowerCase() === "almost due"
                        ? "bg-orange-400"
                        : "bg-teal-700"
                  }`}
                  >
                    {friend.status}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
