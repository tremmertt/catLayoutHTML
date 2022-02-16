import React, { Fragment } from "react";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductRow from "../components/ProductRow";
import data from "../data/data.json";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  function buildCategory() {
    const rows = [];
    for (const index in data.listCategory) {
      if (index == 1) rows.push(<BestSeller />);
      rows.push(<ProductRow data={data.listCategory[index]} key={uuidv4()} />);
    }
    return rows;
  }

  return (
    <Fragment>
      <Header />
      <br />
      <Banner />
      <Banner2 />
      {buildCategory()}

      <Footer />
    </Fragment>
  );
}
