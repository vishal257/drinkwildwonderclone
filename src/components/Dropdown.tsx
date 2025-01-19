import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("Delivery every 4 weeks - 15% off");

  return (
    <Menu as="div" className="relative inline-block text-left w-full bg-transparent">
      <div>
        <MenuButton className="w-full gap-x-1.5 rounded-md px-3 py-2 md:text-lg text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-transparent">
          <div className='flex justify-between items-center'>
            <div>
              {selectedOption}
            </div>
            <div>
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </div>
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute cursor-pointer right-0 w-full z-10 mt-0 origin-top-right rounded-md bg-[#042181] shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-0">
          <MenuItem>
            <div
              onClick={() => setSelectedOption("Delivery every 8 weeks - 15% off")}
              className="block px-4 py-2 text-md font-semibold text-white data-[focus]:bg-[#1f447b] rounded-t-md  data-[focus]:outline-none"
            >
              Delivery every 4 weeks - 15% off
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => setSelectedOption("Delivery every 8 weeks - 15% off")}
              className="block px-4 py-2 text-md font-semibold text-white data-[focus]:bg-[#1f447b] rounded-t-md  data-[focus]:outline-none"
            >
              Delivery every 8 weeks - 15% off
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => setSelectedOption("Delivery every 12 weeks - 15% off")}
              className="block px-4 py-2 text-md font-semibold text-white data-[focus]:bg-[#1f447b] rounded-t-md  data-[focus]:outline-none"
            >
              Delivery every 12 weeks - 15% off
            </div>
          </MenuItem>
          <MenuItem>
            <div
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-md font-semibold text-white data-[focus]:bg-[#1f447b] rounded-t-md  data-[focus]:outline-none"
            >
              Delivery every 2 weeks - 15% off
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
