import React from "react";

export default function Banner2() {
  function dayReturnPolicy() {
    return (
      <div class="xl:h-24 lg:grid grid-rows-3 grid-flow-col gap-4 p-2 outline outline-1 outline-gray-400">
        <div class="row-span-3 p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
              strokeWidth={2}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </div>
        <div class="xl:col-span-2 p-0 my-0 text-lg font-bold text-left">
          30 DAY RETURN POLICY
        </div>
        <div class="xl:row-span-2 p-0 col-span-2 text-left text-gray-400">
          Lorem Ipsum is simply dummy text of the printing
        </div>
      </div>
    );
  }
  return (
    <div class="container mx-auto">
      <div class="xl:grid grid-cols-8 gap-4 py-4">
        <div className="md:col-span-2">{dayReturnPolicy()}</div>
        <div className="md:col-span-2">{dayReturnPolicy()}</div>
        <div className="md:col-span-2">{dayReturnPolicy()}</div>
        <div className="md:col-span-2">{dayReturnPolicy()}</div>
      </div>
    </div>
  );
}
