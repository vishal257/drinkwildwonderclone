import { useState } from "react";
import organic from "../assets/img/products/benefits/organic.png";
import probiotic from "../assets/img/products/benefits/probiotic.png";
import fiber from "../assets/img/products/benefits/Fiber.png";
import sugar from "../assets/img/products/benefits/sugar.png";
import gmo from "../assets/img/products/benefits/gmo.png";
import vegan from "../assets/img/products/benefits/vegan.png";

const Benifit = () => {
  return (
    <div className="bg-[#C3E8F1] relative bottom-5 w-full rounded-b-2xl p-4 sm:text-lg text-sm font-semibold">
    <div className="grid grid-cols-3 text-center bg-[#C3E8F1]">
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={organic} alt="organic" className="w-full h-full object-contain" />
        </div>
        <div>CERTIFIED ORGANIC</div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={probiotic} alt="probiotic" className="w-full h-full object-contain" />
        </div>
        <div>1 BILLION PROBIOTICS</div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={fiber} alt="fiber" className="w-full h-full object-contain" />
        </div>
        <div>5g DIETARY FIBER</div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={sugar} alt="sugar" className="w-full h-full object-contain" />
        </div>
        <div>6g SUGAR</div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={gmo} alt="gmo" className="w-full h-full object-contain" />
        </div>
        <div>GMO Free</div>
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="h-16 mb-2">
          <img src={vegan} alt="vegan" className="w-full h-full object-contain" />
        </div>
        <div>Vegan</div>
      </div>
    </div>
  </div>
  
  );
};

const Ingredients = () => {
  return (
    <div className="tab-content bg-[#BCE194] relative bottom-5 w-full rounded-b-2xl p-4">
      <div>
        <h2>Mango Gold</h2>
        <p className="font-normal mt-2">Fresh Brewed Turmeric* (Filtered Water, Turmeric Root*), Mango Puree*, Passion Fruit Juice*, Agave Nectar*, Jerusalem Artichoke*, Chicory Root Inulin, Mango Flavor*, Monk Fruit Extract*, Live Probiotics (Bacillus subtilis), Black Pepper* (*organic)</p>
      </div>
    </div>
  );
}

const Nutritioinalfacts = () => {
  return (
    <div className="p-4 bg-[#FDE282] relative bottom-6 w-full rounded-2xl">
  <div className="space-y-4 font-normal">
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Serving Size</span>
      <span>1 can</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Calories</span>
      <span>40</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Total Fat</span>
      <span>0g</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Sodium</span>
      <span>0mg</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Total Carbohydrates</span>
      <span>12g</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Dietary Fiber</span>
      <span>5g</span>
    </div>
    <div className="flex justify-between border-b-2 pb-2 border-black">
      <span className="">Total Sugars</span>
      <span>6g</span>
    </div>
    <div className="flex justify-between pb-2">
      <span className="">Protein</span>
      <span>10g</span>
    </div>
  </div>
</div>

  );
}

const ProductTabs = () => {
  const [selectedTab, setSelectedTab] = useState("benefit");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "benefit":
        return (
          <Benifit/>
        );
      case "ingredient":
        return (
          <Ingredients/>
        );
      case "nutrition":
        return (
          <Nutritioinalfacts/>
        );
      default:
        return (
          <div className="tab-content">
            Please select a tab to see the content.
          </div>
        );
    }
  };

  return (
    <div className="product-tabs text-xl font-medium">
      <div className="tabs flex border-b">
        <button
          onClick={() => setSelectedTab("benefit")}
          className={`tab-button w-full rounded-t-2xl bg-[#C3E8F1] hover:bg-[#C3E8F1] ${
            selectedTab === "benefit" ? "border-b-2 bg-[#C3E8F1]" : ""
          }`}
        >
          Benefits
        </button>
        <button
          onClick={() => setSelectedTab("ingredient")}
          className={`tab-button w-full rounded-t-2xl bg-[#BCE194] hover:bg-[#BCE194] ${
            selectedTab === "ingredient" ? "border-b-2 bg-[#BCE194]" : ""
          }`}
        >
          Ingredients
        </button>
        <button
          onClick={() => setSelectedTab("nutrition")}
          className={`tab-button w-full py-4 rounded-t-2xl bg-[#FDE282]  hover:bg-[#FDE282] ${
            selectedTab === "nutrition" ? "border-b-2 bg-[#FDE282]" : ""
          }`}
        >
          Nutrition Facts
        </button>
      </div>
      <div className="tab-content-container mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default ProductTabs;
