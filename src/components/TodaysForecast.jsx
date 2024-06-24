import TodayCard from './TodayCard';

const TodaysForecast = () => {
  return (
    <section className="flex flex-col gap-4 bg-indigo-50 rounded-xl p-5 mt-12 justify-between">
      <h3 className="uppercase w-full body-2 text-gray-900/60">
        Todays Forecast
      </h3>
      <ul className="flex gap-3 h-28 w-full overflow-x-scroll no-scrollbar">
        <TodayCard />
      </ul>
    </section>
  );
};

export default TodaysForecast;
