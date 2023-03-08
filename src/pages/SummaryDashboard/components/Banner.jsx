const Banner = () => {
  const getHour = () => {
    const dateNow = new Date();
    const hourNow = dateNow.getHours();
    return hourNow;
  };

  const getTimeIsOpen = () => {
    const hourNow = getHour();
    if (hourNow >= 9 && hourNow <= 21) {
      return true;
    }
    return false;
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-slate-500 max-w-6xl rounded-lg my-4 py-2 sm:py-10">
        <div className="py-3">
          <h1 className="text-2xl sm:text-4xl text-center font-bold text-slate-50">
            Auction Status
          </h1>
          <h2 className="text-4xl sm:text-6xl text-center font-bold text-white mt-4">
            {getTimeIsOpen() ? "Open" : "Closed"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
