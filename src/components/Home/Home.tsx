import InformationCard from "./InformationCard";

import {
  barChartMock,
  lineGraphMock,
  bumpGraphMock,
  informationCardMock,
  progresMock,
} from "./../mocks/index";

import { LineGraph } from "./LineGraph";
import { BumpGraph } from "./BumpGraph";
import Progress from "./Progress";
import { BarChart } from "./BarChart";

const colors = ["red", "blue", "gold", "violet"];

const Home = () => {
  return (
    <div className="flex h-full flex-col overflow-auto overflow-x-hidden bg-slate-100 py-8 px-6 md:w-full lg:w-8/12 xl:w-7/12">
      <label className="text-2xl font-bold text-slate-500">Overview</label>
      <section className="mt-10 flex w-full flex-wrap justify-center gap-6">
        {informationCardMock.map((card, index) => (
          <InformationCard
            value={card.value}
            title={card.title}
            color={`bg-${colors[index]}`}
            key={card.id}
          />
        ))}
      </section>
      <section className=" mt-4 w-full justify-between 2xl:flex">
        <div className="flex h-80 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-5 2xl:w-7/12 ">
          <label className="mb-5 text-xl font-bold text-slate-700">
            Planned and Actual Expenses
          </label>
          <div className=" flex flex-1 flex-col">
            <BarChart data={barChartMock} />
          </div>
        </div>
        <div className="flex h-80 w-5/12 flex-auto flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:ml-5 2xl:mt-0 2xl:w-5/12">
          <label className="mb-5 text-xl font-bold text-slate-700">
            Monthly milestones
          </label>
          <div className="flex flex-1 flex-col space-y-2 overflow-auto">
            {progresMock.map((progress, index) => (
              <Progress
                progress={progress.progress}
                title={progress.title}
                subtitle={progress.subtitle}
                color={colors[index % 2]}
                key={progress.id}
              />
            ))}
          </div>
        </div>
      </section>
      <section className=" mt-4 w-full justify-between  2xl:flex">
        <div className="flex h-80 flex-col rounded-2xl bg-white p-5 shadow-xl xs:mr-0 xs:w-full 2xl:mr-5 2xl:w-8/12">
          <label className="mb-5 text-xl font-bold text-slate-700">
            Annual Leads Dynamic
          </label>
          <LineGraph data={lineGraphMock} />
        </div>
        <div className="flex h-80 flex-auto flex-col rounded-2xl bg-white p-5 shadow-xl xs:mt-4 xs:w-full 2xl:mt-0 2xl:ml-5 2xl:w-4/12">
          <label className="mb-5 text-xl font-bold text-slate-700">
            Weekly OSI Dynamic
          </label>
          <BumpGraph data={bumpGraphMock as any} />
        </div>
      </section>
    </div>
  );
};

export default Home;
