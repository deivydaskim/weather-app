import DetailsCard from './DetailsCard';

const WeatherDetails = () => {
  return (
    <section className="flex flex-col bg-indigo-50 rounded-xl p-5 my-6 justify-between">
      <h3 className="uppercase w-full body-2 text-gray-900/60">
        Weather Details
      </h3>
      <ul className="grid gap-5 sm:grid-cols-2 sm:grid-rows-4 md:grid-cols-4 md:grid-rows-2 w-full">
        <DetailsCard />
      </ul>
    </section>
  );
};

export default WeatherDetails;
