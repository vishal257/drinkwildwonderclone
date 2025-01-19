import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Dropdownnumber() {
  const [selectedOption, setSelectedOption] = useState("2");

  return (
    <Menu as="div" className="relative inline-block text-left w-full my-2">
      <div>
        <MenuButton className="inline-flex justify-between w-full gap-x-1.5 bg-transparent py-3 px-4 rounded-lg text-lg font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-gray-700 hover:bg-transparent">
          <div className='flex w-full justify-between items-center'>
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
        className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 8 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              2
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 8 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              3
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 8 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              4
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 12 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              5
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              6
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              7
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              8
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              9
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              10
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              11
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              12
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              onClick={() => setSelectedOption("Delivery every 2 weeks - 15% off")}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              13
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
