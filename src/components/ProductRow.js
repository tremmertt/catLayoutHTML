import React from "react";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";

export default function ProductRow(props) {
  console.log(props);
  function buildProduct() {
    const rows = [];
    if (props.data) {
      for (const product of props.data.listProduct) {
        rows.push(
          <div className="lg:col-span-2 md:col-span-3">
            <Product
              data={product}
              isHasBorder={props.data.isHasBorder}
              key={uuidv4()}
            />
          </div>
        );
      }
    }
    return rows;
  }

  return (
    <div
      className={
        "p-4 " + (props.data.isHasBackground ? "bg-gray-200" : "bg-white")
      }
    >
      <div className={"container mx-auto my-4  "}>
        {props.data.isHasTitle ? (
          <div class="lg:grid  md:grid-cols-9 lg:grid-cols-10 gap-1 col-span-10 col-start-3">
            <div
              className=" lg:col-span-3 md:col-span-3 text-left text-gray-500  font-bold"
              style={{ fontSize: "25px" }}
            >
              {props.data.name ? props.data.name : ""}
            </div>
            <div className="md:col-span-6 lg:col-span-7 py-6  text-gray-400 pb-6">
              {" "}
              <hr style={{ height: "2px", background: "gray" }} />
            </div>
          </div>
        ) : (
          <div class="lg:grid md:grid-cols-9 lg:grid-cols-10 gap-1 col-span-10 col-start-3"></div>
        )}
        <div class="lg:grid  md:grid-cols-9 lg:grid-cols-10 gap-3  col-span-10 col-start-3">
          {buildProduct()}
        </div>

        <div className="flex justify-end col-start-9 col-span-2 my-2">
          <p className="text-sm font-semibold"> Xem thêm {">>>"}</p>
        </div>
      </div>
    </div>
  );
}
