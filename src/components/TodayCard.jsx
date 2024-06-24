const TodayCard = ({ time, icon, temperature }) => {
  return (
    <li className="flex flex-col flex-shrink-0 w-24 h-28 bg-white/40 rounded-xl justify-around items-center">
      <p className="body-2 text-gray-900/60">{time}</p>
      <img src={icon} alt="" className="w-8 h-8" />
      <p className="body-3 text-gray-900">{temperature}°</p>
    </li>
  );
};

export default TodayCard;
