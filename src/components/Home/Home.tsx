import { InformationCard } from "./InformationCard";

import {
  barChartMock,
  lineGraphMock,
  bumpGraphMock,
  informationCardMock,
  progressMock,
} from "./../mocks/index";

import { LineGraph } from "./LineGraph";
import { BumpGraph } from "./BumpGraph";
import { Progress } from "./Progress";
import { BarChart } from "./BarChart";
import { memo } from "react";
import { GraphCard } from "./GraphCard";
import { HiSearch } from "react-icons/hi";

const colors = ["red", "blue", "gold", "violet"];

const Home = () => {
  const fullDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(new Date());

  const tinyDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
  return (
    <div className="flex h-full flex-col overflow-auto overflow-x-hidden bg-slate-100 px-6 pt-8  pb-4 md:w-full lg:w-8/12 xl:w-3/5">
      <div className="flex w-full items-center justify-between">
        <label className="text-2xl font-bold text-slate-500">Overview</label>
        <div className="flex items-center space-x-3 text-2xl font-bold text-slate-500">
          <label className="hidden text-2xl font-bold text-slate-500 md:flex">
            {fullDate}
          </label>
          <label className="flex text-2xl font-bold text-slate-500 md:hidden">
            {tinyDate}
          </label>
          <HiSearch className="rounded-xl bg-slate-200 p-2 text-5xl text-violet hover:cursor-pointer" />
        </div>
      </div>
      <section className="mt-10 flex w-full flex-wrap justify-center gap-4">
        <TopCards />
      </section>
      <div className="mt-4 flex flex-grow flex-col gap-4">
        <section className="h-2/4 w-full flex-grow justify-between 2xl:flex">
          <div className="flex h-full max-h-96 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-2 2xl:w-8/12">
            <GraphCard
              label="Planned and Actual Expenses"
              GraphComponent={BarChart}
              graphComponentProps={{ data: barChartMock }}
            />
          </div>
          <div className="flex w-5/12 flex-grow flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:ml-2 2xl:mt-0 2xl:w-5/12">
            <GraphCard
              label="Monthly milestones"
              GraphComponent={ProgressCards}
              graphComponentProps={{ data: progressMock }}
            />
          </div>
        </section>
        <section className="h-2/4 w-full flex-grow justify-between 2xl:flex">
          <div className="flex h-full max-h-96 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-2 2xl:w-8/12">
            <GraphCard
              label="Annual Leads Dynamic"
              GraphComponent={LineGraph}
              graphComponentProps={{ data: lineGraphMock }}
            />
          </div>
          <div className="flex h-full max-h-96 flex-grow flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:mt-0 2xl:ml-2 2xl:w-4/12">
            <GraphCard
              label="Weekly OSI Dynamic"
              GraphComponent={BumpGraph}
              graphComponentProps={{ data: bumpGraphMock }}
            />
          </div>
        </section>
      </div>
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
    <div
      className="h-full w-full overflow-y-auto"
      style={{
        //         flex: 1 1 auto;
        //   overflow-y: auto;
        //   overflow-x: hidden;
        //   min-height: 200px;
        //   height: 0px;
        flex: "1 1 auto",
        overflowY: "auto",
        overflowX: "hidden",
        minHeight: "240px",
        height: "0px",
      }}
    >
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
    </div>
  );
});
