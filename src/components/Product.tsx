import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Dropdownnumber from "./Dropdownnumber";
import { TfiCheck } from "react-icons/tfi";
import Order from "./Order";

import banana from "../assets/img/alsolike/banana-queen.png";
import raspberry from "../assets/img/alsolike/raspberry-lychee.png";
import strawberry from "../assets/img/alsolike/strawberry-passion.png";
import guava from "../assets/img/alsolike/guava-rose.png";
import pineapple from "../assets/img/alsolike/pineapple-paradise.png";
import mango from "../assets/img/alsolike/mango-gold.png";
import peach from "../assets/img/alsolike/peach-ginger.png";
import sharktank from "../assets/img/alsolike/shark-tank.png";
import variety from "../assets/img/alsolike/variety-pack.png";
import botanical from "../assets/img/alsolike/botanical.png";
import peachpic1 from "../assets/img/products/gallery/pp1.png";
import peachpic2 from "../assets/img/products/gallery/pp2.png";
import peachpic3 from "../assets/img/products/gallery/pp3.png";
import banana1 from "../assets/img/products/gallery/banana1.png";
import banana2 from "../assets/img/products/gallery/banana2.png";
import ras1 from "../assets/img/products/gallery/ras1.png";
import ras2 from "../assets/img/products/gallery/ras2.png";
import str1 from "../assets/img/products/gallery/str1.png";
import str2 from "../assets/img/products/gallery/str2.png";
import gua1 from "../assets/img/products/gallery/gua1.png";
import gua2 from "../assets/img/products/gallery/gua2.png";
import pin1 from "../assets/img/products/gallery/papple1.png";
import pin2 from "../assets/img/products/gallery/papple2.png";
import mang1 from "../assets/img/products/gallery/m1.png";
import mang2 from "../assets/img/products/gallery/m2.png";
import shark1 from "../assets/img/products/gallery/s1.png";
import shark2 from "../assets/img/products/gallery/s2.png";
import var1 from "../assets/img/products/gallery/s2.png";
import var2 from "../assets/img/products/gallery/v2.png";
import bot1 from "../assets/img/products/gallery/bot1.png";

const flavors = [
  {
    name: "Banana Queen",
    description:
      "Our fab collab with Nymphia Wind features sweet banana puree, decadent vanilla bean, and fresh brewed marigold flowers. Banana cream for the Banana Queen is a toast to Asian heritage and a celebration of this iconic yellow fruit.",
    price: "1,472.09 ฿",
    image: banana,
    gallery:[banana,banana1,banana2],
  },
  {
    name: "Raspberry Lychee",
    description:
      "Jammy raspberry puree, juicy lychees, and fresh brewed honeysuckle flowers reminiscent of your favorite gummy treats.",
    price: "1,472.09 ฿",
    image: raspberry,
    gallery: [raspberry, ras1, ras2],
  },

  {
    name: "Strawberry Passion",
    description:
      "Ripe strawberries and tart passion fruit meet freshly brewed hibiscus flowers for a sweet and tropical refresher.",
    price: "1,472.09 ฿",
    image: strawberry,
    gallery:[strawberry,str1,str2],
  },
  {
    name: "Guava Rose",
    description:
      "Tropical pink guava, freshly brewed rose petals, and soothing elderberry for a fruity and floral pink drink.",
    price: "1,472.09 ฿",
    image: guava,
    gallery: [guava, gua1, gua2],
  },
  {
    name: "Pineapple Paradise",
    description:
      "Sun-kissed pineapple, zesty lime, and citrusy tangerine juice for a poolside getaway in a can. A light twist of Sichuan peppercorn rounds out this tropical flavor with a warm hint of spice.",
    price: "1,472.09 ฿",
    image: pineapple,
    gallery: [pineapple, pin1, pin2],
  },
  {
    name: "Mango Gold",
    description:
      "Sweet sun-ripened mangos balanced with fresh brewed turmeric root and tart passion fruit in this tropical refresher.",
    price: "1,472.09 ฿",
    image: mango,
    gallery: [mango, mang1, mang2],
  },
  {
    name: "Peach Ginger",
    description:
      "Succulent peach and freshly brewed ginger root make this twist on sweet peach tea irresistible.",
    price: "1,472.09 ฿",
    image: peach,
    gallery:[peachpic1,peachpic2,peachpic3],
  },
  {
    name: "Shark tank bundle",
    description:
      "Try our Shark-Tank featured flavors that had all the Sharks raving... and landed us a deal! Includes 4 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger Discount applied at check out. One promo per order.",
    price: "$74.00",
    image: sharktank,
    gallery: [sharktank, shark1, shark2],
  },
  {
    name: "Variety Pack",
    description:
      "Can't decide on just one flavor? Experience all 6 prebiotic + probiotics flavors and all their gut friendly benefits! Includes 2 cans of each: Raspberry Lychee, Pineapple Paradise, Strawberry Passion, Mango Gold, Guava Rose and Peach Ginger.",
    price: "1,542.19 ฿",
    image: variety,
    gallery: [variety, var1, var2],
  },
  {
    name: "Botanical Bouquet",
    description:
      "A delightful dozen featuring our bestselling floral and fruity favorites. Includes 4 cans of each: Raspberry Lychee, Guava Rose, Strawberry Passion",
    price: "1,542.19 ฿",
    image: botanical,
    gallery: [botanical, raspberry, bot1],
  },
];


const Product = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);
  const [checked, setChecked] = useState(false);

  const handleFlavorClick = (flavor:any) => {
    setSelectedFlavor(flavor);
  };

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <section className="lg:w-[80%] m-auto">
      <div className="flex flex-col md:flex-row md:gap-8 p-6 md:p-12 font-light">
        <div className="md:w-1/2">
          <img
            src={selectedFlavor.image}
            alt={selectedFlavor.name}
            className="rounded-xl border-2 border-gray-700 shadow-md m-auto md:w-11/12"
          />
<div className="w-full mt-4">
  {selectedFlavor.gallery && (
    <div className="flex justify-between gap-2 w-full">
      {selectedFlavor.gallery.map((img, index) => (
        <button
          key={index}
          onClick={() => setSelectedFlavor({ ...selectedFlavor, image: img })}
          className="border-2 rounded-xl border-gray-700 overflow-hidden w-1/3"
        >
          <img
            src={img}
            alt={`gallery-${index}`}
            className="w-full h-auto object-cover"
          />
        </button>
      ))}
    </div>
  )}
</div>


        </div>

        <div className="md:w-1/2">
        <div>
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl font-bold mb-4 uppercase">{selectedFlavor.name}</h1>
          <h2>12 CANS | PREBIOTIC + PROBIOTIC SPARKLING DRINK</h2>
          <p className="flex gap-1 text-xl items-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt /> <span className="ml-3">75 REVIEWS</span>
          </p>
          <p className="md:text-lg text-md text-gray-600 mb-4">{selectedFlavor.description}</p>
          </div>
        </div>

          <h2 className="md:text-2xl mb-4 text-xl">Choose Your Flavor <span className="font-bold ">{selectedFlavor.name}</span></h2>
          <div className="grid grid-cols-5">
            {flavors.map((flavor, index) => (
              <div
                key={index}
                className="pb-2 cursor-pointer text-center rounded-lg pr-2"
                onClick={() => handleFlavorClick(flavor)}
              >
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="md:h-[5.5rem] md:w-[5.5rem] object-cover m-auto rounded-md mb-2"
                />
              </div>
            ))}
          </div>

          <div className="mt-2">
            <div className="w-full border-[3px] justify-between mt-4 py-3 px-4 rounded-lg focus-within:border-gray-600">
              <label htmlFor="size" className="flex w-full justify-between cursor-pointer">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    id="size"
                    value="one-time purchase"
                    className="checked:text-[#2A317D] w-6 h-6"
                  />
                  <label htmlFor="size" className="ml-2 lg:text-2xl text-sm font-medium">One-time purchase 12 Pack</label>
                </div>
                <div className="flex items-center font-medium lg:text-2xl text-sm">{selectedFlavor.price}</div>
              </label>
            </div>
            <div className="w-full mt-4 border-[3px] px-4 py-3 rounded-lg focus-within:border-gray-600">
              <label htmlFor="size2" className="cursor-pointer">
                <div className="flex w-full justify-between">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      id="size2"
                      value="subscribe"
                      className="checked:text-[#2A317D] w-6 h-6"
                    />
                    <label htmlFor="size2" className="font-medium lg:text-2xl text-sm underline decoration-wavy decoration-yellow-500 ml-2">
                      Subscribe & Save
                    </label>
                  </div>
                  <div className="flex items-center font-medium lg:text-2xl text-sm">
                    <span className="line-through md:mr-4 mr-1">{selectedFlavor.price}</span> 1,250.78 ฿
                  </div>
                </div>
              </label>
              <div className="mt-4">
                <Dropdown/>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-1 font-normal">
                  <TfiCheck /> Change or cancel anytime
                </div>
                <div className="flex items-center gap-1 font-normal">
                  <TfiCheck /> Exclusive gifts + discounts
                </div>
              </div>
          <div className="mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox" className="ml-2 font-medium text-md">Is this a gift?</label>
            </div>
            {checked && (
              <div className="mt-4 font-medium">
                <label className="uppercase cursor-pointer md:text-xl text-md">Number of Deliveries
                <Dropdownnumber />
                </label>
                <label htmlFor="textbox" className="cursor-pointer md:text-xl text-md">TO</label>
                <div className="mb-2">
                  <input
                  id="textbox"
                    type="text"
                    placeholder="Name (optional)"
                    className="w-full p-2 mt-2 border-[3px] px-4 py-3 md:text-xl text-md rounded-lg bg-transparent focus-within:border-gray-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mt-2 border-[3px] px-4 py-3 md:text-xl text-md rounded-lg bg-transparent focus-within:border-gray-600"
                  />
                </div>
                <label htmlFor="textarea" className="cursor-pointer md:text-xl text-md">Message (Maximum 200 Characters)</label>
                <textarea
                  id="textarea"
                  placeholder="Add a message (optional)"
                  rows={4}
                  className="w-full p-2 mt-2 border-[3px] px-4 py-3 md:text-xl text-md rounded-lg bg-transparent focus-within:border-gray-600"
                ></textarea>
              </div>
            )}
          </div>
            </div>
          </div>


          <div className="mt-8">
            <Order />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
