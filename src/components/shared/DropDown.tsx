import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown<ItemType>({
  options,
  selected,
  onChange,
}: {
  options: ItemType[];
  selected: any;
  onChange: (e: ItemType) => void;
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center text-2xl font-medium text-gray-700">
          {selected}
          <RiArrowDownSLine />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-1  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((item: any) => (
              <Menu.Item key={item}>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-2xl"
                    )}
                    onClick={() => onChange(item)}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
