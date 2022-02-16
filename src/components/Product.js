import React from "react";

export default function Product(props) {
  // props.title = "FISHING ROD SET";
  // props.subTitle = "FISHING ROD SET";
  // props.timeOut = "00:10:20";
  // props.price = "20";
  return (
    <div
      className={
        "lg:h-auto w-full p-4 " +
        (props.isHasBorder ? " border border-gray-400" : "  none-border")
      }
    >
      <div className="text-blue-400">
        <h5 className="font-bold"> {props.data ? props.data.title : ""} </h5>
        <p className="text-sm"> {props.data ? props.data.subTitle : ""} </p>
      </div>
      <div class="col-span-2 p-0 my-5 text-lg font-bold text-left">
        <img
          style={{ width: "160px", heigh: "250px" }}
          className="md:justify-items-center mx-auto"
          src="https://inkeylist.vn/wp-content/uploads/2021/05/The-Inkey-List-Vitamin-B-C-E-Moisturizer.jpg"
          alt="cream"
        />
      </div>
      <hr />
      <p className="text-red-600 flex justify-end font-bold text-xl my-2">
        {" "}
        {props.data ? props.data.timeOut : ""}{" "}
      </p>
      <div className="lg:grid grid-cols-6 col-start-1 gap-1 text-gray-400 text-sm">
        <p className=" col-span-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 inline mx-2 my-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {props.data ? props.data.price : ""} VND{" "}
        </p>
        <div className="lg:flex justify-end col-start-5 col-span-2 my-auto">
          <div className="lg:w-full bg-gray-400 h-2.5 rounded-full drak:bg-gray-700">
            <div
              className="bg-gray-600 rounded-full h-2.5 dark:bg-gray-300"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
