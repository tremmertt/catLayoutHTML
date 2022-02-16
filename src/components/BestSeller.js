/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function BestSeller() {
  function Product() {
    return (
      <div class="md:flex justify-center border-gray-300 border-2">
        <div className="grid grid-cols-6 gap-4  md:max-w-xl bg-white shadow-lg">
          <img
            className="col-span-2 w-full h-96 m-2 md:h-auto object-cover p-2"
            src="https://dathangsi.vn/upload/products/2017/0415-bo-co-trang-diem-5-cay-(3).jpg"
            alt
          />
          <div className="col-span-4 p-4 flex flex-col justify-start text-left leading-loose">
            <h5 className="text-blue-400 text-xl font-medium mb-2">
              FISHING ROD SET
            </h5>
            <p className="text-blue-400 text-xs mb-4">Fiberglass</p>
            <p className="text-gray-600 text-xs">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <hr className="my-2" />
            <p className="text-blue-600 text-sm mb-1 font-thin col-start-1 col-span-2">
              {" "}
              $ 21 VND
            </p>

            <div className="grid grid-cols-5">
              <p className="text-red-500 font-extrabold text-xl col-start-1">
                {" "}
                00:01:17{" "}
              </p>
              <img
                style={{ width: "72px", height: "62px" }}
                className="md:flex justify-end col-start-4 col-span-2"
                src="https://freepikpsd.com/file/2019/10/sello-certificado-png-1-Transparent-Images.png"
                alt="https://freepikpsd.com/file/2019/10/sello-certificado-png-1-Transparent-Images.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200  py-2">
      <div class="container mx-auto my-4 static">
        <div class="lg:grid grid-cols-10 gap-1 col-span-10 col-start-3">
          <div
            className=" col-span-2 text-left text-gray-500  font-bold"
            style={{ fontSize: "25px" }}
          >
            BEST SELLER
          </div>
          <div className="lg:col-span-8 py-6  text-gray-400 pb-6 relative">
            <div className="py-5 text-xl text-center w-24 h-24 absolute text-yellow-500 font-extrabold right-0 z-10 bg-red-500">
              BEST SELLER
            </div>{" "}
            <hr style={{ height: "2px", background: "gray" }} />
          </div>
        </div>
        <div class="lg:grid grid-cols-12 gap-3  ">
          <div className=" col-span-4">{Product()}</div>

          <div className="md:col-span-4"> {Product()}</div>
          <div className="md:col-span-4"> {Product()} </div>
          <div className=" col-span-4"> {Product()} </div>
          <div className="md:col-span-4"> {Product()} </div>
          <div className="md:col-span-4"> {Product()} </div>
          <div className="flex justify-end col-start-11 col-span-2 my-2">
            <p className="text-sm font-semibold"> Xem thêm {`>>>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
