"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  EyeIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";
import { BookType } from "@/app/books/page";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Book = ({ title, author, price, description }: BookType) => {
  return (
    <div className="bg-white px-4 py-5 sm:px-6 border rounded-md w-64 h-64">
      <div className="flex space-x-3">
        <div className="min-w-0 flex-1 space-y-4">
          <h1 className="hover:underline">
            <p className="text-sm font-semibold text-gray-900">{title}</p>
          </h1>
          <p className="text-sm text-gray-500">Author : {author}</p>
          <p className="text-sm text-gray-500">price : {price}$</p>
          <p className="text-sm text-gray-500">description : {description}</p>
        </div>
        <div className="flex flex-shrink-0 self-start">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <h3
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <EyeIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>View Details</span>
                      </h3>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <h3
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "flex px-4 py-2 text-sm"
                        )}
                      >
                        <PlusCircleIcon
                          className="mr-3 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Purchase</span>
                      </h3>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Book;
