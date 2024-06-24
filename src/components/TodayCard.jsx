import placeholder from '/icons/sun-icon.svg';

const TodayCard = () => {
  return (
    <li className="flex flex-col flex-shrink-0 w-24 h-28 bg-white/40 rounded-xl justify-around items-center">
      <p className="body-2 text-gray-900/60">06:00</p>
      <img src={placeholder} alt="" className="w-8 h-8" />
      <p className="body-3 text-gray-900">10°</p>
    </li>
  );
};

export default TodayCard;
