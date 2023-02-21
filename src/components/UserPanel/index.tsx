import React from "react";
import DropDown from "../shared/DropDown";
import { BsBellFill } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

export default function UserPanel() {
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>("EN");
  return (
    <nav
      className="hidden h-2/3 flex-grow flex-col justify-between rounded-b-xl py-8  px-4 shadow-lg lg:flex"
      style={{
        backgroundColor: "#EEF0F6",
      }}
    >
      <section className="flex w-full items-center justify-between">
        <div className="flex items-center space-x-8">
          <DropDown
            selected={selectedLanguage}
            options={["EN", "AR"]}
            onChange={(value) => {
              setSelectedLanguage(value);
            }}
          />
          <BsBellFill className="text-xl" />
        </div>
        <div className="flex items-center space-x-8">
          <RiSettings4Fill className="text-2xl" />
          <IoLogOutSharp className="text-2xl" />
        </div>
      </section>
      <section className="justify-cente w-fullr my-5 flex flex-col items-center">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
          alt="user"
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col text-center">
          <span className="text-xl font-medium text-slate-500">John Doe</span>
          <span className=" font-light">Traffic & Brand Manager</span>
        </div>
      </section>

      <section className="flex w-full flex-col items-start justify-start space-y-3">
        <label className="text-2xl font-bold text-slate-500">Admin Panel</label>

        <div className="w-full space-y-3">
          <ItemsCard
            Icon={AiOutlineFundProjectionScreen}
            color={"red"}
            shade="bg-rose-100"
          />
          <ItemsCard Icon={FaTasks} color={"blue"} shade="bg-slate-200" />
          <ItemsCard Icon={TiGroup} color={"gold"} shade="bg-yellow-100" />
        </div>
      </section>
    </nav>
  );
}

const ItemsCard = ({ Icon, color, shade }: any) => {
  return (
    <div className="bg- flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-lg">
      <Icon className={`rounded-2xl ${shade} p-2 text-5xl text-${color}`} />
      <div className="ml-2 flex flex-grow flex-col items-start justify-start">
        <label className="text-2xl font-bold text-slate-500">
          Assigned Tasks
        </label>
        <span className=" font-light">Check all tasks assigned to you</span>
      </div>
    </div>
  );
};
