type DataCardProps = {
  value: number;
  title: string;
  //tailwind color
  color?: string;
};

const InformationCard = ({ value, title, color }: DataCardProps) => {
  //10k , 10m , 10b
  const formattedNumber = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",

    maximumFractionDigits: 1,
  }).format(value);

  return (
    <div
      className={
        "flex flex-col items-center justify-start rounded-3xl  p-5 px-4 shadow-lg " +
        color
      }
      style={{
        width: "250px",
      }}
    >
      <div className="flex flex-col ">
        <span className="text-3xl font-medium text-white">
          {formattedNumber}
        </span>
        <span className="text-xl text-white">{title}</span>
      </div>
    </div>
  );
};

export  {InformationCard};
