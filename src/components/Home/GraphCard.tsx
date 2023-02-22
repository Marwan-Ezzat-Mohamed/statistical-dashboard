import { memo } from "react";
const GraphCard = memo(
  ({
    label,
    GraphComponent,
    graphComponentProps: graphData,
  }: {
    label: string;
    GraphComponent: React.FC<any>;
    graphComponentProps: {
      data: unknown;
    };
  }) => {
    return (
      <div className="flex flex-1 flex-col">
        <label className="mb-5 text-xl font-bold text-slate-700">{label}</label>
        <div className="flex flex-1 flex-col space-y-2 overflow-auto overflow-x-hidden">
          <GraphComponent {...graphData} />
        </div>
      </div>
    );
  }
);

export { GraphCard };
