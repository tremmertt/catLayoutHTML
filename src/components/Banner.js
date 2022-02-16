import React from "react";

export default function Banner() {
  return (
    <div class="container mx-auto">
      <div class=" lg:grid grid-cols-5 gap-4">
        <div class="col-span-1 flex flex-row p-2 ml-4">
          <ul style={{ width: "250px" }} className="justify-center">
            <li className="bg-blue-500 text-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </li>
            <li className="">
              <a
                className=" text-red-600 font-bold text-xl flex items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Hot Deal
              </a>
            </li>
            <li className="bg-gray-300">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Best Seller
              </a>
            </li>
            <li className="">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Giá (Thấp - Cao)
              </a>
            </li>
            <li className="bg-gray-300">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Giá (Cao - Thấp)
              </a>
            </li>
            <li className="">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Đấu giá ngược
              </a>
            </li>
            <li className="bg-gray-300">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Đấu giá thuận
              </a>
            </li>
          </ul>
        </div>
        <div class=" lg:col-span-4 flex flex-row p-2  ">
          <img
            className="p-0 w-full"
            style={{ height: "350px" }}
            src="https://myphamxachtayhcm.com/timthumb.php?src=upload/images/2.jpg&w=960&h=350&zc=1&a=tc"
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
