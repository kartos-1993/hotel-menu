// import { logDOM } from '@testing-library/dom';
import React from "react";
import MenuItems from "../components/MenuItem";

function Beverage(props) {
  const cold_drinks = {
    title: "cold drinks",
    items: [
      {
        name: "coke",
        imageUrl: "https://i.ibb.co/sqDPv8d/coke.webp",
        price: 50
      },
      {
        name: "fanta",
        imageUrl: "https://i.ibb.co/zGRGL4t/fanta.webp",
        price: 50
      },
      {
        name: "sprite",
        imageUrl: "https://i.ibb.co/9wgvMNR/sprite.webp",
        price: 50
      },
      {
        name: "can juice (pineapple)",
        imageUrl: "https://i.ibb.co/NrbfYqt/can-juice-pineapple.webp",
        price: 120
      },
      {
        name: "can juice (mixed)",
        imageUrl: "https://i.ibb.co/CMRg2W4/can-juice-mixed.webp",
        price: 120
      }
    ]
  };

  const beer = {
    title: "beer",
    items: [
      {
        name: "tuborg",
        imageUrl: "https://i.ibb.co/PgX2t2w/tuborg-glass.webp",
        price: 450
      },
      {
        name: "arna 8 (330ml)",
        imageUrl: "https://i.ibb.co/bbyLpxW/arna320ml.webp",
        price: 200
      },
      {
        name: "tuborg can",
        imageUrl: "https://i.ibb.co/fCggWWd/tuborg-can.webp",
        price: 380
      },
      {
        name: "arna light",
        imageUrl: "https://i.ibb.co/G7DLsJX/arna-Light.webp",
        price: 475
      },
      {
        name: "apple cider",
        imageUrl: "https://i.ibb.co/qyRjYr2/apple-Cider.webp",
        price: 225
      }
    ]
  };

  return (
    <>
      <MenuItems items={cold_drinks} />
      <MenuItems items={beer} />
    </>
  );
}

export default Beverage;
