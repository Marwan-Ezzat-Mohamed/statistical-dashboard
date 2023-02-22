type ProgressProps = {
  progress: number;
  title: string;
  subtitle: string;
  color: string;
};

const Progress = ({ progress, title, subtitle, color }: ProgressProps) => {
  return (
    <div className="flex w-full items-center justify-between ">
      <Circle filled={progress === 100} color={color} />
      <div className="ml-2 flex w-7/12 flex-col">
        <label className="text-lg font-bold text-slate-700">{title}</label>
        <label className="text-sm text-slate-500">{subtitle}</label>
      </div>

      <ProgressBar progress={progress} color={color} />
    </div>
  );
};

export { Progress };

const Circle = ({ filled, color }: { filled: boolean; color: string }) => {
  return (
    <div className={`flex h-4 w-4 rounded-full border-2 border-${color}`}>
      <div
        className={`rounded-full bg-${color} ${filled ? "h-full w-full" : ""}`}
      ></div>
    </div>
  );
};
const ProgressBar = ({
  progress,
  color,
}: {
  progress: number;
  color: string;
}) => {
  return (
    <div className="flex w-3/12 items-center ">
      <div className="flex h-2.5 flex-grow rounded-full bg-gray-200 dark:bg-gray-200">
        <div
          className={`h-2.5 rounded-full bg-${color}`}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <div className={`ml-2 text-sm text-${color} font-bold`}>{progress}%</div>
    </div>
  );
};
