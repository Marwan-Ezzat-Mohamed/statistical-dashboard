import InformationCard from "./InformationCard";

import {
  barChartMock,
  lineGraphMock,
  bumpGraphMock,
  informationCardMock,
  progresMock as progressMock,
} from "./../mocks/index";

import { LineGraph } from "./LineGraph";
import { BumpGraph } from "./BumpGraph";
import Progress from "./Progress";
import { BarChart } from "./BarChart";
import { memo } from "react";
import { GraphCard } from "./GraphCard";

const colors = ["red", "blue", "gold", "violet"];

const Home = () => {
  return (
    <div className="flex h-full flex-col overflow-auto overflow-x-hidden bg-slate-100 py-8 px-6 md:w-full lg:w-8/12 xl:w-7/12">
      <label className="text-2xl font-bold text-slate-500">Overview</label>
      <section className="mt-10 flex w-full flex-wrap justify-center gap-6">
        <TopCards />
      </section>
      <section className=" mt-4 w-full justify-between 2xl:flex">
        <div className="flex h-80 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-5 2xl:w-7/12 ">
          <GraphCard
            label="Planned and Actual Expenses"
            GraphComponent={BarChart}
            graphComponentProps={{ data: barChartMock }}
          />
        </div>
        <div className="flex h-80 w-5/12 flex-auto flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:ml-5 2xl:mt-0 2xl:w-5/12">
          <GraphCard
            label="Monthly milestones"
            GraphComponent={ProgressCards}
            graphComponentProps={{ data: progressMock }}
          />
        </div>
      </section>
      <section className=" mt-4 w-full justify-between  2xl:flex">
        <div className="flex h-80 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-5 2xl:w-8/12">
          <GraphCard
            label="Annual Leads Dynamic"
            GraphComponent={LineGraph}
            graphComponentProps={{ data: lineGraphMock }}
          />
        </div>
        <div className="flex h-80 flex-auto flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:mt-0 2xl:ml-5 2xl:w-4/12">
          <GraphCard
            label="Weekly OSI Dynamic"
            GraphComponent={BumpGraph}
            graphComponentProps={{ data: bumpGraphMock }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

const TopCards = memo(() => {
  return (
    <>
      {informationCardMock.map((card, index) => (
        <InformationCard
          value={card.value}
          title={card.title}
          color={`bg-${colors[index]}`}
          key={card.id}
        />
      ))}
    </>
  );
});

const ProgressCards = memo(({ data }: { data: any }) => {
  return (
    <>
      {data.map(
        (
          progress: {
            id: number;
            progress: number;
            title: string;
            subtitle: string;
          },
          index: number
        ) => (
          <Progress
            progress={progress.progress}
            title={progress.title}
            subtitle={progress.subtitle}
            color={colors[index % 2]}
            key={progress.id}
          />
        )
      )}
    </>
  );
});
