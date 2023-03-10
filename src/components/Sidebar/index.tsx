import React, { useEffect } from "react";
import { MdDashboard, MdEmail } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { RiSettings4Fill } from "react-icons/ri";
import { IconType } from "react-icons";

export default function Sidebar() {
  return (
    <nav className="hidden w-2/12 flex-col bg-white py-10  pl-4 xs:hidden xl:flex 2xl:pl-14">
      LOGO
      <section className=" mt-20 flex flex-1 flex-col space-y-14">
        <IconAndLabel icon={MdDashboard} label="Overview" selected />
        <IconAndLabel icon={AiOutlineFundProjectionScreen} label="Projects" />
        <IconAndLabel icon={FaTasks} label="Tasks" />
        <IconAndLabel icon={MdEmail} label="Inbox" badge="33" />
        <IconAndLabel icon={IoDocumentText} label="Documents" />
        <IconAndLabel icon={SiGoogleanalytics} label="Analytics" />
        <IconAndLabel icon={RiSettings4Fill} label="Settings" />
      </section>
    </nav>
  );
}

function IconAndLabel(props: {
  icon: IconType;
  label: string;
  selected?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`flex flex-row items-center space-x-7 hover:cursor-pointer  ${
        props.selected ? "border-r-4 border-indigo-800 text-indigo-800" : ""
      } `}
    >
      <props.icon size={"25"} />
      <span className="text-xl font-medium">{props.label}</span>
      {props.badge && (
        <span className="bg-red-500 ml-10 rounded-full px-2 py-1 text-sm text-white">
          {props.badge}
        </span>
      )}
    </div>
  );
}
