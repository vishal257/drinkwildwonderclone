import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import swirlarrow from "../assets/img/products/swirl-arrow.png";
import ProductTabs from "./Producttabs";

const Order = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`${count} item(s) added to the cart.`);
  };

  return (
    <div>
      <div className="flex w-full gap-4">
        <div className="flex items-center space-x-4 border-[3px] border-gray-600 rounded-lg md:px-6 md:py-3 px-4 py-2">
          <button onClick={decreaseCount}>
            <MinusIcon className="w-5 h-5 text-gray-600" />
          </button>

          <span className="text-lg font-semibold">{count}</span>

          <button onClick={increaseCount}>
            <PlusIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="w-full">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-[#E21B79] text-white rounded-lg md:p-3 text-2xl font-medium hover:bg-[#ee599e]"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full">
        <div className="w-20 ml-16 mt-4"><img src={swirlarrow} alt="swirlarrow" /></div>
        <div className="md:text-2xl text-lg relative top-3 mt-2 font-normal">Order 2+ for <span className="bg-yellow-200 font-medium">FREE SHIPPING!</span></div>
      </div>

      <div className="mt-8">
        <ProductTabs/>
      </div>

    </div>
  );
};

export default Order;
