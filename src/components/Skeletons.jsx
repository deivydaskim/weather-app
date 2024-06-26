const CurrentWeatherSkeleton = () => {
  return (
    <section className="flex h-40">
      <div className="flex flex-col justify-between">
        <div className="w-32 h-6 bg-[#D8D8D8]"></div>
        <div className="w-28 h-9 bg-[#D8D8D8]"></div>
        <div className="w-72 h-14 bg-[#D8D8D8]"></div>
      </div>
    </section>
  );
};

const TodaysForecastSkeleton = () => {
  return (
    <div className="bg-[#EAEAEA] rounded-xl p-5 mt-12">
      <div className="w-40 h-6 bg-[#D8D8D8]"></div>
      <div className="h-32"></div>
    </div>
  );
};

const WeatherDetailsSkeleton = () => {
  return (
    <div className="h-80 bg-[#EAEAEA] p-5 my-6 rounded-xl">
      <div className="h-7 w-40 bg-[#D8D8D8]"></div>
    </div>
  );
};

export { CurrentWeatherSkeleton, TodaysForecastSkeleton, WeatherDetailsSkeleton };
