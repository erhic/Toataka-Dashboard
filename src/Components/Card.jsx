const Card = ({ titleName, description, footer, cardWidth, cardColor }) => {
  return (
    <div className="bg-white">
      <div
        className={`flex flex-col gap-2 h-[130px] text-white rounded-xl shadow-md p-6 ${cardWidth} ${cardColor} bg-opacity backdrop-filter backdrop-blur-lg font-palanquin`}
      >
        <div className="font-semibold text-lg">{titleName}</div>
        <div className="font-semibold text-2xl tracking-tight">
          {description}
        </div>
        <div className="font-normal">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
