/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto">
      <header className="grid md:min-w-0 w-full text-black-600 body-font ">
        <div className=" md:flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
          <div className=" md:flex flex-wrap items-center text-base justify-center">
            <a className="mx-1 hover:text-gray-900">Kênh người bán | </a>
            <divider
              style={{
                width: "1px",
                color: "black",
                height: "100%",
                background: "black",
              }}
            />
            <a className="mx-1 hover:text-gray-900">Tải ứng dụng |</a>
            <divider
              style={{
                width: "1px",
                color: "black",
                height: "100%",
                background: "black",
              }}
            />
            <a className="mr-5 hover:text-gray-900">Kết nối</a>
          </div>
          <div className="inline-flex items-center text-base justify-center mt-4 md:mt-0">
            <a className="mr-1 hover:text-gray-900">Việt Nam</a>
            <img
              style={{ width: "30px", height: "24px" }}
              className="mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
              alt="flat"
            />
            <a className="mr-1 hover:text-gray-900">Đăng kí</a>
            <img
              style={{
                width: "20px",
                height: "100%",
              }}
              src="https://www.symbols.com/images/symbol/1888_vertical-bar.png"
              alt="https://www.symbols.com/images/symbol/1888_vertical-bar.png"
            />
            <a className="mr-5 hover:text-gray-900">Đăng nhập</a>
          </div>
        </div>
      </header>
      <hr />
      <div class="lg:grid grid-cols-6 gap-4">
        <div class="col-span-6  flex flex-row p-4 ">
          <a className="   title-font font-medium items-center text-gray-900 mx-4">
            <h1 className="text-blue-500 text-5xl text-solid "> LOGO </h1>
          </a>
          <input
            type="search"
            className="form-control mr-2 relative flex-auto md:min-w-0  xl:w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            style={{ width: "500px !important" }}
          />
          <button
            className="btn   px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  items-center"
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
          <button
            className=" outline outline-none  "
            type="button"
            id="button-addon2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="text-blue-400"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr />
      <div className="xl:max-w-full sm:min-w-0 flex justify-center align-center">
        <ul className="lg:flex mr-2 text-black-400 text-sm">
          <li className="mx-4"> ENDING </li>
          <divider
            style={{
              width: "1px",
              color: "black",
              height: "100%",
              background: "black",
            }}
          />
          <li className="mx-4"> NOW </li>
          <li className="mx-4"> FOR HER </li>
          <li className="mx-4"> FOR HIM </li>
          <li className="mx-4"> HOME & GARDEN </li>
          <li className="mx-4"> KIDS & TOYS </li>
          <li className="mx-4"> ELECTRONICS & GADGETS </li>
          <li className="mx-4"> TRAVEL & SPORTS </li>
          <li className="mx-4"> CAR & MOTOR </li>
          <li className="mx-4"> TOOLS </li>
          <li className="mx-4"> GROCERIES </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}
