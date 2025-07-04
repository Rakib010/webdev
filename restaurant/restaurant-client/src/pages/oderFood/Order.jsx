import React, { useMemo, useState } from "react";
import oderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../shared/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OderTab from "./OderTab/OderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Restaurant | Order Food </title>
      </Helmet>
      <Cover img={oderCoverImg} title="Order Food" />
      <div className="w-11/12 mx-auto my-20 text-center">
        <Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
