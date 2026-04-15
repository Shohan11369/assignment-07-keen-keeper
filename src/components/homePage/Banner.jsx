const Banner = () => {
  return (
    <div className="bg-gray-100 min-h-[50vh]">
      <div className="container mx-auto">
        <div className="text-center space-y-2">
          <div className="p-10 ">
            <h2 className="mb-3 text-2xl font-bold">
              Friends to keep close in your life
            </h2>
            <p className="text-md text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture <br /> the relationships that matter most.
            </p>
          </div>
          <div>
            <button className="btn rounded-full bg-[#244D3F] text-white">
              Add a Friend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="p-4 bg-gray-50 text-center rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-gray-600">Total Friends</p>
          </div>

          <div className="p-6 bg-gray-50 text-center rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold">3</h2>
            <p className="text-gray-600">On Track</p>
          </div>

          <div className="p-6 bg-gray-50 text-center rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold">6</h2>
            <p className="text-gray-600">Need Attention</p>
          </div>

          <div className="p-6 bg-gray-50 text-center rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-gray-600">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
