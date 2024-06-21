import placeholder from '/icons/sun-icon.svg';

const TodayCard = () => {
  return (
    <li className="flex flex-col flex-shrink-0 w-24 h-28 bg-white/60 rounded-xl justify-around items-center">
      <p className="text-gray-900/60 font-['NunitoSemiBold']">06:00</p>
      <img src={placeholder} alt="" className="w-8 h-8" />
      <p className="text-gray-900 font-['NunitoBold']">10°</p>
    </li>
  );
};

export default TodayCard;
