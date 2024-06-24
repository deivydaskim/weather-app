const DetailsCard = ({ title, value, icon }) => {
  return (
    <li className="flex h-28 p-5 bg-white/40 rounded-xl justify-between items-center">
      <div className="flex flex-col justify-between h-full">
        <h4 className="body text-gray-900/60">{title}</h4>
        <p className="headline-m text-gray-900">{value}</p>
      </div>
      <img className="opacity-60" src={icon} alt={title + ' icon'} />
    </li>
  );
};

export default DetailsCard;
